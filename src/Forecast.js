import React, { useState } from "react";
import ForecastDay from "./ForecastDay";
import axios from "axios";

import "./Forecast.css";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="row head">
        <div className="col-sm-2">
          <ForecastDay data={forecast[0]} />
        </div>
      </div>
    );
  } else {
    let apiKey = "b9e5645fd345ccef8ad19143373284ef";
    let lon = props.coordinat.lon;
    let lat = props.coordinat.lat;
    let apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiURL).then(handleResponse);

    return null;
  }
}
