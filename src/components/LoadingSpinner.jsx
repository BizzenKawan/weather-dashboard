function LoadingSpinner() {
  return (
    <div className="d-flex justify-content-center align-items-center gap-2 mb-3">
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <span>Loading weather data...</span>
    </div>
  );
}

export default LoadingSpinner;