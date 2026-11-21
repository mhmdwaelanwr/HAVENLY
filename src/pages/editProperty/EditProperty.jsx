import { Link, useNavigate, useParams } from "react-router-dom";
import PropertyForm from "../propertyForm/PropertyForm";
import { findProperty, updateProperty } from "../../data/properties";

export default function EditProperty() {
  const { id } = useParams();
  const navigate = useNavigate();
  const property = findProperty(id);

  if (!property) {
    return (
      <div className="form-page">
        <h1 className="form-heading">Property not found</h1>
        <Link to="/admin/my-listings" className="property-link">Back to listings</Link>
      </div>
    );
  }

  return (
    <div className="form-page">
      <p className="form-eyebrow">Listings</p>
      <h1 className="form-heading">Edit property</h1>
      <p className="form-hint mb-8">Update “{property.title}”.</p>
      <PropertyForm
        key={property.id}
        initialValues={{ ...property, status: property.status ?? "Published", description: property.description ?? "" }}
        submitLabel="Save changes"
        onSubmit={(data) => {
          updateProperty(property.id, data);
          navigate("/admin/my-listings");
        }}
      />
    </div>
  );
}
