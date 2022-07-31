import React, { useState } from "react";
import Form from "./Form";
import Forecast from "./Forecast";

import "./Main.css";

export default function Main() {
  return (
    <div>
      <Form />

      <div className="row head">
        <div className="col-sm-6">
          <p className="heading">Wensday 16:54</p>
          <p className="city">
            <span>New York,</span>
            <span> US</span>
          </p>
        </div>
        <div className="col-sm-3">
          <p className="description">Rain</p>
          <img
            src={`http://openweathermap.org/img/wn/10d@2x.png`}
            alt=""
            className="float-left"
          />
        </div>
        <div className="col-sm-3">
          <p className="heading-s">
            Humidity:<span> 25%</span>
          </p>
          <p className="heading-s">
            Wind:<span> 5km/h</span>
          </p>
          <div className="temperature">
            <span>24 </span>
            <span className="units">
              <a href="#">°C</a> | <a href="#">°F</a>
            </span>
          </div>
        </div>
      </div>

      <Forecast />
    </div>
  );
}
