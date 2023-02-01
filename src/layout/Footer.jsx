import {Component} from "react";
import githubIcon from "../assets/github.png";

export default class Footer extends Component {
    render() {
        return <footer className="footer container bg-black">
            <div className="footer-group">
                <div className="a">
                    <h2 className="footer-title">Alex Développement</h2>
                    <p className="footer-summary">Développeur Web Frontend qui conçoit des applications Web qui mènent le produit fini à son succès</p>
                </div>
                <div className="b">
                    <span className="footer-social">Social</span>
                    <a href="https://github.com/AlexandreLG2022" className="footer-social-link" target="_blank" rel="noreferrer">
                        <img src={githubIcon} alt="Icône de GitHub" className="footer-social-icon"/>
                    </a>
                </div>
            </div>
            <div className="footer-sep"></div>
            <p className="footer-line">© Copyright 2023. Made by <span>Alex Développement</span></p>
        </footer>
    }
}