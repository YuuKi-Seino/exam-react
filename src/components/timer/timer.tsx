import React from "react";

export class Timer extends React.Component {
  state: Readonly<{ seconds: number }>;
  interval!: NodeJS.Timer;
  constructor(props: any) {
    super(props);
    this.state = { seconds: 0 };
  }
  /**
   *
   */
  tick() {
    this.setState((state: Readonly<{ seconds: number }>) => ({
      seconds: state.seconds + 1,
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return <div>Seconds: {this.state.seconds}</div>;
  }
}
