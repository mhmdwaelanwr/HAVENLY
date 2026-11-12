
const PropertyTypeFilter = ({ value, onChange }) => {
  return (
    <div>
      <label className="mb-2 block text-xs font-medium text-gray-600">
        Property Type
      </label>

      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-md border border-gray-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-gray-500"
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
