import React, { Component } from "react";

class Slider extends Component {
  render() {
    return (
      <div className="slidecontainer">
        <input
          type="range"
          min={this.props.min}
          max={this.props.max}
          value={this.props.value}
          className="slider"
          onChange={this.props.onChange}
        />
      </div>
    );
  }
}

export default Slider;
