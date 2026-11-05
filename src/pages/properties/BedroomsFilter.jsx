
const BedroomsFilter = ({ value, onChange }) => {
  return (
    <div>
      <label className="mb-2 block text-xs font-medium text-gray-600">
        Bedrooms
      </label>

      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-md border border-gray-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-gray-500"
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
