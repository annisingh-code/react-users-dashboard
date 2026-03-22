const CityFilter = ({ cities, selectedCity, onCityChange }) => {
  return (
    <div className="city-filter">
      <select
        value={selectedCity}
        onChange={(e) => onCityChange(e.target.value)}
      >
        {cities.map((city, index) => (
          <option key={index} value={city}>
            {city}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CityFilter;
