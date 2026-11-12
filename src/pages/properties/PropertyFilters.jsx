
import PropertyTypeFilter from "./PropertyTypeFilter";
import LocationFilter from "./LocationFilter";
import PriceRangeFilter from "./PriceRangeFilter";
import BedroomsFilter from "./BedroomsFilter";
import BathroomsFilter from "./BathroomsFilter";

const PropertyFilters = ({ filters, setFilters, onApply }) => {
  return (
    <aside className="h-fit rounded-xl border bg-white p-5">
      <h2 className="mb-1 text-base font-semibold text-[#25231f]">
        Refine your search
      </h2>

      <p className="mb-6 text-xs text-gray-400">
        Find your perfect property
      </p>

      <div className="space-y-5">
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
          className="w-full rounded-md bg-[#25231f] py-3 text-sm text-white hover:bg-[#444039]"
        >
          Apply Filters
        </button>
      </div>
    </aside>
  );
};

export default PropertyFilters;
