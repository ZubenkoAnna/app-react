import React from "react";
import CurrentDate from "./CurrentDate";

import "./Main.css";

export default function Weather(props) {
  return (
    <div className="row head">
      <div className="col-sm-6">
        <p className="heading">
          <CurrentDate date={props.info.currentWeather.date} />
        </p>
        <p className="city">
          <span>{props.info.currentWeather.city},</span>
          <span> {props.info.currentWeather.country}</span>
        </p>
      </div>
      <div className="col-sm-3">
        <p className="description text-capitalize">
          {props.info.currentWeather.description}
        </p>
        <img
          src={props.info.currentWeather.icon}
          alt={props.info.currentWeather.description}
          className="float-left"
        />
      </div>
      <div className="col-sm-3">
        <p className="heading-s">
          Humidity:<span> {props.info.currentWeather.humidity}%</span>
        </p>
        <p className="heading-s">
          Wind:<span> {Math.round(props.info.currentWeather.wind)}km/h</span>
        </p>
        <div className="temperature">
          <span>{Math.round(props.info.currentWeather.temperature)} </span>
          <span className="units">
            <a href="#">°C</a> | <a href="#">°F</a>
          </span>
        </div>
      </div>
    </div>
  );
}
