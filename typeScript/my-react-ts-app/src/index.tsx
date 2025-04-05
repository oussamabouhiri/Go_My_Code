import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App"; // Import the App component

const rootElement = document.getElementById("root");
if (!rootElement) {
    console.error("Root element not found. Ensure the element with id 'root' exists in your HTML file.");
    throw new Error("Root element not found.");
}

const root = ReactDOM.createRoot(rootElement);

root.render(
    <React.StrictMode>
        <App /> {/* Render the App component */}
    </React.StrictMode>
);
