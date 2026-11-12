import { FiHeart, FiMapPin } from "react-icons/fi";
import { Link } from "react-router-dom";
import { formatPrice } from "../data/properties";

const PropertyCard = ({ property, isFavorite, onToggleFavorite }) => {
  const { id, title, location, price, bedrooms, bathrooms, area, image, featured } = property;

  return (
    <article className="property-panel overflow-hidden transition hover:shadow-md">
      <div className="relative h-56 overflow-hidden bg-stone-200">
        <img src={image} alt={title} className="h-full w-full object-cover" />
        {featured && (
          <span className="absolute top-4 left-4 rounded-md bg-[#25231f] px-3 py-1.5 text-xs text-white">
            Featured
          </span>
        )}
        <button
          type="button"
          aria-label={`Favorite ${title}`}
          aria-pressed={isFavorite}
          onClick={() => onToggleFavorite(id)}
          className="property-heart absolute top-4 right-4 grid size-11 place-items-center rounded-full shadow-sm"
        >
          <FiHeart aria-hidden="true" size={19} fill={isFavorite ? "currentColor" : "none"} />
        </button>
      </div>

      <div className="p-5">
        <p className="property-muted flex items-center gap-1.5 text-sm">
          <FiMapPin aria-hidden="true" /> {location}
        </p>
        <h3 className="mt-2 text-lg font-semibold">{title}</h3>
        <p className="mt-3 text-xl font-bold">{formatPrice(price)}</p>
        <div className="property-muted mt-4 flex flex-wrap gap-x-4 gap-y-1 text-sm">
          <span>{bedrooms} Beds</span>
          <span>{bathrooms} Baths</span>
          <span>{area} m²</span>
        </div>
        <div className="property-divider mt-5 pt-4">
          <Link to={`/properties/${id}`} className="property-button w-full">
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
};

export default PropertyCard;
