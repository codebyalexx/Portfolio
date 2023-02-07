import React from 'react';
import t from '../utils/translate';

export default function AboutMe() {
  return (
    <section className="about-me container bg-gray" id="about-me">
      <article className="about-me-header">
        <h2 className="about-me-title">{t`A propos`}</h2>
        <p className="about-me-summary">{t`Ici vous trouverez plus d'informations à propos de moi, ce que je fais, et mes compétences actuelles de programmation informatique.`}</p>
      </article>
      <div className="about-me-group">
        <article className="about-me-intro">
          <h3 className="about-me-subtitle">{t`En apprendre plus !`}</h3>
          <p className="about-me-paragraph">
            {t`Je suis un Développeur Web Frontend qui conçoit des applications Web qui mènent le produit fini à son succès. Regardez mes traveaux dans la séction Projets.`}
          </p>
          <p className="about-me-paragraph">
            {t`J'ai commencé le Développement Web à l'âge de 12 ans par passion, ce qui m'a permis de forger des compétences solides au fil des années passées.`}
          </p>
          <p className="about-me-paragraph">
            {t`Je suis ouvert aux Opportunitées de travail où je pourrais contribuer, apprendre et grandir. Si vous avez un projet qui correspond à mes compétences et mon expérience, alors n'hésitez pas à me contacter.`}
          </p>
          <a href="#contact" className="btn about-me-button">{t`Me Contacter`}</a>
        </article>
        <article className="about-me-skills">
          <h3 className="about-me-subtitle">{t`Mes Compétences`}</h3>
          <ul className="about-me-skills-list">
            <li className="about-me-skills-item">HTML</li>
            <li className="about-me-skills-item">CSS</li>
            <li className="about-me-skills-item">JavaScript</li>
            <li className="about-me-skills-item">React</li>
            <li className="about-me-skills-item">Electron</li>
            <li className="about-me-skills-item">Express.JS</li>
            <li className="about-me-skills-item">SASS</li>
            <li className="about-me-skills-item">Git</li>
            <li className="about-me-skills-item">GitHub</li>
            <li className="about-me-skills-item">Responsive Design</li>
            <li className="about-me-skills-item">SEO</li>
            <li className="about-me-skills-item">Terminal</li>
            <li className="about-me-skills-item">MySQL</li>
          </ul>
        </article>
      </div>
    </section>
  );
}
