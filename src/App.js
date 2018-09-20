import React, { Component } from "react";
import Hero from "./hero";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Hero
        firstLine={"Hi, I'm Issarapong Poesua."}
        secondLine={"I'm iOS Developer."}
      />
    );
  }
}

export default App;
