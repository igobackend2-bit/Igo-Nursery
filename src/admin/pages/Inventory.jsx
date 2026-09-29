import { useMemo, useRef, useState } from 'react';
import { readSheet } from 'read-excel-file/browser';
import { useAdminData } from '../AdminDataContext';
import { addProductDoc } from '../../lib/catalogue';

// ---- Excel upload helpers -------------------------------------------------
// Accepted column headers (case-insensitive). Only a name/ID column and one
// of availability/quantity are needed; the rest are optional.
const HEADER_ALIASES = {
  id: ['id', 'product id', 'sku'],
  name: ['name', 'product', 'product name', 'item', 'item name'],
  availability: ['availability', 'status', 'stock status', 'stock'],
  quantity: ['quantity', 'qty', 'stock quantity'],
  price: ['price', 'selling price', 'price (₹)', 'price (rs)'],
  originalPrice: ['original price', 'mrp'],
  category: ['category', 'category name'],
  image: ['image', 'image url'],
};

const norm = (v) => String(v ?? '').trim().toLowerCase();
const isBlank = (v) => v === null || v === undefined || String(v).trim() === '';

function parseAvailability(v) {
  if (isBlank(v)) return null;
  if (typeof v === 'number') return v > 0 ? 'In Stock' : 'Out of Stock';
  const s = norm(v);
  if (/^\d+(\.\d+)?$/.test(s)) return Number(s) > 0 ? 'In Stock' : 'Out of Stock';
  if (/(out|unavailable|sold|^no$|^n$)/.test(s)) return 'Out of Stock';
  if (/(in stock|instock|available|^yes$|^y$|in)/.test(s)) return 'In Stock';
  return null;
}

function buildPlan(rows, products, categories) {
  const headers = (rows[0] ?? []).map(norm);
  const col = {};
  for (const [key, aliases] of Object.entries(HEADER_ALIASES)) {
    const idx = headers.findIndex((h) => aliases.includes(h));
    if (idx !== -1) col[key] = idx;
  }
  if (col.id === undefined && col.name === undefined) {
    throw new Error('Could not find a "Name" or "ID" column in the first row of the sheet.');
  }
  if (col.availability === undefined && col.quantity === undefined && col.price === undefined) {
    throw new Error('Add at least one of: "Availability", "Quantity" or "Price" columns.');
  }

  const byId = new Map(products.map((p) => [String(p.id), p]));
  const byName = new Map();
  products.forEach((p) => { if (!byName.has(norm(p.name))) byName.set(norm(p.name), p); });
  const catLookup = new Map();
  categories.forEach((c) => { catLookup.set(norm(c.slug), c); catLookup.set(norm(c.label), c); });

  const cell = (r, key) => (col[key] === undefined ? undefined : r[col[key]]);
  const updates = [];
  const adds = [];
  const skipped = [];
  const seenNew = new Set();

  for (let i = 1; i < rows.length; i += 1) {
    const r = rows[i] ?? [];
    if (r.every(isBlank)) continue;
    const line = i + 1;
    const idVal = isBlank(cell(r, 'id')) ? '' : String(cell(r, 'id')).trim();
    const nameVal = isBlank(cell(r, 'name')) ? '' : String(cell(r, 'name')).trim();
    if (!idVal && !nameVal) { skipped.push(`Row ${line}: no name or ID`); continue; }

    const availRaw = !isBlank(cell(r, 'availability')) ? cell(r, 'availability') : cell(r, 'quantity');
    const availability = parseAvailability(availRaw);
    if (!isBlank(availRaw) && !availability) {
      skipped.push(`Row ${line} (${nameVal || idVal}): unrecognised availability "${availRaw}" - use In Stock / Out of Stock or a number`);
      continue;
    }
    let price;
    if (!isBlank(cell(r, 'price'))) {
      price = Number(cell(r, 'price'));
      if (!Number.isFinite(price) || price < 0) { skipped.push(`Row ${line} (${nameVal || idVal}): invalid price`); continue; }
    }
    let originalPrice;
    if (!isBlank(cell(r, 'originalPrice'))) {
      originalPrice = Number(cell(r, 'originalPrice'));
      if (!Number.isFinite(originalPrice) || originalPrice < 0) { skipped.push(`Row ${line} (${nameVal || idVal}): invalid original price`); continue; }
    }

    const existing = (idVal && byId.get(idVal)) || (nameVal && byName.get(norm(nameVal)));
    if (existing) {
      const patch = {};
      if (availability) patch.availability = availability;
      if (price !== undefined) patch.price = price;
      if (originalPrice !== undefined) patch.originalPrice = originalPrice;
      if (Object.keys(patch).length === 0) { skipped.push(`Row ${line} (${existing.name}): nothing to update`); continue; }
      updates.push({ id: existing.id, name: existing.name, patch });
      continue;
    }

    // Not in the catalogue yet -> add as a new product.
    if (!nameVal) { skipped.push(`Row ${line}: ID "${idVal}" not found and no name given to add it`); continue; }
    if (price === undefined) { skipped.push(`Row ${line} (${nameVal}): new product needs a Price`); continue; }
    const cat = catLookup.get(norm(cell(r, 'category')));
    if (!cat) { skipped.push(`Row ${line} (${nameVal}): new product needs a valid Category (name or slug)`); continue; }
    if (seenNew.has(norm(nameVal))) { skipped.push(`Row ${line} (${nameVal}): duplicate of an earlier new row`); continue; }
    seenNew.add(norm(nameVal));
    const imageVal = isBlank(cell(r, 'image')) ? '' : String(cell(r, 'image')).trim();
    adds.push({
      name: nameVal,
      price,
      originalPrice: originalPrice ?? price,
      category: cat.slug,
      categoryLabel: cat.label,
      availability: availability ?? 'In Stock',
      image: imageVal,
      images: [],
      video: '',
      rating: 4.5,
      reviews: 0,
      isBestSeller: false,
      translations: {},
    });
  }
  return { updates, adds, skipped };
}

