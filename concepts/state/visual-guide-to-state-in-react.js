// https://daveceddia.com/visual-guide-to-state-in-react

import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    // Must initialize state!!!
    this.state = { count: 0 };
  }

  add() {
    // Increment the count when the button is clicked
    this.setState(
      {
        count: this.state.count + 1
      },
      function() {
        // setState is asynchronous. This function gets called when it is finished
        console.log("count", this.state.count);
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
        <div className="app">
          <div className="click-count">Button presses: {this.state.count}</div>
          <button onClick={this.add.bind(this)}>Add one</button>
          <button onClick={this.subtract.bind(this)}>Subtract one</button>
        </div>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
