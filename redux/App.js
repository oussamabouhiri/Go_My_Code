import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import AddTask from "./components/AddTask";
import ListTask from "./components/ListTask";
import "./styles.css";

const App = () => {
  return (
    <Provider store={store}>
      <div className="container">
        <h1>📝 My ToDo Application</h1>
        <p style={{ textAlign: "center", color: "#555" }}>
          Organize your tasks efficiently with this simple ToDo app.
        </p>
        <AddTask />
        <ListTask />
      </div>
    </Provider>
  );
};

export default App;
