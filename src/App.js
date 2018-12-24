import React from "react";

import Portfolio from "./components/portfolio/Portfolio"
import "./App.css";
import "./css/font.css"

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

class App extends React.Component {
  render() {
    return <Portfolio />
  }
}

export default App;