# ---------- Stage 1: build the Vite site ----------
FROM node:22-alpine AS build
WORKDIR /app

# Don't download Chromium for puppeteer (only used by local scripts)
ENV PUPPETEER_SKIP_DOWNLOAD=1

COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund

COPY . .

# Firebase web config (public values, baked into the site at build time).
# Defaults below are used unless Dokploy passes different build arguments.
ARG VITE_FIREBASE_API_KEY=AIzaSyBx59vUYhfGPB-iUQzfXZS3JM_n6MLEBNI
ARG VITE_FIREBASE_AUTH_DOMAIN=igo-nursery-a7bd8.firebaseapp.com
ARG VITE_FIREBASE_PROJECT_ID=igo-nursery-a7bd8
ARG VITE_FIREBASE_STORAGE_BUCKET=igo-nursery-a7bd8.firebasestorage.app
ARG VITE_FIREBASE_MESSAGING_SENDER_ID=339229297761
ARG VITE_FIREBASE_APP_ID=1:339229297761:web:b4c63da6163dcba526ae20
ENV VITE_FIREBASE_API_KEY=$VITE_FIREBASE_API_KEY \
    VITE_FIREBASE_AUTH_DOMAIN=$VITE_FIREBASE_AUTH_DOMAIN \
    VITE_FIREBASE_PROJECT_ID=$VITE_FIREBASE_PROJECT_ID \
    VITE_FIREBASE_STORAGE_BUCKET=$VITE_FIREBASE_STORAGE_BUCKET \
    VITE_FIREBASE_MESSAGING_SENDER_ID=$VITE_FIREBASE_MESSAGING_SENDER_ID \
    VITE_FIREBASE_APP_ID=$VITE_FIREBASE_APP_ID

RUN npm run build

# ---------- Stage 2: serve the built site with nginx on port 3000 ----------
FROM nginx:1.27-alpine

# nginx config (see nginx.conf): SPA routing, real 404s, compression, caching,
# security headers, noindex header for private pages
COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]
