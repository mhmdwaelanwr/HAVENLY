import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import PropertyFilters from "./PropertyFilters";
import PropertyCard from "../../components/PropertyCard";
import { properties } from "../../data/properties";

const priceRanges = {
  "under-5m": { minPrice: "", maxPrice: "4999999" },
  "5m-10m": { minPrice: "5000000", maxPrice: "10000000" },
  "over-10m": { minPrice: "10000001", maxPrice: "" },
};

function filtersFromSearch(params) {
  const type = params.get("type")?.toLowerCase();
  const purpose = params.get("purpose");
  const range = priceRanges[params.get("price")];

  return {
    type: properties.find((property) => property.type.toLowerCase() === type)?.type ?? "All Types",
    purpose: purpose === "buy" || purpose === "rent" ? purpose : "",
    location: params.get("location") ?? "",
    minPrice: range?.minPrice ?? "",
    maxPrice: range?.maxPrice ?? "",
    bedrooms: "",
    bathrooms: "",
  };
}

const PropertyListing = ({ actions, initialFilters }) => {
  const [filters, setFilters] = useState(initialFilters);
  const [sortBy, setSortBy] = useState("default");

  const filteredProperties = properties.filter((property) => {
    return (
      (filters.type === "All Types" || property.type === filters.type) &&
      (!filters.purpose || property.purpose === filters.purpose) &&
      property.location.toLowerCase().includes(filters.location.toLowerCase()) &&
      (!filters.minPrice || property.price >= Number(filters.minPrice)) &&
      (!filters.maxPrice || property.price <= Number(filters.maxPrice)) &&
      (!filters.bedrooms || property.bedrooms >= Number(filters.bedrooms)) &&
      (!filters.bathrooms || property.bathrooms >= Number(filters.bathrooms))
    );
  });

  const sortedProperties = [...filteredProperties].sort((a, b) => {
    if (sortBy === "low") {
      return a.price - b.price;
    }

    if (sortBy === "high") {
      return b.price - a.price;
    }

    return 0;
  });

  return (
    <main className="property-theme min-h-screen px-6 py-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <h1 className="text-4xl font-bold tracking-tight">
            Discover Your Next Home
          </h1>
          <p className="mt-3 property-muted">
            Explore our curated collection of properties tailored to your lifestyle.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[280px_1fr]">
          <PropertyFilters
            filters={filters}
            setFilters={setFilters}
            onApply={() => console.log(filters)}
          />

          <section>
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-semibold">
                  Available Properties
                </h2>
                <p className="mt-1 text-sm property-muted">
                  {sortedProperties.length} Properties Found
                </p>
              </div>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                aria-label="Sort properties"
                className="property-input listing-sort"
              >
                <option value="default">Sort By</option>
                <option value="low">Price: Low to High</option>
                <option value="high">Price: High to Low</option>
              </select>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-2">
              {sortedProperties.length > 0 ? (
                sortedProperties.map((property) => (
                  <PropertyCard key={property.id} property={property} actions={actions} />
                ))
              ) : (
                <p className="col-span-full py-10 text-center property-muted">
                  No properties found. Try changing your filters.
                </p>
              )}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default function Properties({ actions }) {
  const [searchParams] = useSearchParams();

  return (
    <PropertyListing
      key={searchParams.toString()}
      actions={actions}
      initialFilters={filtersFromSearch(searchParams)}
    />
  );
}
