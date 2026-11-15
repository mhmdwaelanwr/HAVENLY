
import { NavLink } from "react-router-dom";
import { FiGrid, FiUsers, FiHome, FiUser } from "react-icons/fi";

export default function Adminsidebar() {
  return (
    <aside className="sticky top-0 flex h-screen w-[72px] shrink-0 flex-col border-r border-[var(--havenly-border)] bg-[var(--havenly-paper)] text-[var(--havenly-text)] transition-colors duration-300 lg:w-[260px]">

      
      <div className="px-3 pb-6 pt-8 text-center lg:px-8 lg:text-left">
        <p className="font-['Playfair_Display',Georgia,serif] text-xl font-bold tracking-[0.25em] lg:text-2xl">
          <span className="lg:hidden">H</span>
          <span className="hidden lg:inline">HAVENLY</span>
        </p>

        <p className="mt-2 hidden text-[10px] font-medium uppercase tracking-[0.35em] text-[var(--havenly-accent)] lg:block">
          Admin Panel
        </p>

        <span className="mt-6 block h-px w-full bg-gradient-to-r from-[var(--havenly-border)] to-transparent" />
      </div>

      
      <nav aria-label="Admin navigation" className="flex-1 px-3 lg:px-4">

        <p className="mb-3 hidden px-4 text-[10px] font-medium uppercase tracking-[0.3em] text-[var(--havenly-muted)] lg:block">
          Menu
        </p>

        <ul className="space-y-1.5">

     
          <li>
            <NavLink
              to="/admin"
              end
              title="Dashboard"
              className={({ isActive }) =>
                `group relative flex items-center justify-center gap-4 px-3 py-3.5 text-sm font-medium transition-all duration-300 lg:justify-start lg:px-4 ${
                  isActive
                    ? "bg-[var(--havenly-soft)] text-[var(--havenly-text)]"
                    : "text-[var(--havenly-muted)] hover:bg-[var(--havenly-soft-alt)] hover:text-[var(--havenly-text)]"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span
                    className={`absolute left-0 top-1/2 h-6 w-[3px] -translate-y-1/2 bg-[var(--havenly-accent)] transition-opacity duration-300 ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                  />

                  <FiGrid
                    className={`h-[18px] w-[18px] shrink-0 ${
                      isActive
                        ? "text-[var(--havenly-accent)]"
                        : "group-hover:text-[var(--havenly-accent)]"
                    }`}
                  />

                  <span className="hidden tracking-wide lg:inline">
                    Dashboard
                  </span>
                </>
              )}
            </NavLink>
          </li>

     
          <li>
            <NavLink
              to="/admin/users"
              title="Users"
              className={({ isActive }) =>
                `group relative flex items-center justify-center gap-4 px-3 py-3.5 text-sm font-medium transition-all duration-300 lg:justify-start lg:px-4 ${
                  isActive
                    ? "bg-[var(--havenly-soft)] text-[var(--havenly-text)]"
                    : "text-[var(--havenly-muted)] hover:bg-[var(--havenly-soft-alt)] hover:text-[var(--havenly-text)]"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span
                    className={`absolute left-0 top-1/2 h-6 w-[3px] -translate-y-1/2 bg-[var(--havenly-accent)] transition-opacity duration-300 ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                  />

                  <FiUsers
                    className={`h-[18px] w-[18px] shrink-0 ${
                      isActive
                        ? "text-[var(--havenly-accent)]"
                        : "group-hover:text-[var(--havenly-accent)]"
                    }`}
                  />

                  <span className="hidden tracking-wide lg:inline">
                    Users
                  </span>
                </>
              )}
            </NavLink>
          </li>

          <li>
            <NavLink
  to="/admin/my-listings"
  title="My Listings"
  className={({ isActive }) =>
    `group relative flex items-center justify-center gap-4 px-3 py-3.5 text-sm font-medium transition-all duration-300 lg:justify-start lg:px-4 ${
      isActive
        ? "bg-[var(--havenly-soft)] text-[var(--havenly-text)]"
        : "text-[var(--havenly-muted)] hover:bg-[var(--havenly-soft-alt)] hover:text-[var(--havenly-text)]"
    }`
  }
>
  {({ isActive }) => (
    <>
      <span
        className={`absolute left-0 top-1/2 h-6 w-[3px] -translate-y-1/2 bg-[var(--havenly-accent)] ${
          isActive ? "opacity-100" : "opacity-0"
        }`}
      />

      <FiHome className="h-[18px] w-[18px] shrink-0" />

      <span className="hidden tracking-wide lg:inline">
        My Listings
      </span>
    </>
  )}
</NavLink>
          </li>

        </ul>
      </nav>

     
      <div className="px-3 pb-6 lg:px-6">
        <span className="mb-5 block h-px w-full bg-[var(--havenly-border)]" />

        <div className="flex items-center justify-center gap-3 lg:justify-start">

          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--havenly-border)] bg-[var(--havenly-soft)] text-[var(--havenly-accent)]">
            <FiUser className="h-4 w-4" />
          </span>

          <div className="hidden min-w-0 lg:block">
            <p className="truncate text-sm font-semibold">
              Administrator
            </p>

            <p className="text-[10px] uppercase tracking-[0.25em] text-[var(--havenly-muted)]">
              Havenly
            </p>
          </div>

        </div>
      </div>

    </aside>
  );
}
