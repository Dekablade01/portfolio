import React from "react"
import Hero from "./Hero/Hero"

class Portfolio extends React.Component {

    state = { content: undefined }

    componentDidMount() {
        let url = "https://gist.githubusercontent.com/Dekablade01/299c7ae999df7588dbc7626656ba261c/raw/18a07099c4194e522e7596205cf07939f3ade413/cv.json"
        fetch(url)
            .then(response => response.json())
            .then(data => { this.setState({ content: data }) })
    }

    render() {

        if (this.state.content === undefined) {
            return <div />
        }

        return <Hero props={this.state.content.profile} />
    }
}
export default Portfolio;