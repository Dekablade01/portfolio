import React from "react"
import Hero from "./Hero/Hero"
import Info from "../../info.json"

class Portfolio extends React.Component {
    render() {
        return <Hero props={Info.profile} />
    }
}
export default Portfolio;