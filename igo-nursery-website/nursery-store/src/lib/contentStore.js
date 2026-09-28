// Local, no-backend content store. Both the storefront (Home.jsx,
// OffersSection.jsx, ...) and the admin's Content page read/write through
// this exact same interface - `getSiteContent()` / `saveSiteContent()`.
//
// Today it's backed by localStorage so edits made in /admin actually show
// up on the live site immediately, with zero server. When Firestore is
// connected (build plan Phase 2-3), only the two functions in this file
// change to read/write Firestore instead - nothing that calls them, in
// either the admin or the storefront, needs to change at all.
import { DEFAULT_SITE_CONTENT } from '../data/siteContent';

const STORAGE_KEY = 'igo-site-content-v2';
const DRAFT_STORAGE_KEY = 'igo-site-content-draft-v2';

export function getSiteContent() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_SITE_CONTENT;
    const saved = JSON.parse(raw);
    return { ...DEFAULT_SITE_CONTENT, ...saved };
  } catch {
    return DEFAULT_SITE_CONTENT;
  }
}

export function saveSiteContent(content) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(content));
  window.dispatchEvent(new Event('igo-site-content-changed'));
}

export function resetSiteContent() {
  localStorage.removeItem(STORAGE_KEY);
  window.dispatchEvent(new Event('igo-site-content-changed'));
}

// Visual Editor Draft System
export function getDraftContent() {
  try {
    const raw = localStorage.getItem(DRAFT_STORAGE_KEY);
    if (!raw) return getSiteContent(); // fallback to published if no draft exists
    const saved = JSON.parse(raw);
    return { ...DEFAULT_SITE_CONTENT, ...saved };
  } catch {
    return getSiteContent();
  }
}

export function saveDraftContent(content) {
  localStorage.setItem(DRAFT_STORAGE_KEY, JSON.stringify(content));
}

export function publishDraftContent() {
  const draft = getDraftContent();
  saveSiteContent(draft);
  clearDraftContent();
}

export function clearDraftContent() {
  localStorage.removeItem(DRAFT_STORAGE_KEY);
}
