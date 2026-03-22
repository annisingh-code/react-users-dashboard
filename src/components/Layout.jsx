import SideBar from "./Sidebar";

const Layout = ({ children, setActivePage }) => {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <SideBar setActivePage={setActivePage} />
      <main
        style={{
          //   width: "calc(100% - 40px)",
          flexGrow: 1,
          padding: "20px",
          backgroundColor: "#f4f4f4",
        }}
      >
        {children}
      </main>
    </div>
  );
};

export default Layout;