function AdminInventory() {
  const { products, categories, updateProduct } = useAdminData();
  const [query, setQuery] = useState('');
  const [onlyLow, setOnlyLow] = useState(false);
  const fileRef = useRef(null);
  const [plan, setPlan] = useState(null);
  const [uploadError, setUploadError] = useState('');
  const [applying, setApplying] = useState(false);
  const [uploadResult, setUploadResult] = useState('');

  const rows = useMemo(() => {
    let list = products;
    if (onlyLow) list = list.filter((p) => p.availability === 'Out of Stock');
    const q = query.trim().toLowerCase();
    if (q) list = list.filter((p) => p.name.toLowerCase().includes(q));
    return list;
  }, [products, query, onlyLow]);

  const outOfStockCount = products.filter((p) => p.availability === 'Out of Stock').length;

  async function handleFile(e) {
    const file = e.target.files?.[0];
    e.target.value = '';
    if (!file) return;
    setPlan(null);
    setUploadResult('');
    setUploadError('');
    if (!/\.xlsx$/i.test(file.name)) {
      setUploadError('Please choose an Excel file saved as .xlsx (in Excel: File > Save As > Excel Workbook).');
      return;
    }
    try {
      const sheetRows = await readSheet(file);
      setPlan(buildPlan(sheetRows, products, categories));
    } catch (err) {
      setUploadError(err?.message || 'Could not read that Excel file.');
    }
  }

  async function applyPlan() {
    if (!plan) return;
    setApplying(true);
    setUploadError('');
    let updated = 0;
    let added = 0;
    const failed = [];
    for (const u of plan.updates) {
      try {
        await updateProduct(u.id, u.patch);
        updated += 1;
      } catch (err) {
        failed.push(`${u.name}: ${err?.message || 'update failed'}`);
      }
    }
    // addProductDoc numbers new ids from the list it is given, so feed it
    // the products added so far in this run - otherwise every new row would
    // get the same id and overwrite the previous one.
    const addedSoFar = [];
    for (const a of plan.adds) {
      try {
        const id = await addProductDoc(a, [...products, ...addedSoFar]);
        addedSoFar.push({ id });
        added += 1;
      } catch (err) {
        failed.push(`${a.name}: ${err?.message || 'add failed'}`);
      }
    }
    setApplying(false);
    setPlan(null);
    setUploadResult(`Done - ${updated} updated, ${added} added${failed.length ? `, ${failed.length} failed` : ''}.${failed.length ? ` ${failed.slice(0, 3).join(' | ')}` : ''}`);
  }

  return (
    <div>
      <div className="admin-page-head">
        <div>
          <h1 className="admin-page-title">Inventory</h1>
          <p className="admin-page-sub">{outOfStockCount} of {products.length} products are currently out of stock.</p>
        </div>
        <div>
          <button
            type="button"
            className="admin-btn admin-btn-primary"
            style={{ width: 'auto' }}
            disabled={applying}
            onClick={() => fileRef.current?.click()}
          >
            Upload Excel
          </button>
          <input ref={fileRef} type="file" accept=".xlsx" onChange={handleFile} style={{ display: 'none' }} />
        </div>
      </div>

      <div className="admin-mock-banner">
        Stock is tracked on the product's own <code>availability</code> field (real, Firestore-backed - "Mark in/out
        of stock" below saves permanently). A dedicated <code>inventory</code> collection with real stock counts and
        a low-stock threshold is a possible future upgrade, not built yet.
      </div>

      <div className="admin-mock-banner">
        <strong>Upload Excel (.xlsx):</strong> first row = headers. Use <code>Name</code> (or <code>ID</code>) plus{' '}
        <code>Availability</code> (In Stock / Out of Stock) or <code>Quantity</code>; optional: <code>Price</code>,{' '}
        <code>Original Price</code>, <code>Category</code>, <code>Image</code>. Rows matching an existing product update
        it; new names with a Price and valid Category are added. You'll see a preview before anything is saved.
      </div>

      {uploadError && (
        <div className="admin-mock-banner" style={{ color: '#b91c1c', fontWeight: 600 }}>{uploadError}</div>
      )}
      {uploadResult && (
        <div className="admin-mock-banner" style={{ fontWeight: 600 }}>{uploadResult}</div>
      )}
      {plan && (
        <div className="admin-panel" style={{ marginBottom: 16 }}>
          <p style={{ margin: '0 0 8px', fontWeight: 600 }}>
            Ready to apply: {plan.updates.length} to update, {plan.adds.length} to add, {plan.skipped.length} skipped.
          </p>
          {plan.skipped.length > 0 && (
            <ul style={{ margin: '0 0 10px', paddingLeft: 18, fontSize: '0.84rem', maxHeight: 160, overflow: 'auto' }}>
              {plan.skipped.slice(0, 50).map((s) => <li key={s}>{s}</li>)}
              {plan.skipped.length > 50 && <li>…and {plan.skipped.length - 50} more</li>}
            </ul>
          )}
          <div style={{ display: 'flex', gap: 8 }}>
            <button
              type="button"
              className="admin-btn admin-btn-primary"
              style={{ width: 'auto' }}
              disabled={applying || (plan.updates.length === 0 && plan.adds.length === 0)}
              onClick={applyPlan}
            >
              {applying ? 'Applying…' : 'Apply changes'}
            </button>
            <button type="button" className="admin-btn admin-btn-ghost" disabled={applying} onClick={() => setPlan(null)}>
              Cancel
            </button>
          </div>
        </div>
      )}

      <div className="admin-toolbar">
        <input className="admin-search" placeholder="Search products…" value={query} onChange={(e) => setQuery(e.target.value)} />
        <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.84rem' }}>
          <input type="checkbox" checked={onlyLow} onChange={(e) => setOnlyLow(e.target.checked)} />
          Out of stock only
        </label>
      </div>

      <div className="admin-panel" style={{ padding: 0 }}>
        <div className="admin-table-wrap">
          <table className="admin-table">
            <thead><tr><th>Product</th><th>Category</th><th>Status</th><th></th></tr></thead>
            <tbody>
              {rows.slice(0, 200).map((p) => {
                const outOfStock = p.availability === 'Out of Stock';
                return (
                  <tr key={p.id}>
                    <td>
                      <div className="admin-cell-name">
                        <img src={p.image} alt="" className="admin-thumb" />
                        {p.name}
                      </div>
                    </td>
                    <td>{p.categoryLabel}</td>
                    <td>
                      <span className={`admin-pill ${outOfStock ? 'out-stock' : 'in-stock'}`}>
                        {p.availability ?? 'In Stock'}
                      </span>
                    </td>
                    <td>
                      <button
                        type="button"
                        className="admin-btn admin-btn-ghost admin-btn-sm"
                        onClick={() => updateProduct(p.id, { availability: outOfStock ? 'In Stock' : 'Out of Stock' })}
                      >
                        Mark {outOfStock ? 'in stock' : 'out of stock'}
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        {rows.length === 0 && <div className="admin-empty"><strong>Nothing matches</strong></div>}
      </div>
    </div>
  );
}

export default AdminInventory;
