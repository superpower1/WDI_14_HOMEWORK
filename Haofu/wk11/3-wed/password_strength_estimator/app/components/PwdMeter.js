import React from "react";

class PwdMeter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      strength: 0
    }
  }

  updatePwdStrength(e) {
    const pwd = e.target.value;
    let strength = 0;
    if (pwd.match(/[0-9]/)) {
      strength++;
    }
    if (pwd.match(/[a-z]/)) {
      strength++;
    }
    if (pwd.match(/[A-Z]/)) {
      strength++;
    }
    if (pwd.match(/[^a-zA-Z\d\s:]/)) {
      strength++;
    }
    if (pwd.length >= 8) {
      strength++;
    }
    this.setState({strength});

  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.updatePwdStrength.bind(this)}/>
        <span>{this.state.strength}</span>
      </div>
    );
  }
}

export default PwdMeter;
