import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [units, setUnits] = useState("celsiuse");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnits("fahrenheit");
  }

  function showCelsiuse(event) {
    event.preventDefault();
    setUnits("celsiuse");
  }

  function fahrenheit() {
    return (props.celsiuse * 9) / 5 + 32;
  }

  if (units === "celsiuse") {
    return (
      <div>
        <span>{Math.round(props.celsiuse)} </span>
        <span className="units">
          °C |{" "}
          <a href="#" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div>
        <span>{Math.round(fahrenheit())} </span>
        <span className="units">
          <a href="#" onClick={showCelsiuse}>
            °C
          </a>{" "}
          | °F
        </span>
      </div>
    );
  }
}
