import React from 'react';

// Step 1: Define the prop type
interface GreetingProps {
  name: string; // The name prop must be a string
}

// Step 2: Use React.FC to type the functional component
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  // Step 3: Return JSX with the typed prop
  return <div>Hello, {name}!</div>;
};

export default Greeting;
