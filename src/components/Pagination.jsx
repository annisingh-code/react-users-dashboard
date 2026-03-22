const Pagination = ({ page, totalPages, onSetPage }) => {
  return (
    <div style={{ marginTop: "10px" }}>
      <button
        disabled={page === 1}
        onClick={() => onSetPage((prev) => prev - 1)}
      >
        Prev
      </button>

      <span style={{ margin: "0 10px" }}>
        Page {page} of {totalPages}
      </span>

      <button
        disabled={page === totalPages}
        onClick={() => onSetPage((prev) => prev + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
