import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import PropertyCard from "../../components/PropertyCard";
import { findProperty } from "../../data/properties";

const PropertyDetails = ({ actions, setRecentIds, recentLimit }) => {
  const { id } = useParams();
  const property = findProperty(id);
  const propertyId = property?.id;

  useEffect(() => {
    if (propertyId === undefined) return;

    setRecentIds((ids) => {
      if (ids[0] === propertyId) return ids;
      const olderViews = ids.filter((viewedId) => viewedId !== propertyId);
      return [propertyId, ...olderViews].slice(0, recentLimit);
    });
  }, [propertyId, recentLimit, setRecentIds]);

  return (
    <main className="property-theme property-page">
      <div className="mx-auto max-w-2xl">
        <Link to="/properties" className="property-link text-sm">Back to Properties</Link>
        <h1 className="property-heading mt-4 mb-6">{property ? property.title : "Property not found"}</h1>
        {property && (
          <>
            <PropertyCard key={propertyId} property={property} actions={actions} showDetailsLink={false} />
            <Link to={`/properties/${propertyId}/contact-agent`} className="property-button property-primary mt-5">
              Contact Agent
            </Link>
          </>
        )}
      </div>
    </main>
  );
};

export default PropertyDetails;
