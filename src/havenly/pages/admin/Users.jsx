
import { FiTrash2, FiUsers } from "react-icons/fi";

const users = [
  { id: 1, name: "Layla Hassan", role: "Admin" },
  { id: 2, name: "Omar Khaled", role: "User" },
  { id: 3, name: "Nour El-Sayed", role: "User" },
  { id: 4, name: "Youssef Adel", role: "Admin" },
  { id: 5, name: "Mariam Fathy", role: "User" },
];




export default function Users() {
  return (
    <div className="w-full p-6 text-[var(--havenly-text)] sm:p-8 lg:p-12">
      <div className="mx-auto max-w-5xl">
        <header>
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-[var(--havenly-accent)]">
            Admin Area
          </p>
          <h1 className="mt-4 font-['Playfair_Display',Georgia,serif] text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Users Management
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-[var(--havenly-muted)]">
            Manage registered users on HAVENLY.
          </p>
        </header>

        <section className="mt-10 flex w-full items-center justify-between gap-6 border border-[var(--havenly-border)] bg-[var(--havenly-paper)] p-6 sm:w-auto sm:min-w-[18rem] sm:max-w-fit sm:p-8">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-[var(--havenly-muted)]">
              Total users
            </p>
            <p className="mt-3 font-['Playfair_Display',Georgia,serif] text-5xl font-bold leading-none">
              {users.length}
            </p>
          </div>
          <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-[var(--havenly-border)] bg-[var(--havenly-soft)] text-[var(--havenly-accent)]">
            <FiUsers aria-hidden="true" className="h-5 w-5" />
          </span>
        </section>

        

        <section className="mt-10 overflow-hidden border border-[var(--havenly-border)] bg-[var(--havenly-paper)]">
          {users.length === 0 ? (
            /* Empty state */
            <div className="flex flex-col items-center px-6 py-20 text-center">
              <span className="flex h-14 w-14 items-center justify-center border border-[var(--havenly-border)] bg-[var(--havenly-soft)] text-[var(--havenly-accent)]">
                <FiUsers aria-hidden="true" className="h-6 w-6" />
              </span>
              <h2 className="mt-6 font-['Playfair_Display',Georgia,serif] text-2xl font-semibold">
                No users yet
              </h2>
              <p className="mt-2 max-w-xs text-sm text-[var(--havenly-muted)]">
                Registered users will appear here once they join HAVENLY.
              </p>
            </div>
          ) : (
            <>
              
              <div className="hidden grid-cols-12 bg-[var(--havenly-soft)] px-6 py-4 text-[11px] font-medium uppercase tracking-[0.15em] text-[var(--havenly-muted)] md:grid">
                <p className="col-span-6">User Name</p>
                <p className="col-span-3">Role</p>
                <p className="col-span-3 text-right">Actions</p>
              </div>

              
              <ul className="divide-y divide-[var(--havenly-border)]">
                {users.map((user) => (
                  <li
                    key={user.id}
                    className="grid grid-cols-2 items-center gap-y-3 px-6 py-5 md:grid-cols-12 md:gap-y-0"
                  >
                   
                    <div className="col-span-2 flex items-center gap-4 md:col-span-6">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--havenly-border)] bg-[var(--havenly-soft-alt)] font-['Playfair_Display',Georgia,serif] text-sm font-semibold text-[var(--havenly-accent)]">
                        {user.name.charAt(0)}
                      </span>
                      <p className="min-w-0 truncate text-sm font-semibold">
                        {user.name}
                      </p>
                    </div>

                    
                    <div className="md:col-span-3">
                      <span
                        className={
                          user.role === "Admin"
                            ? "inline-block border border-[var(--havenly-accent)] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-[var(--havenly-accent)]"
                            : "inline-block bg-[var(--havenly-soft)] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-[var(--havenly-muted)]"
                        }
                      >
                        {user.role}
                      </span>
                    </div>

                    
                    <div className="flex justify-end md:col-span-3">
                      <button
                        type="button"
                        className="inline-flex cursor-pointer items-center gap-2 border border-[var(--havenly-border)] px-4 py-2 text-xs font-medium text-[var(--havenly-muted)] transition-colors duration-300 hover:border-[var(--havenly-accent)] hover:text-[var(--havenly-accent)]"
                      >
                        <FiTrash2 aria-hidden="true" className="h-3.5 w-3.5" />
                        Delete
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </>
          )}
        </section>
      </div>

      
    </div>
  );
}