import {Component} from "react";
import icon from '../assets/favicon.png';
import t from '../utils/translate';
import LanguageSwitcher from "../components/LanguageSwitcher";

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
                <span className="navbar-brand-title">{t`Alex Développement`}</span>
            </div>
            <ul className="navbar-menu navbar-large">
                <li className="navbar-item">
                    <a href="#home" className="navbar-link">{t`Accueil`}</a>
                </li>
                <li className="navbar-item">
                    <a href="#about-me" className="navbar-link">{t`A propos`}</a>
                </li>
                <li className="navbar-item">
                    <a href="#projects" className="navbar-link">{t`Projets`}</a>
                </li>
                <li className="navbar-item">
                    <a href="#contact" className="navbar-link">{t`Contact`}</a>
                </li>
                <LanguageSwitcher />
            </ul>
            <div className="navbar-small">
                <a href="#!" id="navbar-toggler" className="navbar-toggler" onClick={this.toggleNavbar}>
                    <img src="../assets/Burger.png" alt="" className="navbar-toggler-image" />
                </a>
                <ul className="navbar-menu" style={{
                    display: this.state.navbar ? "block" : "none"
                }}>
                    <li className="navbar-item">
                        <a href="#home" className="navbar-link" onClick={this.toggleNavbar}>{t`Accueil`}</a>
                    </li>
                    <li className="navbar-item">
                        <a href="#about-me" className="navbar-link" onClick={this.toggleNavbar}>{t`A propos`}</a>
                    </li>
                    <li className="navbar-item">
                        <a href="#projects" className="navbar-link" onClick={this.toggleNavbar}>{t`Projets`}</a>
                    </li>
                    <li className="navbar-item">
                        <a href="#contact" className="navbar-link" onClick={this.toggleNavbar}>{t`Contact`}</a>
                    </li>
                    <LanguageSwitcher />
                </ul>
            </div>
        </nav>
    }
}