import React from "react";
import ReactDOM from "react-dom";
import Main from "./Main";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Footer";

import "./index.css";

function App() {
  return (
    <div className="container">
      <div className="main-wrapper">
        <div className="main">
          <Main defaultCity="Kharkiv" />
        </div>
        <Footer />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
