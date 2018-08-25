import React from "react";

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: this.props.count };
    this.getCount = this.props.getCount;
    this.add = this.add.bind(this);
    this.subtract = this.subtract.bind(this);
  }

  add() {
    this.setState(
      {
        count: this.state.count + 1
      },
      function() {
        // setState is asynchronous. This function gets called when it is finished
        this.getCount(1);
      }
    );
  }

  subtract() {
    this.setState(
      {
        count: this.state.count - 1
      },
      function() {
        // setState is asynchronous. This function gets called when it is finished
        this.getCount(-1);
      }
    );
  }

  render() {
    return (
      <React.Fragment>
        <button
          onClick={this.props.sign === "+" ? this.add : this.subtract}
          className="button"
        >
          {this.props.sign}
        </button>
      </React.Fragment>
    );
  }
}
