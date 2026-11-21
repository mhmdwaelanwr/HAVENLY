const BedroomsFilter = ({ value, onChange }) => {
  return (
    <div>
      <label className="mb-2 block text-xs font-medium property-muted">
        Bedrooms
      </label>

      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="property-input"
      >
        <option value="">Any Bedrooms</option>
        <option value="1">1+</option>
        <option value="2">2+</option>
        <option value="3">3+</option>
        <option value="4">4+</option>
      </select>
    </div>
  );
};

export default BedroomsFilter;
