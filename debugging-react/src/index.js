import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App"; // Correct case and relative path
import "./styles/App.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
