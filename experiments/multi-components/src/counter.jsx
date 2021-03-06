import React from "react";

export default class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = { count: this.props.count };
    this.updateCounter = this.props.updateCounter;
  }

  render() {
    let c = this.updateCounter();
    return <strong className="counter">{c}</strong>;
  }
}
