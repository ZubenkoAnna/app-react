import React from "react";
import WeatherIcon from "./WeatherIcon";

import "./Forecast.css";

export default function Forecast(props) {
  return (
    <div className="row head">
      <div className="col-sm-2">
        <div className="forecast">
          <p>Thu</p>
          <div className="forecastIcon">
            <WeatherIcon
              code={`http://openweathermap.org/img/wn/04d@2x.png`}
              size={70}
            />
          </div>
          <span className="Weather-forecast-temp-max">22°</span>
          <span className="Weather-forecast-temp-min">16°</span>
        </div>
      </div>
    </div>
  );
}
