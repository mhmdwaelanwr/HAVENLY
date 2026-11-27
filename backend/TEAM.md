# Backend team handoff

GitHub access verified: leader mhmdwaelanwr (admin), ABDoelmasry6677, AhmedElsayedoscar, 3lymokh, MOHAMED-BON and omarrsaidd18 (write). Usernames are case-insensitive.

## Proposed ownership — confirm with the instructor and team
| GitHub member | Scope |
| --- | --- |
| mhmdwaelanwr | Setup, environment, integration, shared API conventions |
| ABDOelmasry6677 | User schema, register/login, authentication middleware |
| AhmedElsayedoscar | Property schema and read endpoints, filters |
| 3lymokh | Favorite schema, saved property endpoints (cart equivalent, pending instructor approval) |
| MOHAMED-BON | Dashboard CRUD, authorization middleware |
| omarrsaidd18 | Add/edit property forms API integration and coordinate shared CRUD with dashboard owner |

Do not create competing Property models or CRUD endpoints. Dashboard and property forms use the same endpoints and ownership checks. Confirm exact role split with instructor/team.

## Start
From a clean working tree, run git fetch origin then git switch -c backend/YOUR-FEATURE origin/main. If that branch already exists, switch to it instead. Existing frontend dev branches must not be reset or overwritten.

cd backend; npm install; cp .env.example .env. Use your individual Atlas database credentials when provisioned. Never commit .env. Run npm test. Run npm run dev after Atlas is ready and import the Postman collection for GET /api/health.

Proposed API contracts: /api/auth/register, /api/auth/login, /api/properties, /api/properties/:id, /api/favorites. Property writes require authentication and authorization. Finalize payloads and schemas together before coding. Feature implementation belongs to members.

## Readiness gates
- [x] Shared GitHub repo and scaffold on main.
- [x] Team GitHub write access verified.
- [ ] Instructor confirms Express major/version, structure and favorites mapping.
- [ ] Shared Atlas cluster, individual database users and IP access.
- [ ] Real Atlas health check for each member.
- [ ] Final dependency lockfile committed.
- [ ] Instructor confirmation after required gates pass.

CI uses an isolated MongoDB service, not Atlas. A passing CI does not prove Atlas access.
