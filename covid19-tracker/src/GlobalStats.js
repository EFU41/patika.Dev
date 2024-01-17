import React from "react";
import CountrySelector from "./CountrySelector";
import { useSelector } from "react-redux";
import BarChart from "./BarChart";

const GlobalStats = () => {
  const countryData = useSelector((state) => state.countryData);

  return (
    <div className="situation">
      <div className="situation_container">
        <div className="Infected">{countryData.cases}</div>
        <div className="Recovered">{countryData.recovered}</div>
        <div className="Deaths">{countryData.deaths}</div>
        <div className="Active">{countryData.active}</div>
      </div>
      <div className="Country_Select">
        <CountrySelector />
      </div>
      <div className="graphic">
        <BarChart />
      </div>
    </div>
  );
};

export default GlobalStats;
