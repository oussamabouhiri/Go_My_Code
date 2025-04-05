import React, { Component } from 'react';

// Define the state type
interface CounterState {
  count: number; // The count state must be a number
}

class Counter extends Component<{}, CounterState> {
  state: CounterState = {
    count: 0,
  };

  increment = (): void => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
