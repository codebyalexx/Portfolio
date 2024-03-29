import React from 'react';
import githubIcon from '../assets/github.png';
import discordIcon from '../assets/discord.png';
import twitterIcon from '../assets/twitter.png';
import t from '../utils/translate';

export default function Footer() {
  return (
    <footer className="footer container bg-black">
      <div className="footer-group">
        <div className="a">
          <h2 className="footer-title">{t`Alex Développement`}</h2>
          <p className="footer-summary">{t`Développeur Web Frontend qui conçoit des applications Web qui mènent le produit fini à son succès`}</p>
        </div>
        <div className="b">
          <span className="footer-social">Social</span>
          <a href="https://github.com/AlexandreLG2022" className="footer-social-link" target="_blank" rel="noreferrer">
            <img src={githubIcon} alt="Icône de GitHub" className="footer-social-icon" />
          </a>
          <a href="https://discord.gg/E6CTED7p6K" className="footer-social-link" target="_blank" rel="noreferrer">
            <img src={discordIcon} alt="Icône de Discord" className="footer-social-icon" />
          </a>
          <a href="https://twitter.com/AlexLC_TV" className="footer-social-link" target="_blank" rel="noreferrer">
            <img src={twitterIcon} alt="Icône de Twitter" className="footer-social-icon" />
          </a>
        </div>
      </div>
      <div className="footer-sep" />
      <p className="footer-line">
        © Copyright 2023. Made by
        <span>{t`Alex Développement`}</span>
      </p>
    </footer>
  );
}
