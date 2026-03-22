const SearchBar = ({ searchTerm, onSearchChange, placeholder }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder={placeholder}
        className="w-full p-2 border border-gray-300 rounded-md"
      />
    </div>
  );
};
export default SearchBar;
