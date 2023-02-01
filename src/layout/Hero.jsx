import {Component} from "react";
import githubIcon from "../assets/github.png";

export default class Hero extends Component {
    render() {
        return <section className="hero bg-shapes">
            <article className="hero-content">
                <h1 className="hero-title">Je suis Alex Développement</h1>
            </article>
            <article className="hero-info">
                <p className="hero-summary">Je suis un Développeur Web Frontend qui conçoit des applications Web qui mènent le produit fini à son succès</p>
            </article>
            <article className="hero-cta">
                <a href="#projects" className="btn hero-projs-btn">Projets</a>
            </article>
            <aside className="hero-socials">
                <a href="https://github.com/AlexandreLG2022" className="hero-socials-link" target="_blank" rel="noreferrer">
                    <img src={githubIcon} alt="Icône de GitHub" className="hero-socials-icon"/>
                </a>
            </aside>
            <div className="hero-mouse-container">
                <div className="hero-mouse"></div>
            </div>
        </section>
    }
}