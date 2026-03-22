import { useState } from "react";
import Layout from "./components/Layout";
import CardGrids from "./components/CardGrid";
import Users from "./pages/Users";
import SideBar from "./components/Sidebar";
import Posts from "./pages/Posts";
import Albums from "./pages/Albums";

function App() {
  // const dummyUsers = [
  //   { id: 1, name: "Anish" },
  //   { id: 2, name: "Sanya" },
  //   { id: 3, name: "Vikram" },
  //   { id: 4, name: "Riya" },
  // ];

  const [activePage, setActivePage] = useState("users");

  // const renderPage = () => {
  //   if (activePage == "users") return <Users />;
  //   if (activePage == "post") return <Posts />;
  //   if (activePage == "album") return <Albums />;
  // };

  return (
    <Layout setActivePage={setActivePage}>
      {activePage === "users" && <Users />}
      {activePage === "posts" && <Posts />}
      {activePage === "albums" && <Albums />}
    </Layout>
  );
}

export default App;
