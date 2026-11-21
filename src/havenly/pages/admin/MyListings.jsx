
import { Link } from "@/havenly/router-compat";
import { useProperties, deleteProperty, formatPrice } from "../../data/properties";
import { FiPlus } from "react-icons/fi";


export default function MyListings() {
  const properties = useProperties().map((p) => ({
    ...p,
    status: p.status ?? "Published",
    price: formatPrice(p.price),
  }));


  return (
    <main className="min-h-screen bg-(color:--havenly-bg) text-(color:--havenly-text)">
      <div className="mx-auto max-w-6xl px-6 pb-24 pt-28 sm:px-8 md:pt-36 lg:px-12">
        <section>
          <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-(color:--havenly-muted)">
            Account <span className="mx-2">/</span> My listings
          </p>

          <div className="mt-6 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <h1 className="font-['Playfair_Display',Georgia,serif] text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
                Manage your properties.
              </h1>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-(color:--havenly-muted)">
                Update availability, edit listings and keep your property
                information current.
              </p>
            </div>

            <Link
              to="/admin/add-property"
              className="inline-flex items-center justify-center gap-2 self-start bg-(color:--havenly-accent) px-6 py-3.5 text-xs font-medium uppercase tracking-[0.15em] text-(color:--havenly-accent-contrast) transition-opacity duration-300 hover:opacity-90 md:self-auto"
            >
              <FiPlus className="text-base" />
              Add property
            </Link>
          </div>
        </section>

        <section className="mt-10 grid grid-cols-2 gap-y-8 border border-(color:--havenly-border) bg-(color:--havenly-paper) py-6 md:grid-cols-4 md:gap-y-0">
          <div className="px-6">
            <p className="font-['Playfair_Display',Georgia,serif] text-3xl font-bold">
              {properties.length}
            </p>
            <p className="mt-2 text-xs text-(color:--havenly-muted)">
              Total properties
            </p>
          </div>

          <div className="px-6 md:border-l md:border-(color:--havenly-border)">
            <p className="font-['Playfair_Display',Georgia,serif] text-3xl font-bold">
              {properties.filter((p) => p.status === "Published").length}
            </p>
            <p className="mt-2 text-xs text-(color:--havenly-muted)">
              Published
            </p>
          </div>

          <div className="px-6 md:border-l md:border-(color:--havenly-border)">
            <p className="font-['Playfair_Display',Georgia,serif] text-3xl font-bold">
              {properties.filter((p) => p.status === "Draft").length}
            </p>
            <p className="mt-2 text-xs text-(color:--havenly-muted)">Draft</p>
          </div>

          <div className="px-6 md:border-l md:border-(color:--havenly-border)">
            <p className="font-['Playfair_Display',Georgia,serif] text-3xl font-bold">
              0
            </p>
            <p className="mt-2 text-xs text-(color:--havenly-muted)">
              Archived
            </p>
          </div>
        </section>

        <section className="mt-10 overflow-hidden border border-(color:--havenly-border) bg-(color:--havenly-paper)">
          {/* Table head (desktop only) */}
          <div className="hidden grid-cols-12 bg-(color:--havenly-soft) px-6 py-4 text-[11px] font-medium uppercase tracking-[0.15em] text-(color:--havenly-muted) md:grid">
            <p className="col-span-5">Property</p>
            <p className="col-span-2">Status</p>
            <p className="col-span-2">Price</p>
            <p className="col-span-3 text-right">Manage</p>
          </div>

          
          <ul className="divide-y divide-(color:--havenly-border)">
            {properties.map((property) => (
              <li
                key={property.id}
                className="grid grid-cols-2 items-center gap-y-3 px-6 py-5 md:grid-cols-12 md:gap-y-0"
              >
               
                <div className="col-span-2 flex items-center gap-4 md:col-span-5">
                  <div className="h-14 w-14 shrink-0 overflow-hidden bg-(color:--havenly-soft-alt)">{property.image && <img src={property.image} alt="" className="h-full w-full object-cover" />}</div>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold">
                      {property.title}
                    </p>
                    <p className="mt-0.5 text-xs text-(color:--havenly-muted)">
                      {property.location}
                    </p>
                  </div>
                </div>

                {/* Status */}
                <p
                  className={
                    property.status === "Published"
                      ? "text-xs md:col-span-2"
                      : "text-xs text-(color:--havenly-muted) md:col-span-2"
                  }
                >
                  {property.status}
                </p>

                {/* Price */}
                <p className="text-right text-xs font-semibold md:col-span-2 md:text-left">
                  {property.price}
                </p>

                {/* Manage */}
                <div className="col-span-2 flex items-center gap-3 text-xs md:col-span-3 md:justify-end">
                  <Link
                    to={`/admin/edit-property/${property.id}`}
                    className="font-medium text-(color:--havenly-accent) transition-opacity hover:opacity-70"
                  >
                    Edit
                  </Link>
                  <span className="text-(color:--havenly-border)">·</span>
                  <Link
                    to={`/properties/${property.id}`}
                    className="font-medium text-(color:--havenly-text) transition-colors hover:text-(color:--havenly-accent)"
                  >
                    View
                  </Link>
                  <span className="text-(color:--havenly-border)">·</span>
                  <button
                    type="button"
                    onClick={() => {
                      if (window.confirm(`Delete "${property.title}"?`)) deleteProperty(property.id);
                    }}
                    className="cursor-pointer font-medium text-(color:--havenly-muted) transition-colors hover:text-red-500"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <p className="mt-6 text-xs text-(color:--havenly-muted)">
          Deleting a listing removes it from the marketplace after
          confirmation.
        </p>
      </div>
    </main>
  );
}