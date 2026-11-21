import { useNavigate } from "react-router-dom";
import PropertyForm from "../propertyForm/PropertyForm";
import { createProperty } from "../../data/properties";

export default function AddProperty() {
  const navigate = useNavigate();
  return (
    <div className="form-page">
      <p className="form-eyebrow">Listings</p>
      <h1 className="form-heading">Add property</h1>
      <p className="form-hint mb-8">Fill in the details below to list a new property.</p>
      <PropertyForm
        submitLabel="Create property"
        onSubmit={(data) => {
          const created = createProperty(data);
          navigate("/properties/" + created.id);
        }}
      />
    </div>
  );
}
