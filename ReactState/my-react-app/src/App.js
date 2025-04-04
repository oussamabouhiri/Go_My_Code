import React, { Component } from 'react';
import Profile from './components/Profile';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'John Doe',
        bio: 'A software developer with a passion for learning new technologies.',
        imgSrc: 'https://via.placeholder.com/150',
        profession: 'Software Developer',
      },
      show: false,
      interval: 0,
    };
    this.toggleShow = this.toggleShow.bind(this);
  }

  toggleShow() {
    this.setState((prevState) => ({ show: !prevState.show }));
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState((prevState) => ({ interval: prevState.interval + 1 }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    const { person, show, interval } = this.state;
    return (
      <div className="App">
        <button onClick={this.toggleShow}>
          {show ? 'Hide Profile' : 'Show Profile'}
        </button>
        {show && <Profile person={person} />}
        <p>Time since component mounted: {interval} seconds</p>
      </div>
    );
  }
}

export default App;