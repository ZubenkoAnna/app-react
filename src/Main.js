import React, { useState } from "react";
import axios from "axios";
import Weather from "./Weather";
import Forecast from "./Forecast";
import CurrentDate from "./CurrentDate";

import "./Main.css";

export default function Main(props) {
  const [currentWeather, setCurrentWeather] = useState({ ready: false });
  function showParameters(response) {
    console.log(response);
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

  if (currentWeather.ready) {
    return (
      <div>
        <form className="search-form">
          <div className="row">
            <span className="col-sm-6">
              <input
                type="search"
                placeholder="Type a city.."
                autoFocus="on"
                autoComplete="off"
                className="form-control"
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
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaulteCity}&appid=b9e5645fd345ccef8ad19143373284ef&units=metric`;
    axios.get(url).then(showParameters);

    return "Loading...";
  }
}
