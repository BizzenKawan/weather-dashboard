function SearchHistory({ history, onSelect }) {
  if (history.length === 0) return null;

  return (
    <div className="w-100 bg-white bg-opacity-75 rounded p-3">
      <h6>Recent Searches</h6>
      <div className="d-flex flex-wrap gap-2">
        {history.map((city, index) => (
          <span
            key={`${city}-${index}`}
            className="badge rounded-pill bg-primary"
            style={{ cursor: "pointer" }}
            onClick={() => onSelect(city)}
          >
            {city}
          </span>
        ))}
      </div>
    </div>
  );
}

export default SearchHistory;