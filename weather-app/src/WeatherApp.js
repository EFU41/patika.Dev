import React, { useState, useEffect } from "react";
import axios from "axios";
import "./tasarım.css";
import bulut from "./bulut.png";
import günes from "./günes.png";

const API_KEY = "e86e1685c523ef9f9ecf95058cb0108b";

const WeatherApp = () => {
  const [location, setLocation] = useState();
  const [weatherData, setWeatherData] = useState();
  const [selectedCity, setSelectedCity] = useState("");

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }, []);

  useEffect(() => {
    if (location) {
      getWeatherData(location.lat, location.lon);
    }
  }, [location]);

  const getWeatherData = async (lat, lon) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
      );
      setWeatherData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCityChange = async (selectedCity) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/geo/1.0/direct?q=${selectedCity}&limit=5&appid=${API_KEY}&units=metric`
      );

      if (Array.isArray(response.data) && response.data.length > 0) {
        setLocation({
          lat: response.data[0].lat,
          lon: response.data[0].lon,
        });
      } else {
        console.error("Invalid or empty response:", response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };
  console.log(weatherData);

  return (
    <div className="container">
      <div className="city">
        <h1>{weatherData && weatherData.name}</h1>
      </div>

      <div className="temp">
        <div className="günes">
          <img src={günes} />
          güneşli
        </div>
        <div className="derece">{weatherData && weatherData.main.temp}°C</div>
        <div className="hız">
          <div>speed:{weatherData && weatherData.wind.speed}</div>
          <div>gust:{weatherData && weatherData.wind.gust}</div>
          <div>deg:{weatherData && weatherData.wind.deg}</div>
        </div>
      </div>
      <div className="days">
        <div className="TUE">
          <div>gün</div>
          <img src={bulut} />
          <div>derece</div>
        </div>
        <div className="TUE">
          <div>gün</div>
          <img src={bulut} />
          <div>derece</div>
        </div>
        <div className="TUE">
          <div>gün</div>
          <img src={bulut} />
          <div>derece</div>
        </div>
        <div className="TUE">
          <div>gün</div>
          <img src={bulut} />
          <div>derece</div>
        </div>
        <div className="TUE">
          <div>gün</div>
          <img src={bulut} />
          <div>derece</div>
        </div>
      </div>

      <div className="select">
        <label>
          Şehir Seç:
          <input
            type="text"
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
          />
        </label>
        <button onClick={() => handleCityChange(selectedCity)}>
          Şehri Getir
        </button>
      </div>
    </div>
  );
};

export default WeatherApp;

{
  /* <div>
      <h1>Hava Durumu Uygulaması</h1>
      <div>
        <label>
          Şehir Seç:
          <input
            type="text"
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
          />
        </label>
        <button onClick={() => handleCityChange(selectedCity)}>
          Şehri Getir
        </button>
      </div>
      {weatherData && weatherData.main ? (
        <div>
          <h2>
            {weatherData.name}, {weatherData.sys.country}
          </h2>
          <div>
            <p>
              {new Date(weatherData.dt * 1000).toLocaleDateString("tr-TR", {
                weekday: "long",
              })}
            </p>
            <p>{weatherData.weather[0].description}</p>
            <p>Sıcaklık: {weatherData.main.temp}°C</p>
          </div>
        </div>
      ) : (
        <p>Hava durumu verileri bulunamadı.</p>
      )}
    </div> */
}
