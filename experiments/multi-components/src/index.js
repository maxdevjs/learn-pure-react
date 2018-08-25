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
    this.setState({
      count: this.state.count + c
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
          <Button sign="-" getCount={this.getCount} count={this.state.count} />
          <strong>{this.state.count}</strong>
          <Button sign="+" getCount={this.getCount} count={this.state.count} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App title="Counter" />, document.querySelector("#root"));
