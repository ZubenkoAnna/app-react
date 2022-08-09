import React from "react";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";

import "./Forecast.css";

export default function Forecast(props) {
  function handleResponse(response) {
    /* maxTemp: response.data.main.temp_max;
    minTemp: response.data.main.temp_min;*/
  }

  let apiKey = "b9e5645fd345ccef8ad19143373284ef";
  let lon = props.coord.lon;
  let lat = props.coord.lat;
  let apiURL = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  axios.get(apiURL).then(handleResponse);

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
