import React from "react";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { red: 0, green: 0, blue: 0 };
  }

  handleRed = (event) => {
    this.setState({
      red: event.target.value
    });
  };

  handleGreen = (event) => {
    this.setState({
      green: event.target.value
    });
  };

  handleBlue = (event) => {
    this.setState({
      blue: event.target.value
    });
  };

  render() {
    return (
      <div
        style={{
          backgroundColor:
            "rgb(" +
            this.state.red +
            "," +
            this.state.green +
            "," +
            this.state.blue +
            ")",
          height: "100vh"
        }}
      >
        <div style={{
          margin: "50px",
          padding:"10px",
          backgroundColor: "white",
          borderRadius: "20px",
        }}>
          <p style={{fontFamily:"arial", textAlign:"center", fontSize:"20px"}}><b>Color Picker</b></p>
        Red :{" "}
        <input
          type="range"
          value={this.state.red}
          onChange={this.handleRed}
        ></input>
        <br />
        Green :{" "}
        <input
          type="range"
          value={this.state.green}
          onChange={this.handleGreen}
        ></input>
        <br />
        Blue :{" "}
        <input
          type="range"
          value={this.state.blue}
          onChange={this.handleBlue}
        ></input>
        </div>
      </div>
    );
  }
}
