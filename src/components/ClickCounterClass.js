import React, { Component } from "react";
class ClickCounterClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleClickExclude = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  };

  handleClickAdd = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  errorMessage = () => {
    alert("Count cannot be negative.")
  }

  render() {
    return (
      <div className="blue">
        <h2>Click Counter - Class Component</h2>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleClickAdd}>Click Me to Add</button>
        <button
          onClick={
            this.state.count !== 0 ? (
              this.handleClickExclude
            ) :
            (
              this.errorMessage
            )
          }
        >
          Click Me to Exclude
        </button>
      </div>
    );
  }
}

export default ClickCounterClass;
