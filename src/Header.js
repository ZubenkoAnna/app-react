import React from "react";

import "./Header.css";

export default function Header() {
  let weatherData = {
    city: "New York",
    country: "US",
    date: "Thursday 16:04",
    description: "Clouds",
    temperature: 25,
    humidity: 70,
    wind: 3,
    imgUrl: "http://openweathermap.org/img/wn/03d@2x.png",
  };
  return (
    <div className="row head">
      <div className="col-sm-6">
        <p className="heading">{weatherData.date}</p>
        <p className="city">
          <span>{weatherData.city},</span>
          <span> {weatherData.country}</span>
        </p>
      </div>
      <div className="col-sm-3">
        <p className="description">{weatherData.description}</p>
        <img src={weatherData.imgUrl} alt="" className="float-left" />
      </div>
      <div className="col-sm-3">
        <p className="heading-s">
          Humidity:<span> {weatherData.humidity} %</span>
        </p>
        <p className="heading-s">
          Wind:<span> {weatherData.wind} km/h</span>
        </p>
        <div className="temperature">
          <span>{weatherData.temperature} </span>
          <span className="units">
            <a href="#">°C</a> | <a href="#">°F</a>
          </span>
        </div>
      </div>
    </div>
  );
}
