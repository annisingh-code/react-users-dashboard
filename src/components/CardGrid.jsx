import Card from "./Card";

const CardGrids = ({ data }) => {
  const gridStyle = {
    display: "grid",
    gap: "20px",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  };
   console.log(data)
  return (
    <div  style={gridStyle}>
      {data.map((user) => (
        <Card key={user.id} title={user.name} subtitle={user.id} />
      ))}
    </div>
  );
};
export default CardGrids