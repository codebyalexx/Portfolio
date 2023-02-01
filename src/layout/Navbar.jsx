import {Component} from "react";
import icon from '../assets/favicon.png';

export default class Navbar extends Component {
    constructor(props) {
        super(props);

        /* It's defining the state */
        this.state = {
            navbar: false
        }

        /* It's binding the context to the methods */
        this.toggleNavbar = this.toggleNavbar.bind(this)
    }

    /**
     * Toggle the mobile navbar
     */
    toggleNavbar() {
        this.setState(() => {
            return {
                navbar: !this.state.navbar
            }
        })
    }

    render() {
        return <nav className="navbar">
            <div className="navbar-brand">
                <img src={icon} alt="Icône d'Alex Développement" className="navbar-brand-icon" />
                <span className="navbar-brand-title">Alex Développement</span>
            </div>
            <ul className="navbar-menu navbar-large">
                <li className="navbar-item">
                    <a href="#home" className="navbar-link">Accueil</a>
                </li>
                <li className="navbar-item">
                    <a href="#about-me" className="navbar-link">A propos</a>
                </li>
                <li className="navbar-item">
                    <a href="#projects" className="navbar-link">Projets</a>
                </li>
                <li className="navbar-item">
                    <a href="#contact" className="navbar-link">Contact</a>
                </li>
            </ul>
            <div className="navbar-small">
                <a href="#!" id="navbar-toggler" className="navbar-toggler" onClick={this.toggleNavbar}>
                    <img src="../assets/Burger.png" alt="" className="navbar-toggler-image" />
                </a>
                <ul className="navbar-menu" style={{
                    display: this.state.navbar ? "block" : "none"
                }}>
                    <li className="navbar-item">
                        <a href="#home" className="navbar-link" onClick={this.toggleNavbar}>Accueil</a>
                    </li>
                    <li className="navbar-item">
                        <a href="#about-me" className="navbar-link" onClick={this.toggleNavbar}>A propos</a>
                    </li>
                    <li className="navbar-item">
                        <a href="#projects" className="navbar-link" onClick={this.toggleNavbar}>Projets</a>
                    </li>
                    <li className="navbar-item">
                        <a href="#contact" className="navbar-link" onClick={this.toggleNavbar}>Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    }
}