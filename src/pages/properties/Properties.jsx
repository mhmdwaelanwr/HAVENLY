
import { useState } from "react";
import PropertyFilters from "./PropertyFilters";

const properties = [
{
id: 1,
title: "Modern Luxury Villa",
location: "New Cairo, Egypt",
price: 8500000,
type: "Villa",
bedrooms: 4,
bathrooms: 3,
area: 320,
image:
"https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800",
featured: true,
},
{
id: 2,
title: "Elegant Modern Apartment",
location: "Sheikh Zayed, Egypt",
price: 3200000,
type: "Apartment",
bedrooms: 3,
bathrooms: 2,
area: 180,
image:
"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
featured: false,
},
{
id: 3,
title: "Contemporary Family House",
location: "Fifth Settlement, Egypt",
price: 6200000,
type: "House",
bedrooms: 5,
bathrooms: 4,
area: 280,
image:
"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
featured: true,
},
{
id: 4,
title: "Apartment in a compound",
location: "Maadi, Egypt",
price: 8200000,
type: "House",
bedrooms: 5,
bathrooms: 4,
area: 280,
image:
"https://aqardxb.com/wp-content/uploads/2022/11/LIV-LUX-Penthouse-Master-Bedroom.jpg",
featured: false,
},
];

const initialFilters = {
type: "All Types",
location: "",
minPrice: "",
maxPrice: "",
bedrooms: "",
bathrooms: "",
};

const Properties = () => {
const [filters, setFilters] = useState(initialFilters);
const [sortBy, setSortBy] = useState("default");

// Filter Properties
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

// Sort Properties
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

{/* Page Header */}
<div className="mb-10">
  <h1 className="text-4xl font-bold tracking-tight text-gray-900">
    Discover Your Next Home
  </h1>

  <p className="mt-3 text-gray-500">
    Explore our curated collection of properties tailored to your lifestyle.
  </p>
</div>

{/* Main Layout */}
<div className="grid grid-cols-1 gap-8 lg:grid-cols-[280px_1fr]">

  <PropertyFilters filters={filters} setFilters={setFilters} 
  onApply={() => console.log(filters)}/>

  {/* Properties Content */}
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

      {/* Sorting */}
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

    {/* Properties Grid */}
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-2">
      {sortedProperties.length > 0 ? (
        sortedProperties.map((property) => (
          <article
            key={property.id}
            className="group overflow-hidden rounded-xl border border-gray-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            {/* Property Image */}
            <div className="relative h-56 overflow-hidden">
              <img
                src={property.image}
                alt={property.title}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />

              {property.featured && (
                <span className="absolute left-4 top-4 rounded-md bg-[#25231f] px-3 py-1.5 text-xs text-white">
                  Featured
                </span>
              )}

              <button
                type="button"
                aria-label="Add to favorites"
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white text-lg text-gray-700 shadow hover:text-red-500"
              >
                ♡
              </button>
            </div>

            {/* Property Details */}
            <div className="p-5">
              <p className="text-sm text-gray-400">
                {property.location}
              </p>

              <h3 className="mt-2 text-lg font-semibold text-gray-900">
                {property.title}
              </h3>

              <p className="mt-3 text-xl font-bold text-[#25231f]">
                {property.price.toLocaleString("en-US")} EGP
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-4 border-t border-gray-100 pt-4 text-sm text-gray-500">
                <span> {property.bedrooms} Beds</span>
                <span> {property.bathrooms} Baths</span>
                <span> {property.area} m²</span>
              </div>

              <button
                type="button"
                className="mt-5 w-full rounded-lg border border-[#25231f] py-2.5 text-sm font-medium text-[#25231f] transition hover:bg-[#25231f] hover:text-white"
              >
                View Details
              </button>
            </div>
          </article>
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
