import React, { useState } from "react";
import axios from "axios";

import "./input.css";

export default function Input() {
  let [city, setCity] = useState("");
  let [weather, setWeather] = useState(false);

  function showWeather(event) {
    event.preventDefault();

    function showParameters(response) {
      setWeather({
        city: response.data.name,
        country: response.data.sys.country,
        temperature: response.data.main.temp,
        description: response.data.weather[0].description,
        humidity: response.data.main.humidity,
        wind: response.data.wind.speed,
        icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      });
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b9e5645fd345ccef8ad19143373284ef&units=metric`;
    axios.get(url).then(showParameters);
  }

  function showSubmit(event) {
    setCity(event.target.value);
  }

  return (
    <div>
      <form className="search-form" onSubmit={showWeather}>
        <div className="row">
          <span className="col-sm-6">
            <input
              type="search"
              placeholder="Type a city.."
              autoFocus="on"
              autoComplete="off"
              className="form-control"
              onChange={showSubmit}
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

      <div className="row head">
        <div className="col-sm-6">
          <p className="heading">Wensday 16:54</p>
          <p className="city">
            <span>{weather.city},</span>
            <span> {weather.country}</span>
          </p>
        </div>
        <div className="col-sm-3">
          <p className="description">{weather.description}</p>
          <img src={weather.icon} alt="" className="float-left" />
        </div>
        <div className="col-sm-3">
          <p className="heading-s">
            Humidity:<span> {Math.round(weather.humidity)} %</span>
          </p>
          <p className="heading-s">
            Wind:<span> {Math.round(weather.wind)} km/h</span>
          </p>
          <div className="temperature">
            <span>{Math.round(weather.temperature)} </span>
            <span className="units">
              <a href="#">°C</a> | <a href="#">°F</a>
            </span>
          </div>
        </div>
      </div>

      <div className="row head">
        <div className="col-sm-2">
          <div className="forecast">
            <p>Thu</p>
            <div className="forecastIcon">
              <img src={weather.icon} alt="" width="72px" />
            </div>
            <span>32° 23°</span>
          </div>
        </div>
        <div className="col-sm-2">
          <div className="forecast">
            <p>Fri</p>
            <div className="forecastIcon">
              <img
                src={`https://openweathermap.org/img/wn/02d@2x.png`}
                alt=""
                width="72px"
              />
            </div>
            <span>22° 13°</span>
          </div>
        </div>
        <div className="col-sm-2">
          <div className="forecast">
            <p>Sat</p>
            <div className="forecastIcon">
              <img src={weather.icon} alt="" width="72px" />
            </div>
            <span>28° 23°</span>
          </div>
        </div>
        <div className="col-sm-2">
          <div className="forecast">
            <p>Sun</p>
            <div className="forecastIcon">
              <img
                src={`https://openweathermap.org/img/wn/02d@2x.png`}
                alt=""
                width="72px"
              />
            </div>
            <span>30° 23°</span>
          </div>
        </div>
        <div className="col-sm-2">
          <div className="forecast">
            <p>Mon</p>
            <div className="forecastIcon">
              <img src={weather.icon} alt="" width="72px" />
            </div>
            <span>32° 23°</span>
          </div>
        </div>
        <div className="col-sm-2">
          <div className="forecast">
            <p>Tue</p>
            <div className="forecastIcon">
              <img
                src={`https://openweathermap.org/img/wn/04d@2x.png`}
                alt=""
                width="72px"
              />
            </div>
            <span>25° 19°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
