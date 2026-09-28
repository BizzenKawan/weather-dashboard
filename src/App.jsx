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
  const [unit, setUnit] = useState("C");
  const isFirstRender = useRef(true);

  useEffect(() => {
    const saved = localStorage.getItem("searchHistory");
    if (saved) setHistory(JSON.parse(saved));
  }, []);

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
      return updated.slice(0, 5);
    });
  };

  return (
    <div className="app min-vh-100 d-flex flex-column align-items-center py-5 px-3">
      <header>
        <h1 className="text-white text-center mb-4">Weather Dashboard</h1>
      </header>
      <main
        className="d-flex flex-column align-items-center gap-3"
        style={{ width: "100%", maxWidth: "480px" }}
      >
        <SearchBar onSearch={handleSearch} />
        {loading && <LoadingSpinner />}
        {error && <ErrorMessage message={error} />}
        {data && !loading && !error && (
          <>
            <button
              className="btn btn-light btn-sm"
              onClick={() => setUnit((u) => (u === "C" ? "F" : "C"))}
            >
              Switch to °{unit === "C" ? "F" : "C"}
            </button>
            <WeatherCard data={data} unit={unit} />
          </>
        )}
        <SearchHistory history={history} onSelect={handleSearch} />
      </main>
    </div>
  );
}

export default App;