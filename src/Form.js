import React from "react";

import "./Main.css";

export default function Form() {
  return (
    <form className="search-form">
      <div className="row">
        <span className="col-sm-6">
          <input
            type="search"
            placeholder="Type a city.."
            autoFocus="on"
            autoComplete="off"
            className="form-control"
          />
        </span>
        <span className="col-sm-3">
          <input
            type="submit"
            value="Search"
            className="form-control btn btn-primary"
          />
        </span>
        <span className="col-sm-3">
          <input
            type="submit"
            value="Current"
            className="form-control btn btn-success"
          />
        </span>
      </div>
    </form>
  );
}
