function WeatherCard({ data }) {
  const { name, main, weather, wind } = data;
  const icon = weather[0].icon;

  return (
    <div className="card text-center shadow-sm mb-3 w-100">
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <img
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt={weather[0].description}
        />
        <p className="display-5 fw-bold text-primary">{Math.round(main.temp)}°C</p>
        <p className="text-capitalize text-muted">{weather[0].description}</p>
        <div className="d-flex justify-content-center gap-4 text-secondary small">
          <span>Humidity: {main.humidity}%</span>
          <span>Wind: {wind.speed} m/s</span>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;