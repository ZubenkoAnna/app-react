import React from "react";

export default function Forecast() {
  return (
    <div className="row head">
      <div className="col-sm-2">
        <div className="forecast">
          <p>Thu</p>
          <div className="forecastIcon">
            <img
              src={`http://openweathermap.org/img/wn/09d@2x.png`}
              alt=""
              width="72px"
            />
          </div>
          <span>22° 16°</span>
        </div>
      </div>
      <div className="col-sm-2">
        <div className="forecast">
          <p>Fri</p>
          <div className="forecastIcon">
            <img
              src={`http://openweathermap.org/img/wn/09d@2x.png`}
              alt=""
              width="72px"
            />
          </div>
          <span>18° 16°</span>
        </div>
      </div>
      <div className="col-sm-2">
        <div className="forecast">
          <p>Sat</p>
          <div className="forecastIcon">
            <img
              src={`http://openweathermap.org/img/wn/03d@2x.png`}
              alt=""
              width="72px"
            />
          </div>
          <span>20° 15°</span>
        </div>
      </div>
      <div className="col-sm-2">
        <div className="forecast">
          <p>Sun</p>
          <div className="forecastIcon">
            <img
              src={`http://openweathermap.org/img/wn/01d@2x.png`}
              alt=""
              width="72px"
            />
          </div>
          <span>21° 17°</span>
        </div>
      </div>
      <div className="col-sm-2">
        <div className="forecast">
          <p>Mon</p>
          <div className="forecastIcon">
            <img
              src={`http://openweathermap.org/img/wn/04d@2x.png`}
              alt=""
              width="72px"
            />
          </div>
          <span>25° 14°</span>
        </div>
      </div>
      <div className="col-sm-2">
        <div className="forecast">
          <p>Tue</p>
          <div className="forecastIcon">
            <img
              src={`http://openweathermap.org/img/wn/10d@2x.png`}
              alt=""
              width="72px"
            />
          </div>
          <span>23° 18°</span>
        </div>
      </div>
    </div>
  );
}
