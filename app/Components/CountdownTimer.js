import React from 'react';

class CountdownTimer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {secondsRemaining: 0};
    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    this.setState({ secondsRemaining: this.props.secondsRemaining });
    this.interval = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick() {
    this.setState({secondsRemaining: this.state.secondsRemaining - 1});
    if (this.state.secondsRemaining <= 0) {
      clearInterval(this.interval);
    }
  }

  render() {
    return (
      React.DOM.div(null, "Time Remaining: ", Math.floor(this.state.secondsRemaining / 60), ':', this.state.secondsRemaining % 60)
    );
  }
}

CountdownTimer.propTypes = {
  secondsRemaining: React.PropTypes.number
};

export default CountdownTimer;