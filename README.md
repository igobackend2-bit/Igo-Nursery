# IGO Nursery

An online plant nursery and garden store built with React and Firebase. Customers can browse plants and garden supplies, sign up, add items to a cart or wishlist, and place orders. Store staff manage the catalogue, inventory, orders and customers from a built-in admin panel.

## Features

**Storefront**
- Plants, seeds, pots and planters, fertilisers, tools and other garden supplies, organised by category
- Product pages, search, "Just In", offers, gifting and corporate gifting pages
- Sign up and log in with email and password
- Cart, wishlist, saved addresses and recently viewed products
- Checkout with order tracking and in-site notifications
- Site available in English, Tamil, Hindi, Malayalam, Telugu and Kannada
- Garden services, landscaping, blog, gallery, store locator and contact pages

**Admin panel (`/admin`)**
- Dashboard and order management, including status updates and customer notifications
- Product and category management (add, edit, delete)
- Inventory page with in-stock / out-of-stock controls and Excel upload
- Customer list with order count and total spent
- Announcements to customers, homepage content and offers

## Tech stack

| Area | Technology |
|---|---|
| Frontend | React 19, React Router 7, Vite |
| Database and auth | Firebase Authentication and Cloud Firestore |
| Order emails | Resend, sent from a Vercel serverless function (`api/send-order-email.js`) |
| Excel import | read-excel-file |
| Hosting | Vercel |
| Linting | Oxlint |

## Getting started

### Requirements
- Node.js 18 or newer
- A Firebase project (see [Firebase setup](#firebase-setup))

### Install and run

```bash
npm install
cp .env.example .env     # on Windows: copy .env.example .env
# fill in the values in .env (see below)
npm run dev
```

The site opens at http://localhost:5173. If your computer blocks that port (a common Windows error, `EACCES`), pick another one:

```bash
# Windows Command Prompt
set PORT=3000
npm run dev

# macOS / Linux
PORT=3000 npm run dev
```

### Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run Oxlint |

## Environment variables

Copy `.env.example` to `.env` and fill in the values. `.env` is ignored by Git and must never be committed.

| Variable | Where it is used | Description |
|---|---|---|
| `VITE_FIREBASE_API_KEY` | Browser | Firebase web app API key |
| `VITE_FIREBASE_AUTH_DOMAIN` | Browser | Firebase auth domain |
| `VITE_FIREBASE_PROJECT_ID` | Browser | Firebase project ID |
| `VITE_FIREBASE_STORAGE_BUCKET` | Browser | Firebase storage bucket |
| `VITE_FIREBASE_MESSAGING_SENDER_ID` | Browser | Firebase messaging sender ID |
| `VITE_FIREBASE_APP_ID` | Browser | Firebase web app ID |
| `RESEND_API_KEY` | Server only | Resend API key for order emails |
| `RESEND_FROM_EMAIL` | Server only | Sender address, for example `IGO Nursery <orders@yourdomain.com>` |
| `ADMIN_NOTIFY_EMAIL` | Server only | Address that receives new-order alerts |
| `INTERNAL_API_SECRET` | Server only | Shared secret checked by the email endpoint |
| `VITE_INTERNAL_API_SECRET` | Browser | Must have the same value as `INTERNAL_API_SECRET` |

Values that start with `VITE_` are built into the site. Set the server-only ones in the Vercel dashboard, not in the frontend. The email endpoint only runs on Vercel, so order emails are not sent while developing locally. Orders themselves still work.

## Firebase setup

Do this once for each Firebase project.

1. **Create a project** at https://console.firebase.google.com and register a **Web app**. Copy its configuration into `.env`.
2. **Authentication**: open Build > Authentication > Sign-in method and enable **Email/Password**. Under Settings > Authorized domains, add your live domain (and keep `localhost`).
3. **Firestore**: open Build > Firestore Database and create a database (Production mode). Do not create collections by hand; the app creates them.
4. **Security rules**: open the Rules tab, paste the contents of [`firestore.rules`](firestore.rules) and click **Publish**.
5. **Index**: open Indexes > Composite and add an index on collection `orders` with fields `userId` (Ascending) and `createdAt` (Descending). Customers' order history needs it.
6. **Create the admin account**:
   1. Sign up on the site with the email you want to use as admin.
   2. In Firestore, open `users` and find that user's document (its ID matches the UID in Authentication > Users).
   3. Change the field `role` from `customer` to `admin`, then log out and log back in.
   4. Open `/admin`.
7. **Product data**: the first time an admin opens the admin panel, the built-in catalogue is copied into the empty `products` and `categories` collections.

### Firestore data model

| Path | Contents |
|---|---|
| `users/{uid}` | Profile (name, email, phone, `role`) |
| `users/{uid}/addresses`, `cart`, `wishlist`, `notifications`, `recentlyViewed`, `readAnnouncements` | Per-customer data |
| `products/{id}` | Catalogue products (public read, admin write) |
| `categories/{slug}` | Catalogue categories (public read, admin write) |
| `orders/{id}` | Orders (owner or admin only) |
| `announcements/{id}` | Admin announcements (signed-in read, admin write) |

Roles are stored in `users/{uid}.role` (`customer` or `admin`). The rules stop anyone from promoting themselves; admins are created in the Firestore console.

## Uploading stock from Excel

On the admin **Inventory** page, click **Upload Excel** and choose an `.xlsx` file. The first row must contain headers:

| Column | Required | Notes |
|---|---|---|
| `Name` or `ID` | Yes | Used to match an existing product (ID first, then exact name) |
| `Availability` or `Quantity` | One of these, or `Price` | `In Stock` / `Out of Stock`, or a number (0 = out of stock) |
| `Price`, `Original Price` | No | Updates the price of an existing product |
| `Category` | For new products | Category name or slug |
| `Image` | No | A web link, not an embedded picture |

A preview shows what will be updated, added or skipped. Nothing is saved until you click **Apply changes**. Rows that match an existing product update it; rows that do not match are added as new products when they include a name, price and valid category.

## Deployment

The site is deployed on Vercel.

1. Import this repository into Vercel (Framework preset: Vite).
2. Add all the environment variables from the table above.
3. Deploy. Every push to `main` triggers a new deployment.
4. Add the Vercel domain to Firebase Authentication > Authorized domains.

`vercel.json` rewrites all non-API routes to `index.html` so client-side routing works.

## Project structure

```
api/                  Vercel serverless function for order emails
public/               Static images, icons and videos
scripts/              Helper scripts for syncing images and navigation
src/
  admin/              Admin panel (pages, layout, editor)
  components/         Shared UI components
  context/            Auth, catalogue, cart/store and language state
  data/               Built-in catalogue and translations
  i18n/               Language strings
  lib/                Firebase, orders, catalogue and notification helpers
  pages/              Storefront pages
firestore.rules       Firestore security rules
vercel.json           Vercel routing config
```

## Known limitations

- Product images uploaded in the admin are stored inside the product document as data URLs, so keep them small (Firebase Storage is not enabled). Firestore rejects a document larger than 1 MB.
- Homepage content edited in the admin Content page is stored in the browser's local storage, not in Firebase.
- Payment: Cash on Delivery is supported. UPI is recorded as paid at order time; no payment gateway is connected yet.

## Security notes

- Never commit `.env` or any API keys or tokens.
- Firebase web configuration values are not secrets, but access is controlled by `firestore.rules`. Keep the rules published.
- If a token or key is ever shared by mistake, revoke it and create a new one.
