import React from "react";
import "./index.css";

const component = props => {
  return (
    <div id="fullscreen-hero" className="home-hero">
      <div className="hero-container">
        <div className="hero-content">
          <a href="#" className="home-logo">
            {/* <img src="resume-portfolio-files/logomark.png"> */}
          </a>
          <h1 className="cd-headline letters type">
            <span>{props.firstLine}</span>
            <br />
            <span>{props.secondLine}</span>
            <br />
          </h1>
          <div>
            <a
              href="mailto:dekablade01@gmail.com"
              className="button button-ghost"
            >
              Yes, I\'m Available For Hire
            </a>
          </div>
          <div className="learn-more">
            <a href="#me">
              Learn more about what I do
              <br />
              <i className="fa fa-chevron-down" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default component;
