import React, { Component } from "react";

class Counter extends Component {
  // styles = {
  //   fontSize: 40,
  //   fontweight: "bold"
  // };

  // renderTags() {
  //   if (this.state.tags.length === 0) return "There are no tags in this array";

  //   return (
  //     <ul>
  //       {this.state.tags.map(tag => (
  //         <li>{tag}</li>
  //       ))}
  //     </ul>
  //   );
  // }
  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
  }
  componentDidMount() {
    console.log("Mounted oj");
  }

  render() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return (
      <React.Fragment>
        <div>
          <span style={{ fontSize: 70 }} className={this.colorBadge()}>
            {this.formatcount()}
          </span>
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary btn-sm"
          >
            Increments
          </button>
          <button
            className="btn btn-sm btn-danger m-2"
            onClick={() => this.props.onDelete(this.props.counter.id)}
          >
            Delete
          </button>
        </div>
      </React.Fragment>
    );
  }
  colorBadge() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
  formatcount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
