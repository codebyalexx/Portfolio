import {Component} from "react";

export default class Projects extends Component {
    render() {
        return <section className="projects container" id="projects">
            <article className="projects-header">
                <h2 className="projects-title">Projets</h2>
                <p className="projects-summary">Ici vous trouverez quelques uns de mes projets personnels et professionnels.</p>
            </article>
            <article className="projects-container">
                <div className="projects-item">
                    <div className="projects-cat">
                        <img src="../assets/Mac_Unosial.png" alt="Mac affichant le logo d'Unosial" className="projects-thumbnail"/>
                    </div>
                    <div className="projects-cat2">
                        <h3 className="projects-subtitle">Unosial <span className="tag">Projet Professionnel</span></h3>
                        <img src="../assets/Mac_Unosial.png" alt="Mac affichant le logo d'Unosial" className="projects-item-smallimage"/>
                        <p className="projects-paragraph">Je suis actuellement posté en tant que Développeur au coeur d'Unosial, un groupe de bénévoles situé principalement sur Discord qui propose divers services pour des projets et des communautés.</p>
                        <a href="https://unosial.com/" rel="noreferrer" target="_blank" className="btn projects-button">Visiter</a>
                    </div>
                </div>
                <div className="projects-item">
                    <div className="projects-cat">
                        <img src="../assets/Mac_Reservia.png" alt="Mac affichant le site web Reservia" className="projects-thumbnail"/>
                    </div>
                    <div className="projects-cat2">
                        <h3 className="projects-subtitle">Reservia <span className="tag">Projet de Formation</span></h3>
                        <img src="../assets/Mac_Reservia.png" alt="Mac affichant le site web Reservia" className="projects-item-smallimage"/>
                        <p className="projects-paragraph">Reservia est une page web statique d'un moteur d'hébergements / de logements. C'est la première intégration que j'ai réalisé au cours de ma formation OpenClassrooms.</p>
                        <a href="https://alexandrelg2022.github.io/Reservia/" rel="noreferrer" target="_blank" className="btn projects-button">Visiter</a>
                    </div>
                </div>
                <div className="projects-item">
                    <div className="projects-cat">
                        <img src="../assets/Mac_FishEye.png" alt="Mac affichant le site web FishEye" className="projects-thumbnail"/>
                    </div>
                    <div className="projects-cat2">
                        <h3 className="projects-subtitle">FishEye <span className="tag">Projet de Formation</span></h3>
                        <img src="../assets/Mac_FishEye.png" alt="Mac affichant le site web FishEye" className="projects-item-smallimage"/>
                        <p className="projects-paragraph">FishEye est un site web accessible et dynamique repertoriant différents photographes, leurs photos et leurs tarifs. C'est un projet que j'ai réalisé durant ma formation de A à Z.</p>
                        <a href="https://alexandrelg2022.github.io/FishEye/" rel="noreferrer" target="_blank" className="btn projects-button">Visiter</a>
                    </div>
                </div>
            </article>
        </section>
    }
}