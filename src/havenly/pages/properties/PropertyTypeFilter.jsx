const PropertyTypeFilter = ({ value, onChange }) => {
  return (
    <div>
      <label className="mb-2 block text-xs font-medium property-muted">
        Property Type
      </label>

      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="property-input"
      >
        <option value="All Types">All Types</option>
        <option value="Apartment">Apartment</option>
        <option value="Villa">Villa</option>
        <option value="House">House</option>
        <option value="Townhouse">Townhouse</option>
        <option value="Studio">Studio</option>
      </select>
    </div>
  );
};

export default PropertyTypeFilter;
