import useFetch from "../hooks/useFetch";
import CardGrids from "../components/CardGrid";
import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import SortFilter from "../components/SortFilter";
import CityFilter from "../components/CityFilter";
import Pagination from "../components/Pagination";

const Users = () => {
  const { data, loading, error } = useFetch("users");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [selectedCity, setSelectedCity] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedUser, setSelectedUser] = useState(null);
  console.log(selectedUser);
  const limit = 8;
  const lastIndex = currentPage * limit;
  const firstIndex = lastIndex - limit;

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCity, sortOrder]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!data) return <p>No data found.</p>;

  const cities = data.map((user) => user.address.city);
  const uniqueCities = [...new Set(cities)];
  const cityOptions = ["All", ...uniqueCities];

  const cityFiltered = data.filter(
    (user) => selectedCity === "All" || user.address.city === selectedCity,
  );

  const searchFiltered = cityFiltered.filter((user) => {
    const userName = user.name.toLowerCase();
    const search = searchTerm.toLowerCase();
    return userName.includes(search);
  });

  const sortedData = [...searchFiltered].sort((a, b) => {
    return sortOrder === "asc"
      ? a.name.localeCompare(b.name)
      : b.name.localeCompare(a.name);
  });

  const totalPages = Math.ceil(sortedData.length / limit);
  const paginatedData = sortedData.slice(firstIndex, lastIndex);

  return (
    <div className="user">
      <div
        className="search-sort"
        style={{ display: "flex", marginBottom: "10px", gap: "10px" }}
      >
        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          placeholder="Search for a user"
        />
        <CityFilter
          cities={cityOptions}
          selectedCity={selectedCity}
          onCityChange={setSelectedCity}
        />
        <SortFilter sortOrder={sortOrder} onSortBy={setSortOrder} />
      </div>

      {/* ✅ Use sortedData */}
      {sortedData.length === 0 ? (
        <p>No users found</p>
      ) : (
        <CardGrids
          data={paginatedData}
          onCardClick={setSelectedUser}
          getTitle={(item) => item.name}
          getSubtitle={(item) => item.id}
        />
      )}
      <Pagination
        page={currentPage}
        totalPages={totalPages}
        onSetPage={setCurrentPage}
      />
      {selectedUser && (
        <div>
          <h2>{selectedUser.name}</h2>
          <p>{selectedUser.email}</p>
          <p>{selectedUser.phone}</p>
          <p>{selectedUser.address.city}</p>

          <button onClick={() => setSelectedUser(null)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default Users;
