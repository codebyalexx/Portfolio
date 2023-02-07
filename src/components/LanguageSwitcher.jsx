import React, { Component } from 'react';
import { defineCurrentLanguage, getCurrentLanguage } from '../utils/translate';

export default class LanguageSwitcher extends Component {
  static availableLanguages = [
    'fr',
    'en',
  ];

  constructor(props) {
    super(props);

    /* It's defining the default state */
    this.state = {
      language: getCurrentLanguage(),
      expanded: false,
    };

    /* It's binding the context to the methods */
    this.toggleSwitcher = this.toggleSwitcher.bind(this);
  }

  /**
     * It's handling the language change event
     * @param l {String} The new language code
     */
  handleChange(l) {
    /* It's updating the language in the local storage */
    defineCurrentLanguage(l);

    /* It's updating the language in the state */
    this.setState(() => ({
      language: l,
    }));

    /* It's refreshing the page to update the language */
    window.location.reload();
  }

  /**
     * It's toggling the language switcher
     */
  toggleSwitcher() {
    const { expanded } = this.state;
    this.setState(() => ({
      expanded: !expanded,
    }));
  }

  render() {
    const { language, expanded } = this.state;

    return (
    // eslint-disable-next-line
      <li className="navbar-item navbar-item--language" onClick={this.toggleSwitcher}>
        <img src={`assets/flags/${language}.png`} alt={language} />
        {expanded ? (
          <div className="switcher">
            {LanguageSwitcher.availableLanguages.map((lang) => ((lang === language) ? '' : (
            // eslint-disable-next-line
              <div className="switcher-item" data-language={lang} onClick={() => this.handleChange(lang)} key={lang}>
                <img src={`assets/flags/${lang}.png`} alt={lang} />
              </div>
            )))}
          </div>
        ) : ''}
      </li>
    );
  }
}
