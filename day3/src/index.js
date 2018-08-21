import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

class Room extends React.Component {
  state = {
    isLit: false,
    temperature: 22
  };

  flipLight = () => {
    this.setState({
      isLit: !this.state.isLit
    });
  };

  on = () => {
    this.setState({
      isLit: true
    });
  };

  off = () => {
    this.setState({
      isLit: false
    });
  };

  increaseTemp = () => {
    this.setState({
      temperature: this.state.temperature + 1
    });
  };

  decreaseTemp = () => {
    this.setState({
      temperature: this.state.temperature - 1
    });
  };

  render() {
    const brightness = this.state.isLit ? "lit" : "dark";

    return (
      <div className={`room ${brightness}`}>
        the room is {this.state.isLit ? "lit" : "dark"} and temperature is{" "}
        {this.state.temperature}º C {this.state.temperature < 0 ? "(brrr)" : ""}
        <br />
        <button onClick={this.flipLight}>flip light</button>
        <br />
        <button onClick={this.on}>turn on light</button>
        <button onClick={this.off}>turn off light</button>
        <br />
        <button onClick={this.increaseTemp}>+</button>
        <button onClick={this.decreaseTemp}>-</button>
      </div>
    );
  }
}

ReactDOM.render(<Room />, document.querySelector("#root"));
