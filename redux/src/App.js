import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css"; // Import the CSS file
import AddTask from "./components/AddTask";
import ListTask from "./components/ListTask";

const App = () => {
  const state = useSelector((state) => state.example); // Replace 'example' with your actual reducer key
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch({ type: "EXAMPLE_ACTION" }); // Replace with your actual action
  };

  return (
    <div className="container">
      <h1>ToDo Application</h1>
      <AddTask />
      <ListTask />
    </div>
  );
};

export default App;
