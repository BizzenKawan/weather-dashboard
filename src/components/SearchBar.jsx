import { useState } from "react";

function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!city.trim()) return;
    onSearch(city.trim());
    setCity("");
  };

  return (
    <form onSubmit={handleSubmit} className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter a city..."
      />
      <button className="btn btn-primary" type="submit">Search</button>
    </form>
  );
}

export default SearchBar;