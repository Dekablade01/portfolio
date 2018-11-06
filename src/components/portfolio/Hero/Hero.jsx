import React from "react"
import "./portfolio.css";

const component = (profile) => {
    return (
        <div id="fullscreen-hero" className="home-hero">
            <div className="hero-container">
                <div className="hero-content">
                    <h1 className="cd-headline letters type">
                        <span>Hi, I'm {profile.props.name}.</span>
                        <br />
                        <span>I'm {profile.props.position}.</span>
                        <br />
                    </h1>
                    <div className="page-scroll">
                        <a href={"mailto:" + profile.props.email} className="button button-ghost">Yes, I'm Available For Hire</a>
                    </div>
                    <div className="page-scroll learn-more">
                        <a href="#me">Learn more about what I do<br /><i className="fa fa-chevron-down"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default component