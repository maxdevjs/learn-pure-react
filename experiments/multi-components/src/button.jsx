import React from "react";

export default class Button extends React.Component {
  constructor(props) {
    super(props);

    this.state = { count: 0 };
  }

  add() {
    this.setState(
      {
        count: this.state.count + 1
      },
      function() {
        // setState is asynchronous. This function gets called when it is finished
        this.props.getCount(this.state.count);
        // this.props.handleClick();
      }
    );
  }

  subtract() {
    this.setState({
      count: this.state.count - 1
    });
  }

  render() {
    return (
      <React.Fragment>
        <button onClick={this.add.bind(this)} className="button">
          {this.props.sign}
        </button>
      </React.Fragment>
    );
  }
}
