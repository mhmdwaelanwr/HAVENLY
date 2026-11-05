const BathroomsFilter = ({ value, onChange }) => {
  return (
    <div>
      <label className="mb-2 block text-xs font-medium text-gray-600">
        Bathrooms
      </label>

      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-md border border-gray-200 bg-white px-3 py-2.5 text-sm"
      >
        <option value="">Any Bathrooms</option>
        <option value="1">1+</option>
        <option value="2">2+</option>
        <option value="3">3+</option>
      </select>
    </div>
  );
};

export default BathroomsFilter;