import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../styles/App.css"; // Adjusted path for styles

function App() {
  return (
    <div className="App">
      <Header />
      <h1>Welcome to React Debugging</h1>
      <Footer />
    </div>
  );
}

export default App;
