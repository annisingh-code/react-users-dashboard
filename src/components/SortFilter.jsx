const SortFilter = ({ sortOrder, onSortBy }) => {
  return (
    <div className="sort-filter">
      <select onChange={(e) => onSortBy(e.target.value)} value={sortOrder}>
        <option value="asc">Sort A to Z</option>
        <option value="desc">Sort Z to A</option>
      </select>
    </div>
  );
};

export default SortFilter;
