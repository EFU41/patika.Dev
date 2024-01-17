import React from "react";
import "./App.css"; // CSS dosyanızı eklediğinizden emin olun
import title_png from "./title.png";
import GlobalStats from "./GlobalStats";

function App() {
  return (
    <div className="App">
      <div className="title">
        <img className="img" src={title_png} />
        <h1>Global and Country Wise Cases of Corona Virus</h1>
        <h3>(For a Particular select a Country from below)</h3>
      </div>
      <GlobalStats />
    </div>
  );
}

export default App;
