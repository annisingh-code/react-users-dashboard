const SideBar = ({ setActivePage }) => {
  return (
    <aside
      className="sidebar"
      style={{ width: "250px", backgroundColor: "#2c3e50" }}
    >
      <h2>Dashboard</h2>
      <nav>
        <button onClick={() => setActivePage("users")}>Users</button>
        <button onClick={() => setActivePage("posts")}>Posts</button>
        <button onClick={() => setActivePage("albums")}>Albums</button>
      </nav>
    </aside>
  );
};

export default SideBar;
