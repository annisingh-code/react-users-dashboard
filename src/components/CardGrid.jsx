import Card from "./Card";

// const CardGrids = ({ data, onCardClick }) => {
const CardGrids = ({ data, getTitle, getSubtitle, onCardClick }) => {
  const gridStyle = {
    display: "grid",
    gap: "20px",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  };

  return (
    <div style={gridStyle}>
      {data.map((item) => (
        <Card
          // key={user.id}
          // title={getTitle(user)}
          // // title={user.name}
          // subtitle={user.id}
          // user={user}
          // onCardClick={onCardClick}
          key={item.id}
          title={getTitle(item)}
          subtitle={getSubtitle(item)}
          user={item}
          onCardClick={onCardClick}
        />
      ))}
    </div>
  );
};
export default CardGrids;
