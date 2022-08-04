import React from "react";

export default function WeatherIcon(props) {
  return <img src={props.code} alt={props.alt} />;
}

/* <WeatherIcon
            code={props.info.icon}
            alt={props.info.description}
          />*/
