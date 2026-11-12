import { useState } from "react";
import PropertyFilters from "./PropertyFilters";
import PropertyCard from "../../components/PropertyCard";
import { properties } from "../../data/properties";

const initialFilters = {
  type: "All Types",
  location: "",
  minPrice: "",
  maxPrice: "",
  bedrooms: "",
  bathrooms: "",
};

const Properties = ({ actions }) => {
  const [filters, setFilters] = useState(initialFilters);
  const [sortBy, setSortBy] = useState("default");

  const filteredProperties = properties.filter((property) => {
    return (
      (filters.type === "All Types" || property.type === filters.type) &&
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
    <main className="min-h-screen bg-[#f8f9fa] px-6 py-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            Discover Your Next Home
          </h1>
          <p className="mt-3 text-gray-500">
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
                <h2 className="text-xl font-semibold text-gray-900">
                  Available Properties
                </h2>
                <p className="mt-1 text-sm text-gray-500">
                  {sortedProperties.length} Properties Found
                </p>
              </div>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="rounded-md border border-gray-200 bg-white px-3 py-2 text-sm outline-none"
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
                <p className="col-span-full py-10 text-center text-gray-500">
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

export default Properties;
