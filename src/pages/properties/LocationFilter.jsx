const LocationFilter = ({ value, onChange }) => {
  return (
    <div>
      <label className="mb-2 block text-xs font-medium property-muted">
        Location
      </label>

      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Enter city or area"
        className="property-input"
      />
    </div>
  );
};

export default LocationFilter;
