import React, { useState } from "react";
import axios from "axios";
import Form from "./Form";
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
        <Form />

        <div className="row head">
          <div className="col-sm-6">
            <p className="heading">
              <CurrentDate date={currentWeather.date} />
            </p>
            <p className="city">
              <span>{currentWeather.city},</span>
              <span> {currentWeather.country}</span>
            </p>
          </div>
          <div className="col-sm-3">
            <p className="description text-capitalize">
              {currentWeather.description}
            </p>
            <img
              src={currentWeather.icon}
              alt={currentWeather.description}
              className="float-left"
            />
          </div>
          <div className="col-sm-3">
            <p className="heading-s">
              Humidity:<span> {currentWeather.humidity}%</span>
            </p>
            <p className="heading-s">
              Wind:<span> {Math.round(currentWeather.wind)}km/h</span>
            </p>
            <div className="temperature">
              <span>{Math.round(currentWeather.temperature)} </span>
              <span className="units">
                <a href="#">°C</a> | <a href="#">°F</a>
              </span>
            </div>
          </div>
        </div>

        <Forecast />
      </div>
    );
  } else {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaulteCity}&appid=b9e5645fd345ccef8ad19143373284ef&units=metric`;
    axios.get(url).then(showParameters);

    return "Loading...";
  }
}
