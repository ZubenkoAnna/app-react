import React from "react";
import CurrentDate from "./CurrentDate";

import "./Main.css";

export default function Weather(props) {
  return (
    <div className="row head">
      <div className="col-sm-6">
        <div className="heading">
          <CurrentDate date={props.info.date} />
        </div>
        <p className="city">
          <span>{props.info.city},</span>
          <span> {props.info.country}</span>
        </p>
      </div>
      <div className="col-sm-3">
        <p className="description text-capitalize">{props.info.description}</p>
        <img
          src={props.info.icon}
          alt={props.info.description}
          className="float-left"
        />
      </div>
      <div className="col-sm-3">
        <p className="heading-s">
          Humidity:<span> {props.info.humidity}%</span>
        </p>
        <p className="heading-s">
          Wind:<span> {Math.round(props.info.wind)} km/h</span>
        </p>
        <div className="temperature">
          <span>{Math.round(props.info.temperature)} </span>
          <span className="units">
            <a href="#">°C</a> | <a href="#">°F</a>
          </span>
        </div>
      </div>
    </div>
  );
}
