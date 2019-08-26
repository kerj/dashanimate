import React, { Component } from "react";
import * as d3 from "d3";

class Ball extends React.PureComponent {
  constructor(props) {
    super();
    this.state = {
      x: props.x,
      y: props.y
    };
  }

  circleRef = React.createRef();

  componentDidUpdate() {
    let el = d3.select(this.circleRef.current);

    el.transition()
      .duration(2000)
      .ease(d3.easeBounceOut)
      .attr("cx", this.props.x)
      .attr("fill", this.getRandomColor)
      .attr("cy", this.props.y)
      .on("end", () =>
        this.setState({
          x:  this.props.x,
          y: this.props.y
        })
      );
  }

  getRandomColor = () => {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }


  render() {
    const { x } = this.state;
    const { y } = this.state;

    return <circle r="20" cx={x} cy={y} ref={this.circleRef} />;
  }
}

export default Ball;
