import React from "react";
import ReactDOM from "react-dom";

import Button from "./button.jsx";

import "./index.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { count: 0 };

    // https://reactjs.org/docs/faq-functions.html
    this.getCount = this.getCount.bind(this);
    // this.handleClick = this.handleClick.bind(this);
  }

  getCount = c => {
    console.log("caal");
    this.setState({
      count: c
    });
  };

  handleClick() {
    console.log("Click happened");
  }

  render() {
    return (
      <div className="app">
        <h3>{this.props.title}</h3>
        <div>
          <Button sign="-" onClick={this.getCount} />
          <strong>{this.state.count}</strong>
          <Button sign="+" />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App title="Counter" />, document.querySelector("#root"));
