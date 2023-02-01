/* Import Modules */
import {Component, createRef} from "react";

/* Imports React Components */
import Navbar from "../layout/Navbar";
import Hero from "../layout/Hero";
import AboutMe from "../layout/AboutMe";
import Projects from "../layout/Projects";
import Footer from "../layout/Footer";
import Contact from "../layout/Contact";
import Alerts from "../components/Alerts";

/**
 * The Application Component
 */
export default class App extends Component {
    constructor(props) {
        super(props);

        /* It's creating a reference to alerts */
        this.alerts = createRef();
    }

    render() {
        return <div className="app">
            <Alerts ref={this.alerts} />
            <header>
                <Navbar/>
            </header>
            <main>
                <Hero />
                <AboutMe />
                <Projects />
                <Contact alerts={this.alerts} />
            </main>
            <Footer />
        </div>
    }
}