import { Component } from "react";

export default class WalkingSprite extends Component {
  state = {
    frame: 0,
  };

  timerID = null;

  updateFrame() {
    const f = this.state.frame == 3 ? 0 : this.state.frame + 1;
    this.setState({
      frame: f,
    });
  }

  componentDidMount() {
    if (this.timerID === null) {
      this.timerID = setInterval(this.updateFrame.bind(this), 400);
      this.updateFrame();
    }
  }

  componentWillUnmount() {
    if (this.timerID !== null) {
      clearInterval(this.timerID);
      this.timerID = null;
    }
  }

  render() {
    const frames = [
      <img src="./assets/Icon1.png" width="75" height="75" title="Me" />,
      <img src="./assets/Icon.png" width="75" height="75" title="Me" />,
      <img src="./assets/Icon2.png" width="75" height="75" title="Me" />,
    ];
    return <>{frames[this.state.frame == 3 ? 1 : this.state.frame]}</>;
  }
}
