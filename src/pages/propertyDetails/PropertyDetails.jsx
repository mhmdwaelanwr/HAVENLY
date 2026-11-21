
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FiMapPin, FiHeart, FiCheck } from "react-icons/fi";

import { findProperty, formatPrice } from "../../data/properties";

export default function PropertyDetails({
  actions,
  setRecentIds,
  recentLimit,
}) {
  // Get property ID from URL
  const { id } = useParams();

  // Find property
  const property = findProperty(id);

  // Store selected image
  const [activeImage, setActiveImage] = useState(0);

  // Add property to recently viewed
  useEffect(() => {
    if (!property) return;

    setRecentIds((ids) => {
      const newIds = ids.filter((item) => item !== property.id);

      return [property.id, ...newIds].slice(0, recentLimit);
    });
  }, [property, setRecentIds, recentLimit]);

  // Check if property is favorite
  const isFavorite = property
    ? actions.favoriteIds.includes(property.id)
    : false;

  // Property not found
  if (!property) {
    return (
      <main className="property-theme min-h-screen p-10 text-center">
        <h1 className="text-3xl font-bold">Property Not Found</h1>
        <Link to="/properties" className="property-button mt-5 inline-block">
          Back to Properties
        </Link>
      </main>
    );
  }

  // Property images
  const images = property.images?.length
    ? property.images
    : [property.image];

  return (
    <main className="property-theme min-h-screen px-6 py-10">
      <div className="mx-auto max-w-7xl">

        {/* Back Button */}
        <Link to="/properties" className="property-link">
          ← Back to Properties
        </Link>

        {/* Property Information */}
        <div className="my-8">
          <p className="property-muted flex items-center gap-2">
            <FiMapPin />
            {property.location}
          </p>

          <h1 className="mt-3 text-3xl font-bold">
            {property.title}
          </h1>

          <p className="mt-3 text-2xl font-bold">
            {formatPrice(property.price)}
          </p>
        </div>

        {/* Images */}
        <div className="grid gap-4 md:grid-cols-2">
          <img
            src={images[activeImage]}
            alt={property.title}
            className="h-80 w-full object-cover md:h-96"
          />

          <div className="grid grid-cols-2 gap-3">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={property.title}
                onClick={() => setActiveImage(index)}
                className="h-36 w-full cursor-pointer object-cover"
              />
            ))}
          </div>
        </div>

        {/* Overview */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold">Property Overview</h2>

          <div className="property-panel mt-5 grid grid-cols-2 gap-6 p-6 md:grid-cols-4">
            <p>Bedrooms: {property.bedrooms}</p>
            <p>Bathrooms: {property.bathrooms}</p>
            <p>Area: {property.area} m²</p>
            <p>Type: {property.type}</p>
          </div>
        </section>

        {/* Description */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold">Description</h2>

          <p className="property-muted mt-4 leading-8">
            {property.description || "No description available."}
          </p>
        </section>

        {/* Amenities */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold">Amenities</h2>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {property.amenities?.map((item) => (
              <p key={item} className="flex items-center gap-2">
                <FiCheck />
                {item}
              </p>
            ))}
          </div>
        </section>

        {/* Agent */}
  <section className="property-panel mt-10 p-6 text-center">
  <h2 className="text-2xl font-bold">Contact Agent</h2>

  <h3 className="mt-4 font-semibold">
    {property.agent?.name || "Havenly Sales Team"}
  </h3>

  <p className="property-muted mt-2">
    {property.agent?.role || "Property Consultant"}
  </p>

  <div className="mt-5 flex flex-col gap-3">
    <button
      onClick={() => actions.onToggleFavorite(property.id)}
      className="property-button flex items-center justify-center gap-2"
    >
      <FiHeart fill={isFavorite ? "currentColor" : "none"} />
      {isFavorite ? "Remove Favorite" : "Add to Favorites"}
    </button>

    <Link
      to={`/properties/${property.id}/contact-agent`}
      className="property-button property-primary flex justify-center"
    >
      Contact Agent
    </Link>
  </div>
</section>

      </div>
    </main>
  );
}
