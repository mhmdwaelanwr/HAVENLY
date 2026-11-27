# HAVENLY Backend — team scaffold

Independent Node.js / Express API for the existing React frontend. No feature endpoints are implemented yet.

## Setup (Node.js 22+)
```bash
cd backend
npm install
cp .env.example .env
# Set MONGODB_URI to your own Atlas database-user connection string.
npm run dev
```

- Express 4.22.3 is provisional until the instructor confirms the required major/version. Mongoose 8.24.11.
- Do not commit .env or share credentials. Atlas project/cluster and individual database users must be provisioned separately. Use the shared development DB havenly_dev with appropriate permissions and approved IP addresses; no production data.
- MongoDB creates the database when a collection is first created or data is written. The health endpoint verifies connectivity only.
- GET http://localhost:5000/api/health returns 200 after a successful database connection. Import postman/HAVENLY.postman_collection.json to test.
- npm test tests the disconnected health response without Atlas.
- The first npm install generates package-lock.json; commit the lockfile after the instructor confirms dependency versions.

## Team boundaries (proposed for a real-estate application)
- Authentication: User model, login/register, auth middleware.
- Property discovery: shared Property model, list/detail, optional filters.
- Saved properties: Favorite model, list/add/remove/clear; confirm equivalent to the course cart with instructor.
- Management: create/update/delete properties, authorization/ownership middleware; reuse Property model.
- Leader: configuration, router integration, database access and shared API contracts.

Work on feature branches based on the scaffold; use pull requests. Route files are placeholders and must not be imported until implemented. Confirm folder conventions and Express version with the instructor before implementation.
