import PropertyTypeFilter from "./PropertyTypeFilter";
import LocationFilter from "./LocationFilter";
import PriceRangeFilter from "./PriceRangeFilter";
import BedroomsFilter from "./BedroomsFilter";
import BathroomsFilter from "./BathroomsFilter";

const PropertyFilters = ({ filters, setFilters, onApply }) => {
  return (
    <aside className="property-panel h-fit p-5">
      <h2 className="mb-1 text-base font-semibold">
        Refine your search
      </h2>

      <p className="mb-6 text-xs property-muted">
        Find your perfect property
      </p>

      <div className="space-y-5">
        <label className="block text-xs font-medium property-muted">
          Looking to
          <select
            value={filters.purpose}
            onChange={(event) => setFilters({ ...filters, purpose: event.target.value })}
            className="property-input mt-2"
          >
            <option value="">Buy or rent</option>
            <option value="buy">Buy</option>
            <option value="rent">Rent</option>
          </select>
        </label>

        <PropertyTypeFilter
          value={filters.type}
          onChange={(value) => setFilters({ ...filters, type: value })}
        />

        <LocationFilter
          value={filters.location}
          onChange={(value) => setFilters({ ...filters, location: value })}
        />

        <PriceRangeFilter
          minPrice={filters.minPrice}
          maxPrice={filters.maxPrice}
          onMinChange={(value) => setFilters({ ...filters, minPrice: value })}
          onMaxChange={(value) => setFilters({ ...filters, maxPrice: value })}
        />

        <BedroomsFilter
          value={filters.bedrooms}
          onChange={(value) => setFilters({ ...filters, bedrooms: value })}
        />

        <BathroomsFilter
          value={filters.bathrooms}
          onChange={(value) => setFilters({ ...filters, bathrooms: value })}
        />

        <button
          onClick={onApply}
          className="property-button property-primary w-full"
        >
          Apply Filters
        </button>
      </div>
    </aside>
  );
};

export default PropertyFilters;
