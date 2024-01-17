// CountrySelector.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import CountryDetails from "./CountryDetails";

const CountrySelector = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("all");

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get(
          "https://disease.sh/v3/covid-19/countries"
        );
        setCountries(response.data.map((country) => country.country));
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  return (
    <div className="select-container">
      <label htmlFor="countryDropdown">Ülke Seçin:</label>
      <select
        id="countryDropdown"
        onChange={handleCountryChange}
        value={selectedCountry}
      >
        <option value="all">Tüm Dünya</option>
        {countries.map((country) => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </select>
      <CountryDetails selectedCountry={selectedCountry} />
    </div>
  );
};

export default CountrySelector;
