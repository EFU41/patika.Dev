import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setCountryData } from "./action";

const CountryDetails = ({ selectedCountry }) => {
  const [countryData, setCountryDataLocal] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCountryData = async () => {
      try {
        const response = await axios.get(
          selectedCountry === "all"
            ? "https://disease.sh/v3/covid-19/all"
            : `https://disease.sh/v3/covid-19/countries/${selectedCountry}`
        );
        dispatch(setCountryData(response.data));
        setCountryDataLocal(response.data); // Yerel state'i güncelle
      } catch (error) {
        console.error("Error fetching country data:", error);
      }
    };

    fetchCountryData();
  }, [selectedCountry, dispatch]);

  return (
    <div className="App">
      <h2>
        {selectedCountry === "all" ? "Dünya" : `${selectedCountry} Detayları`}
      </h2>
    </div>
  );
};

export default CountryDetails;
