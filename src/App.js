import React, { Component } from 'react';
import Ball from './Ball';


export default class App extends Component {
  state = {
    ballX: true,
    ballY: false
  };


  ballJump = () =>
    this.setState({
      ballX: !this.state.ballX,
      ballY: !this.state.ballY
    });
  
  loopAnimate = () => {
    setInterval(this.ballJump, 3000);
  }

  

  render() {
    const { ballX } = this.state;
    const { ballY } = this.state;
    
    return (
      <div>
        <svg style={{ width: "1300px", height: "600px" }} onClick={this.loopAnimate}>
          <Ball x={ballX ? 20 : 1280} y= {ballY ? 560 : 100}/>
          <Ball x={ballX ? 60 : 1240} y= {ballY ? 100 : 580}/>
          <Ball x={ballX ? 1280 : 20} y= {ballY ? 580 : 80}/>
          <Ball x={ballX ? 1240 : 60} y= {ballY ? 60 : 400}/>
          <Ball x={ballX ? 80 : 1000} y= {ballY ? 500 : 200}/>
          <Ball x={ballX ? 20 : 980} y= {ballY ? 400 : 60}/>
          <Ball x={ballX ? 850 : 75} y= {ballY ? 300 : 120}/>
          <Ball x={ballX ? 1111 : 95} y= {ballY ? 80 : 375}/>
          <Ball x={ballX ? 65 : 350} y= {ballY ? 200 : 50}/>
          <Ball x={ballX ? 90 : 750} y= {ballY ? 450 : 280}/>
          <Ball x={ballX ? 1200 : 60} y= {ballY ? 380 : 100}/>
          <Ball x={ballX ? 650 : 25} y= {ballY ? 80 : 190}/>
        </svg>
      </div>
    );
  }
}
