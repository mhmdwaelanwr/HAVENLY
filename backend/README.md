# HAVENLY API

Node.js 22, Express 5 and MongoDB.

```bash
cd backend
npm ci
cp .env.example .env
npm run dev
```

Set MONGODB_URI in .env before starting. The shared database is havenly_dev. Do not commit .env.

API: http://localhost:5000/api/health

Import the collection from the postman folder. Run `npm test` for local tests.

Atlas access and testing the updated dependencies are still pending.
