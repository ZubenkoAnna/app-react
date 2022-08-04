import React, { useState } from "react";
import Weather from "./Weather";
import Forecast from "./Forecast";
import axios from "axios";
import "./Main.css";

export default function Main(props) {
  const [currentWeather, setCurrentWeather] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function showParameters(response) {
    setCurrentWeather({
      ready: true,
      city: response.data.name,
      country: response.data.sys.country,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      maxTemp: response.data.main.temp_max,
      minTemp: response.data.main.temp_min,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "b9e5645fd345ccef8ad19143373284ef";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(showParameters);
  }

  if (currentWeather.ready) {
    return (
      <div className="search-form">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <span className="col-sm-6">
              <input
                type="search"
                placeholder="Type a city.."
                autoFocus="on"
                autoComplete="off"
                className="form-control"
                onChange={handleCityChange}
              />
            </span>
            <span className="col-sm-3">
              <input
                type="submit"
                value="Search"
                className="form-control btn btn-primary"
              />
            </span>
            <span className="col-sm-3">
              <input
                type="submit"
                value="Current"
                className="form-control btn btn-success"
              />
            </span>
          </div>
        </form>

        <Weather info={currentWeather} />
        <Forecast />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
