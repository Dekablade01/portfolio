import React from "react";
import FullscreenHero from "./components/FullscreenHero";

class Wrapper extends React.Component {
  render() {
    return (
      <div id="wrapper">
        {}
        <FullscreenHero />
      </div>
    );
  }
}

export default Wrapper;
