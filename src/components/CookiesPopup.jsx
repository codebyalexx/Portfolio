import React, { Component } from 'react';
import cookieImage from '../assets/cookies.png';
import t from '../utils/translate';

export default class CookiesPopup extends Component {
  /**
   * Check if the cookies has already been accepted
   * @return {boolean} Returns true if cookies are accepted, false if not
   */
  static isAccepted() {
    return localStorage.getItem('cookies-accept') !== null;
  }

  constructor(props) {
    super(props);

    /* It's defining the default state */
    this.state = {
      show: !CookiesPopup.isAccepted(),
    };

    /* It's binding the context to the methods */
    this.accept = this.accept.bind(this);
  }

  /**
     * Close the popup & accept the cookies
     */
  accept() {
    /* It's saving the user cookies choice in the localstorage */
    localStorage.setItem('cookies-accept', 'OK');

    /* It's hiding the popup */
    this.setState(() => ({
      show: false,
    }));
  }

  render() {
    const { show } = this.state;
    return (
      <div className="cookies" style={{ display: show ? 'flex' : 'none' }}>
        <img src={cookieImage} alt="Cookie icon" className="cookies-icon" />
        <p className="cookies-caption">{t`Ce site internet utilise les cookies pour son bon fonctionnement.`}</p>
        <button type="button" className="cookies-close" onClick={this.accept}>{t`Fermer`}</button>
      </div>
    );
  }
}
