import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Car from "./Car";
const myCar = new Car("Toyota", "Corolla", 2022);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<React.StrictMode>
    <div>
      <h1>Car Details</h1>
      <p>Make: {myCar.make}</p>
      <p>Model: {myCar.model}</p>
      <p>Year: {myCar.year}</p>
      <p>Check the console for the start message!</p>
    </div>
  </React.StrictMode>);
myCar.start();
