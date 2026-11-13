const PriceRangeFilter = ({ minPrice, maxPrice, onMinChange, onMaxChange }) => {
  return (
    <div>
      <label className="mb-2 block text-xs font-medium property-muted">
        Price Range
      </label>

      <div className="grid grid-cols-2 gap-2">
        <input
          type="number"
          value={minPrice}
          onChange={(e) => onMinChange(e.target.value)}
          placeholder="Min price"
          className="property-input min-w-0"
        />

        <input
          type="number"
          value={maxPrice}
          onChange={(e) => onMaxChange(e.target.value)}
          placeholder="Max price"
          className="property-input min-w-0"
        />
      </div>
    </div>
  );
};

export default PriceRangeFilter;
