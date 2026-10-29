# HAVENLY Frontend Structure

The React/Vite frontend follows the page-per-folder pattern used as a structural reference by GoGrocer, with original modules for HAVENLY's real-estate scope.

## Routing

- `/` Home
- `/properties` Browse/search properties
- `/properties/:id` Property details
- `/favorites` Saved listings
- `/compare` Compare listings
- `/properties/new` Add listing
- `/properties/:id/edit` Edit listing
- `/my-listings` Owner/agent listings
- `/dashboard` Account dashboard
- `/login`, `/register`, `/profile` Account
- `/contact`, `/about` Information
- `*` Not found

## Organization

- `src/pages/<feature>/<Component>.jsx` — one page per feature
- `src/components` — shared layout and navigation
- `src/App.jsx` — routing definitions
- `src/index.css` — baseline responsive styles

This commit supplies a working navigation and page scaffold only. It does **not** implement authentication, persistent data, listing CRUD, search, favorites, comparison or backend integration. Those features should be built separately.

## Getting started

```bash
npm install
npm run dev
```
