
const LocationFilter = ({ value, onChange }) => {
  return (
    <div>
      <label className="mb-2 block text-xs font-medium text-gray-600">
        Location
      </label>

      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Enter city or area"
        className="w-full rounded-md border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-gray-500"
      />
    </div>
  );
};

export default LocationFilter;
