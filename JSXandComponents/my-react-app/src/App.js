import React from "react";
import { Container, Card } from "react-bootstrap";
import Name from "./components/Name";
import Price from "./components/Price";
import Description from "./components/Description";
import Image from "./components/Image";
import "./App.css";

function App() {
  const firstName = "User"; // Change this to test the greeting message

  return (
    <Container className="mt-5">
      <h1>{firstName ? `Hello, ${firstName}!` : "Welcome!"}</h1>
      <Card className="product-card">
        <Card.Body>
          <Image />
          <Name />
          <Price />
          <Description />
        </Card.Body>
      </Card>
    </Container>
  );
}

export default App;
