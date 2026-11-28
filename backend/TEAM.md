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
Use the existing personal dev branch assigned to you (dev/abd-hafez-khaled, dev/ahmed-said, dev/ali-mokhtar, dev/mohamed-ahmed, dev/mohamed-anwar or dev/omar-said). From a clean working tree, fetch origin, switch to your own branch, then merge origin/main before starting. Do not reset or force-push any member branch. Existing unmerged work on feature/auth must be preserved until its owner integrates it. Separate backend feature branches are not required.

cd backend; npm ci; cp .env.example .env. Use your individual Atlas database credentials when provisioned. Never commit .env. Run npm test. Run npm run dev after Atlas is ready and import the Postman collection for GET /api/health.

Proposed API contracts: /api/auth/register, /api/auth/login, /api/properties, /api/properties/:id, /api/favorites. Property writes require authentication and authorization. Finalize payloads and schemas together before coding. Feature implementation belongs to members.

Authentication handoff: the unmerged feature/auth frontend branch expects POST /api/auth/register, POST /api/auth/login, GET /api/users/me and PATCH /api/users/me. It currently uses browser-only mock credentials and tokens. Do not merge or deploy it as real authentication until the backend validates roles, hashes passwords, verifies tokens and the frontend uses the real API. Never allow public registration to assign admin roles. Owner and member access rules must be agreed with the team.

Frontend handoff: the dashboard currently uses hard-coded listings and property forms use local storage. Connect both to the same Property API; protect all management operations server-side. The main frontend is a demo until these tasks are done.

## Readiness gates
- [x] Shared GitHub repo and scaffold on main.
- [x] Team GitHub write access verified.
- [x] Express and Mongoose aligned with the same-instructor KEMETRA reference.
- [ ] Instructor confirms structure and favorites mapping.
- [ ] Shared Atlas cluster, individual database users and IP access.
- [ ] Real Atlas health check for each member.
- [x] Dependency lockfile committed.
- [ ] Clean install and local tests on the updated stack.
- [ ] Instructor confirmation after required gates pass.

GitHub Actions has been removed. Run npm test locally and use Postman to verify the real Atlas connection.
