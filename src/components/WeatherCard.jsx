function WeatherCard({ data }) {
  const { name, main, weather, wind } = data;
  const icon = weather[0].icon;

  return (
    <div className="weather-card">
      <h2>{name}</h2>
      <img
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        alt={weather[0].description}
      />
      <p className="temp">{Math.round(main.temp)}°C</p>
      <p className="description">{weather[0].description}</p>
      <div className="details">
        <span>Humidity: {main.humidity}%</span>
        <span>Wind: {wind.speed} m/s</span>
      </div>
    </div>
  );
}

export default WeatherCard;