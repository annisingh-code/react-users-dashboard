const Card = ({ title, subtitle, user, onCardClick }) => {
  return (
    <div className="card" onClick={() => onCardClick(user)}>
      <style>{`
        .card {
          background: white;
          padding: 16px;
          border-radius: 12px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
          transition: transform 0.2s ease;
          border: 1px solid #eee; /* Added light border */
        }
        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 15px rgba(0,0,0,0.15); /* Slightly stronger shadow on hover */
        }
        .card h2 {
          font-size: 18px;
          margin: 0 0 8px 0;
          color: #333;
        }
        .card p {
          font-size: 14px;
          color: gray;
          margin: 0;
        }
      `}</style>
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </div>
  );
};

export default Card;
