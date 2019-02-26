import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 5,
    Name: "Anieze collins"
  };
  render() {
    return (
      <React.Fragment>
        <span>{this.state.Name}</span>
        <br />
        <span>{this.state.count}</span>
        <button>Increments</button>
        <h2>Welcome hom to the land of the living</h2>
      </React.Fragment>
    );
  }

  formatcount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
