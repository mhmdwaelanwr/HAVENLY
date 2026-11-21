
import { Link } from "@/havenly/router-compat";
import { useProperties, deleteProperty, formatPrice } from "../../data/properties";
import { FiPlus, FiArrowUpRight } from "react-icons/fi";


export default function Dashboard() {
  const properties = useProperties().map((p) => ({
    ...p,
    status: p.status ?? "Published",
    price: formatPrice(p.price),
  }));
  return (
    <main className="min-h-screen bg-(color:--havenly-bg) text-(color:--havenly-text)">
      <div className="mx-auto max-w-6xl px-6 pb-24 pt-28 sm:px-8 md:pt-36 lg:px-12">
        {/* ------------------------------ HEADER ------------------------------ */}
        <section className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-(color:--havenly-accent)">
              Owner &amp; Agent Area
            </p>
            <h1 className="mt-4 font-['Playfair_Display',Georgia,serif] text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              My property listings.
            </h1>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-(color:--havenly-muted)">
              Manage your listings, track their status and update details in
              one place.
            </p>
          </div>

          <Link
            to="/admin/add-property"
            className="group inline-flex items-center justify-center gap-2 self-start bg-(color:--havenly-accent) px-6 py-3.5 text-xs font-medium uppercase tracking-[0.15em] text-(color:--havenly-accent-contrast) transition-opacity duration-300 hover:opacity-90 md:self-auto"
          >
            <FiPlus className="text-base" />
            Add new property
            <FiArrowUpRight className="text-base transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </section>

        {/* ------------------------------- STATS ------------------------------ */}
        <section className="mt-12 grid gap-5 sm:grid-cols-3">
          <article className="border border-(color:--havenly-border) bg-(color:--havenly-paper) p-6">
            <p className="font-['Playfair_Display',Georgia,serif] text-4xl font-bold">
              03
            </p>
            <p className="mt-3 text-xs text-(color:--havenly-muted)">
              Published listings
            </p>
          </article>

          <article className="border border-(color:--havenly-border) bg-(color:--havenly-paper) p-6">
            <p className="font-['Playfair_Display',Georgia,serif] text-4xl font-bold">
              01
            </p>
            <p className="mt-3 text-xs text-(color:--havenly-muted)">
              Draft listings
            </p>
          </article>

          <article className="border border-(color:--havenly-border) bg-(color:--havenly-paper) p-6">
            <p className="font-['Playfair_Display',Georgia,serif] text-4xl font-bold">
              04
            </p>
            <p className="mt-3 text-xs text-(color:--havenly-muted)">
              Total listings
            </p>
          </article>
        </section>

        {/* --------------------------- RECENT LISTINGS ------------------------- */}
        <section className="mt-16">
          <h2 className="font-['Playfair_Display',Georgia,serif] text-2xl font-semibold sm:text-3xl">
            Your recent listings
          </h2>

          <div className="mt-6 overflow-hidden border border-(color:--havenly-border) bg-(color:--havenly-paper)">
            {/* Table head (desktop only) */}
            <div className="hidden grid-cols-12 bg-(color:--havenly-soft) px-6 py-3 text-[11px] font-medium uppercase tracking-[0.15em] text-(color:--havenly-muted) md:grid">
              <p className="col-span-5">Property</p>
              <p className="col-span-2">Status</p>
              <p className="col-span-3">Price</p>
              <p className="col-span-2 text-right">Actions</p>
            </div>

            {/* Rows */}
            <ul className="divide-y divide-(color:--havenly-border)">
              {properties.map((property) => (
                <li
                  key={property.id}
                  className="grid grid-cols-2 items-center gap-y-3 px-6 py-5 md:grid-cols-12 md:gap-y-0"
                >
                  {/* Property */}
                  <div className="col-span-2 flex items-center gap-4 md:col-span-5">
                    <div className="h-12 w-12 shrink-0 bg-(color:--havenly-soft-alt)" />
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
                  <div className="md:col-span-2">
                    <span
                      className={
                        property.status === "Published"
                          ? "inline-block bg-(color:--havenly-soft) px-3 py-1 text-xs font-medium text-(color:--havenly-accent)"
                          : "inline-block bg-(color:--havenly-soft-alt) px-3 py-1 text-xs font-medium text-(color:--havenly-muted)"
                      }
                    >
                      {property.status}
                    </span>
                  </div>

                  {/* Price */}
                  <p className="text-right text-sm md:col-span-3 md:text-left">
                    {property.price}
                  </p>

                  {/* Actions */}
                  <div className="col-span-2 flex items-center gap-3 text-xs md:col-span-2 md:justify-end">
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
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}