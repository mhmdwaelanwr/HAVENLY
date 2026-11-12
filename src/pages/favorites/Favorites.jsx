import { Link } from "react-router-dom";
import PropertyCard from "../../components/PropertyCard";
import "./favorites.css";

const Favorites = ({ properties, onToggleFavorite }) => {
  return (
    <main className="property-theme property-page">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <h1 className="property-heading">Favorites</h1>
          {properties.length > 0 && (
            <Link to="/properties" className="property-button property-primary">
              Browse Properties
            </Link>
          )}
        </div>

        {properties.length > 0 ? (
          <div className="grid items-start gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {properties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                isFavorite={true}
                onToggleFavorite={onToggleFavorite}
              />
            ))}
          </div>
        ) : (
          <section className="property-panel p-8 text-center sm:p-12">
            <h2 className="text-xl font-semibold">No favorites yet</h2>
            <p className="property-muted mt-2">Tap the heart on a property to save it here.</p>
            <Link to="/properties" className="property-button property-primary mt-5">
              Browse Properties
            </Link>
          </section>
        )}
      </div>
    </main>
  );
};

export default Favorites;
