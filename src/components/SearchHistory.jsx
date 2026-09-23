function SearchHistory({ history, onSelect }) {
  if (history.length === 0) return null;

  return (
    <div className="search-history">
      <h3>Recent Searches</h3>
      <ul>
        {history.map((city, index) => (
          <li key={`${city}-${index}`} onClick={() => onSelect(city)}>
            {city}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchHistory;