import { Link } from "react-router-dom";
import { formatPrice } from "../../data/properties";

const comparisonRows = [
  { label: "Price", value: (property) => formatPrice(property.price) },
  { label: "Location", value: (property) => property.location },
  { label: "Area", value: (property) => `${property.area} m²` },
  { label: "Bedrooms", value: (property) => property.bedrooms },
  { label: "Bathrooms", value: (property) => property.bathrooms },
  { label: "Property type", value: (property) => property.type },
];

const CompareProperties = ({ properties, limit, onRemove, onClear }) => {
  return (
    <main className="property-theme property-page">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="property-heading">Compare Properties</h1>
            {properties.length > 0 && (
              <p className="property-muted mt-2">{properties.length} of {limit} properties selected</p>
            )}
          </div>
          {properties.length > 0 && (
            <div className="flex flex-wrap gap-2">
              <button type="button" className="property-button" onClick={onClear}>Clear All</button>
              <Link to="/properties" className="property-button property-primary">Browse Properties</Link>
            </div>
          )}
        </div>

        {properties.length === 0 ? (
          <section className="property-panel p-8 text-center sm:p-12">
            <h2 className="text-xl font-semibold">No properties to compare yet</h2>
            <p className="property-muted mt-2">Choose up to {limit} properties to see their details side by side.</p>
            <Link to="/properties" className="property-button property-primary mt-5">Browse Properties</Link>
          </section>
        ) : (
          <>
            <p className="property-muted mb-3 text-sm lg:hidden">Swipe or scroll the table to see all columns.</p>
            <div className="property-panel overflow-x-auto" role="region" aria-label="Property comparison table" tabIndex={0}>
              <table className="w-full text-left text-sm">
                <caption className="sr-only">Comparison of selected properties</caption>
                <thead>
                  <tr>
                    <th scope="col" className="w-32 min-w-28 px-4 py-5 align-bottom">Property</th>
                    {properties.map((property) => (
                      <th key={property.id} scope="col" className="min-w-48 px-4 py-5 align-top">
                        <Link to={`/properties/${property.id}`} className="property-link block">
                          <img src={property.image} alt="" className="mb-3 h-28 w-full rounded-lg object-cover sm:h-36" />
                          {property.title}
                        </Link>
                        <button
                          type="button"
                          aria-label={`Remove ${property.title} from comparison`}
                          className="property-link mt-2 min-h-10 text-sm font-normal"
                          onClick={() => onRemove(property.id)}
                        >
                          Remove
                        </button>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map(({ label, value }) => (
                    <tr key={label} className="property-divider">
                      <th scope="row" className="px-4 py-3 font-semibold">{label}</th>
                      {properties.map((property) => <td key={property.id} className="px-4 py-3">{value(property)}</td>)}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </main>
  );
};

export default CompareProperties;
