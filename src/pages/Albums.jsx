import useFetch from "../hooks/useFetch";
import CardGrids from "../components/CardGrid";
import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import SortFilter from "../components/SortFilter";
import Pagination from "../components/Pagination";

const Albums = () => {
  const { data, loading, error } = useFetch("albums");

  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [selectedUserId, setSelectedUserId] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const limit = 6;

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, sortOrder, selectedUserId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  // 👉 Extract unique userIds
  const userIds = [...new Set(data.map((album) => album.userId))];
  const userOptions = ["All", ...userIds];

  // 👉 Filter by userId
  const filteredByUser = data.filter(
    (album) =>
      selectedUserId === "All" || album.userId === Number(selectedUserId),
  );

  // 👉 Search by title
  const searched = filteredByUser.filter((album) =>
    album.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  // 👉 Sort by title
  const sorted = [...searched].sort((a, b) =>
    sortOrder === "asc"
      ? a.title.localeCompare(b.title)
      : b.title.localeCompare(a.title),
  );

  // 👉 Pagination
  const totalPages = Math.ceil(sorted.length / limit);
  const startIndex = (currentPage - 1) * limit;
  const paginatedData = sorted.slice(startIndex, startIndex + limit);

  return (
    <div>
      <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          placeholder="Search albums"
        />

        {/* Simple dropdown for userId filter */}
        <select
          value={selectedUserId}
          onChange={(e) => setSelectedUserId(e.target.value)}
        >
          {userOptions.map((id) => (
            <option key={id} value={id}>
              {id === "All" ? "All Users" : `User ${id}`}
            </option>
          ))}
        </select>

        <SortFilter sortOrder={sortOrder} onSortBy={setSortOrder} />
      </div>

      {paginatedData.length === 0 ? (
        <p>No Albums found</p>
      ) : (
        <CardGrids
          data={paginatedData}
          getTitle={(item) => item.title}
          getSubtitle={(item) => item.userId}
        />
      )}

      <Pagination
        page={currentPage}
        totalPages={totalPages}
        onSetPage={setCurrentPage}
      />
    </div>
  );
};

export default Albums;
