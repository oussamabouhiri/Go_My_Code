import React from 'react';
import './App.css';
import Greeting from './Greeting';
import Counter from './Counter';

function MainApp(): React.ReactElement {
  return (
    <div className="App">
      <h1>Welcome to the TypeScript React App</h1>
      <Greeting name="Developer" />
      <Counter />
    </div>
  );
}

export default MainApp;
