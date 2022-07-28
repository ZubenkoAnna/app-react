import React from "react";
import ReactDOM from "react-dom";
import Input from "./input";
import Header from "./Header";
import Footer from "./Footer";

import "./index.css";

function App() {
  return (
    <div className="container">
      <div className="main-wrapper">
        <div className="main">
          <Input />
          <Header />
        </div>
        <Footer />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
