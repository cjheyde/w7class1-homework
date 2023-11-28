import React, { Component } from "react";
class ClickCounterClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  handleClick = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };
  render() {
    return (
      <div className="blue">
        <h2>Click Counter - Class Component</h2>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    );
  }
}

export default ClickCounterClass;
