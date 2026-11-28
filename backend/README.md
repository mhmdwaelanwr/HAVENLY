# HAVENLY Backend — team scaffold

Independent Node.js / Express API for the existing React frontend. No feature endpoints are implemented yet.

## Setup (Node.js 22+)
```bash
cd backend
npm ci
cp .env.example .env
# Set MONGODB_URI to your own Atlas database-user connection string.
npm run dev
```

- Course-aligned versions: Express 5.3.0, Mongoose 9.13.1, dotenv 18.0.10 and Nodemon 3.1.14. HAVENLY retains ES modules and CORS.
- Do not commit .env or share credentials. Atlas project/cluster and individual database users must be provisioned separately. Use the shared development DB havenly_dev with appropriate permissions and approved IP addresses; no production data.
- MongoDB creates the database when a collection is first created or data is written. The health endpoint verifies connectivity only.
- GET http://localhost:5000/api/health returns 200 only when the database responds to a ping; otherwise 503 (if the server is running). Import postman/HAVENLY.postman_collection.json to test.
- npm test tests the disconnected health response, 404 and malformed JSON without Atlas.
- The lockfile is committed; use npm ci for reproducible installation. Its dependency metadata is based on the course reference lockfile and HAVENLY's previous successful install; the updated stack still needs a clean installation and runtime test.

## Team boundaries (proposed for a real-estate application)
- Authentication: User model, login/register, auth middleware.
- Property discovery: shared Property model, list/detail, optional filters.
- Saved properties: Favorite model, list/add/remove/clear; confirm equivalent to the course cart with instructor.
- Management: create/update/delete properties, authorization/ownership middleware; reuse Property model.
- Leader: configuration, router integration, database access and shared API contracts.

Work on feature branches based on the scaffold; use pull requests. Route files are placeholders and must not be imported until implemented. Confirm folder conventions and feature scope with the instructor. Tests are run locally; no GitHub Actions workflow is required.
