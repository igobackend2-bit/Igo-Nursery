import { useEffect, useMemo, useState } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import { subscribeAllOrders } from '../../lib/orders';

// Registered customers = every users/{uid} doc that isn't an admin (the
// signup flow in AuthContext.jsx creates one per customer, role 'customer').
// Order count / total spent are worked out from the orders collection, which
// admins are allowed to read (see firestore.rules).
function formatDate(ts) {
  const d = ts?.toDate?.();
  return d ? d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }) : '—';
}

function AdminCustomers() {
  const [users, setUsers] = useState([]);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [query, setQuery] = useState('');

  useEffect(() => onSnapshot(
    collection(db, 'users'),
    (snap) => {
      setUsers(snap.docs.map((d) => ({ uid: d.id, ...d.data() })));
      setError('');
      setLoading(false);
    },
    (err) => {
      setError(err?.message || 'Could not load customers.');
      setLoading(false);
    },
  ), []);

  useEffect(() => {
    try {
      return subscribeAllOrders(setOrders);
    } catch {
      return undefined;
    }
  }, []);

  const customers = useMemo(() => {
    const stats = new Map();
    orders.forEach((o) => {
      if (!o.userId) return;
      const s = stats.get(o.userId) ?? { count: 0, spent: 0, phone: '' };
      s.count += 1;
      if (o.status !== 'Cancelled') s.spent += Number(o.total) || 0;
      if (!s.phone && o.customerPhone) s.phone = o.customerPhone;
      stats.set(o.userId, s);
    });
    return users
      .filter((u) => u.role !== 'admin')
      .map((u) => {
        const s = stats.get(u.uid);
        return {
          ...u,
          phone: u.phone || s?.phone || '',
          orderCount: s?.count ?? 0,
          spent: s?.spent ?? 0,
        };
      })
      .sort((a, b) => (b.createdAt?.toMillis?.() ?? 0) - (a.createdAt?.toMillis?.() ?? 0));
  }, [users, orders]);

  const shown = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return customers;
    return customers.filter((c) => [c.name, c.email, c.phone]
      .some((v) => String(v ?? '').toLowerCase().includes(q)));
  }, [customers, query]);

  return (
    <div>
      <div className="admin-page-head">
        <div>
          <h1 className="admin-page-title">Customers</h1>
          <p className="admin-page-sub">{customers.length} registered customers.</p>
        </div>
      </div>

      {error && (
        <div className="admin-mock-banner" style={{ color: '#b91c1c', fontWeight: 600 }}>{error}</div>
      )}

      <div className="admin-toolbar">
        <input
          className="admin-search"
          placeholder="Search by name, email or phone…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <div className="admin-panel" style={{ padding: 0 }}>
        {loading ? (
          <div className="admin-empty"><strong>Loading customers…</strong></div>
        ) : shown.length === 0 ? (
          <div className="admin-empty">
            <strong>{customers.length === 0 ? 'No customer records yet' : 'Nothing matches'}</strong>
            {customers.length === 0 && 'Customers appear here as soon as they sign up on the store.'}
          </div>
        ) : (
          <div className="admin-table-wrap">
            <table className="admin-table">
              <thead>
                <tr><th>Name</th><th>Email</th><th>Phone</th><th>Joined</th><th>Orders</th><th>Total spent</th></tr>
              </thead>
              <tbody>
                {shown.map((c) => (
                  <tr key={c.uid}>
                    <td>{c.name || '—'}</td>
                    <td>{c.email || '—'}</td>
                    <td>{c.phone || '—'}</td>
                    <td>{formatDate(c.createdAt)}</td>
                    <td>{c.orderCount}</td>
                    <td>₹{c.spent.toLocaleString('en-IN')}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminCustomers;
