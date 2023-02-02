import {Component} from "react";
import githubIcon from "../assets/github.png";
import discordIcon from "../assets/discord.png";
import twitterIcon from "../assets/twitter.png";
import t from '../utils/translate';

export default class Hero extends Component {
    render() {
        return <section className="hero bg-shapes">
            <article className="hero-content">
                <h1 className="hero-title">{t`Je suis Alex Développement`}</h1>
            </article>
            <article className="hero-info">
                <p className="hero-summary">{t`Je suis un Développeur Web Frontend qui conçoit des applications Web qui mènent le produit fini à son succès`}</p>
            </article>
            <article className="hero-cta">
                <a href="#projects" className="btn hero-projs-btn">{t`Projets`}</a>
            </article>
            <aside className="hero-socials">
                <a href="https://github.com/AlexandreLG2022" className="hero-socials-link" target="_blank" rel="noreferrer">
                    <img src={githubIcon} alt="Icône de GitHub" className="hero-socials-icon"/>
                </a>
                <a href="https://discord.gg/E6CTED7p6K" className="hero-socials-link" target="_blank" rel="noreferrer">
                    <img src={discordIcon} alt="Icône de Discord" className="hero-socials-icon"/>
                </a>
                <a href="https://twitter.com/AlexLC_TV" className="hero-socials-link" target="_blank" rel="noreferrer">
                    <img src={twitterIcon} alt="Icône de Twitter" className="hero-socials-icon"/>
                </a>
            </aside>
            <div className="hero-mouse-container">
                <div className="hero-mouse"></div>
            </div>
        </section>
    }
}