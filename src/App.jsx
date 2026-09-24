import { useState, useEffect, useRef } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import SearchHistory from "./components/SearchHistory";
import LoadingSpinner from "./components/LoadingSpinner";
import ErrorMessage from "./components/ErrorMessage";
import useWeather from "./hooks/useWeather";
import "./App.css";

function App() {
  const { data, loading, error, fetchWeather } = useWeather();
  const [history, setHistory] = useState([]);
  const isFirstRender = useRef(true);

  // Load history from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("searchHistory");
    if (saved) setHistory(JSON.parse(saved));
  }, []);

  // Save history whenever it changes — but skip the very first render
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    localStorage.setItem("searchHistory", JSON.stringify(history));
  }, [history]);

  const handleSearch = (city) => {
    fetchWeather(city);
    setHistory((prev) => {
      const updated = [city, ...prev.filter((c) => c.toLowerCase() !== city.toLowerCase())];
      return updated.slice(0, 5); // keep last 5
    });
  };

  return (
    <div className="app">
      <header>
        <h1>Weather Dashboard</h1>
      </header>
      <main>
        <SearchBar onSearch={handleSearch} />

        {loading && <LoadingSpinner />}
        {error && <ErrorMessage message={error} />}
        {data && !loading && !error && <WeatherCard data={data} />}

        <SearchHistory history={history} onSelect={handleSearch} />
      </main>
    </div>
  );
}

export default App;