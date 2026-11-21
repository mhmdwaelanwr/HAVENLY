import { Link } from "react-router-dom";
import PropertyCard from "./PropertyCard";

export default function PropertyCollection({ title, emptyTitle, emptyMessage, properties, actions, onRemove, onClear }) {
  return (
    <main className="property-theme property-page">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <h1 className="property-heading">{title}</h1>
          {properties.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {onClear && <button type="button" className="property-button" onClick={onClear}>Clear History</button>}
              <Link to="/properties" className="property-button property-primary">Browse Properties</Link>
            </div>
          )}
        </div>

        {properties.length > 0 ? (
          <div className="grid items-start gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {properties.map((property) => (
              <PropertyCard key={property.id} property={property} actions={actions} onRemove={onRemove} />
            ))}
          </div>
        ) : (
          <section className="property-panel p-8 text-center sm:p-12">
            <h2 className="text-xl font-semibold">{emptyTitle}</h2>
            <p className="property-muted mt-2">{emptyMessage}</p>
            <Link to="/properties" className="property-button property-primary mt-5">Browse Properties</Link>
          </section>
        )}
      </div>
    </main>
  );
}
