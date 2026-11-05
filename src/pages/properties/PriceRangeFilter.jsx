
const PriceRangeFilter = ({ minPrice, maxPrice, onMinChange, onMaxChange }) => {
  return (
    <div>
      <label className="mb-2 block text-xs font-medium text-gray-600">
        Price Range
      </label>

      <div className="grid grid-cols-2 gap-2">
        <input
          type="number"
          value={minPrice}
          onChange={(e) => onMinChange(e.target.value)}
          placeholder="Min price"
          className="min-w-0 rounded-md border border-gray-200 px-2 py-2.5 text-sm outline-none focus:border-gray-500"
        />

        <input
          type="number"
          value={maxPrice}
          onChange={(e) => onMaxChange(e.target.value)}
          placeholder="Max price"
          className="min-w-0 rounded-md border border-gray-200 px-2 py-2.5 text-sm outline-none focus:border-gray-500"
        />
      </div>
    </div>
  );
};

export default PriceRangeFilter;
