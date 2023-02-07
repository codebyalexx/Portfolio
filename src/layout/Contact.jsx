import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import t from '../utils/translate';
import SessionManager from '../utils/SessionManager';

export default class Contact extends Component {
  constructor(props) {
    super(props);

    /* It's defining the default state */
    this.state = {
      errors: [],
      name: '',
      email: '',
      message: '',
      sent: false,
      loading: false,
      once: false,
      delay: 0,
    };

    /* It's binding the context to the local methods */
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.tick = this.tick.bind(this);

    /* Check forms delay */
    const contactDelay = localStorage.getItem('contact_delay');
    if (contactDelay) {
      /* It's getting the dates times */
      const contactDelayTime = new Date(Number.parseInt(contactDelay, 10)).getTime();
      const localTime = new Date().getTime();
      /* Update the delay in state if needed */
      if (contactDelayTime > localTime) {
        this.state.delay = Math.round(
          (contactDelayTime - localTime) / 1000,
        );
      }
    }
  }

  /**
   * This is executed at component loading
   */
  componentDidMount() {
    this.timer = setInterval(this.tick, 1000);
  }

  /**
   * This is executed at component suppression
   */
  componentWillUnmount() {
    /* It's clearing the interval */
    window.clearInterval(this.timer);
  }

  /**
   * It's handling the form submitting failure (to API)
   */
  handleFormFailure(response) {
    /* It's re-setting the loading state */
    this.setState(() => ({
      loading: false,
      sent: false,
    }));

    /* It's checking if the error comes from delay */
    if (response.includes('DELAY')) {
      /* Get delay from api response & update it on the local storage/state */
      const d = response.split(';')[1];
      localStorage.setItem('contact_delay', d);
      this.setState(() => ({
        delay: d,
      }));
      /* It's sending the alert error */
      return this.alert(t`Vous avez déjà utilisé le formulaire trop récemment, veuillez réessayer utlérieurement`, 'error');
    }
    /* It's sending the alert error */
    return this.alert(t`Une erreur est survenue lors de l'envoi du formulaire`, 'error');
  }

  /**
   * It's handling the form change
   * @param e {Event} the change event
   */
  handleChange(e) {
    /* It's editing the state depending on the element name */
    this.setState(() => ({
      [e.target.name]: e.target.value,
    }));

    /* If form has already been submitted, check form validity on change */
    const { once } = this.state;
    if (once) this.checkForm();
  }

  /**
   * It's handling the form submitting
   */
  handleSubmit() {
    /* It's checking if the forms has already been sent & first submitting */
    const { sent, delay } = this.state;
    if (sent) return;
    if (delay > 0) return;
    this.setState(() => ({
      once: true,
    }));

    /* It's checking if the form is valid */
    if (!this.checkForm()) return;

    /* It's setting the loading mode to true */
    this.setState(() => ({
      loading: true,
    }));

    /* It's sending the form to the API */
    this.sendForm();
  }

  /**
     * Get a specific error from field
     * @param field {String} The field name
     * @return {String} returns the error message or null if undefined
     * @nullable
     */
  getError(field) {
    /* It's trynna get the error from the errors in the state */
    const { errors } = this.state;
    const targetError = errors.find((err) => err.field === field);

    /* It's returning the error */
    return targetError?.message || null;
  }

  /**
     * Show an error for a field
     * @param errors {Array<Object>} The list of the errors Object
     */
  defineErrors(errors) {
    /* It's adding the error to the state */
    this.setState(() => ({
      errors,
    }));
  }

  /**
     * Clear all the errors
     */
  clearErrors() {
    this.setState(() => ({
      errors: [],
    }));
  }

  /**
     * It's sending alert through the alert props
     * @param message
     * @param type
     */
  alert(message, type = 'primary') {
    const { alerts } = this.props;
    alerts.current.alert(message, type);
  }

  /**
   * This function is running every seconds
   */
  tick() {
    /* It's decrementing the delay every 1s */
    const { delay } = this.state;
    if (delay > 0) {
      this.setState(() => ({
        delay: delay - 1,
      }));
    }
  }

  /**
     * It's checking the form validity
     * @return {Boolean} Returns true if the forms is valid
     */
  checkForm() {
    /* It's storing the form fields data & the final errors array */
    const { name, email, message } = this.state;
    const finalErrors = [];

    /* It's clearing the errors */
    this.clearErrors();

    /* It's checking the name field */
    if (name.length < 3) {
      finalErrors.push({
        field: 'name',
        message: t`Ce champ doit continir au moins 3 caractères.`,
      });
    }

    /* It's checking the email validity */
    if (email === '' || !email.match(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/)) {
      finalErrors.push({
        field: 'email',
        message: t`Cette adresse email n\'est pas valide.`,
      });
    }

    /* It's checking the message field */
    if (message.length < 20) {
      finalErrors.push({
        field: 'message',
        message: t`Ce champ doit contenir au moins 20 caractères.`,
      });
    }

    /* It's updating the errors in the state */
    this.defineErrors(finalErrors);

    /* It's returning if there are errors */
    return finalErrors.length === 0;
  }

  /**
     * It's sending the form to the API
     */
  sendForm() {
    /* It's submitting the contact form to the API */
    const { name, email, message } = this.state;
    axios.post('https://api0.alex-development.eu/message', {
      name,
      email,
      message,
      sessionId: new SessionManager().sessionId,
    }).then((res) => {
      /* It's checking if the response text is the good one */
      if (res.data !== 'yes') return this.handleFormFailure(res.data);

      /* It's defining the state to  sent */
      this.setState(() => ({
        loading: false,
        sent: true,
      }));

      /* It's putting the delay in the local storage */
      let d = new Date();
      d = new Date(d.getTime() + (3600 * 1000));
      localStorage.setItem('contact_delay', d.getTime().toString());

      /* It's sending the success alert */
      return this.alert(t`Votre message a été envoyé avec succès`, 'success');
    })
    /* It's calling handleFormFailure if the request fail */
      .catch(() => this.handleFormFailure());
  }

  render() {
    /* It's getting the contact form infos from state */
    const {
      name, email, message, sent, loading, delay,
    } = this.state;

    return (
      <section className="contact container bg-gray" id="contact">
        <article className="contact-header">
          <h2 className="contact-title">{t`Me Contacter`}</h2>
          <p className="contact-summary">
            {t`N'hésitez pas à me contacter via le formulaire ci-dessous pour prendre une prise de contact rapidement`}
          </p>
        </article>
        <article className="contact-form">
          <div className={`contact-form-group${this.getError('name') ? ' error' : ''}`}>
            <label htmlFor="name" className="contact-form-label">{t`Nom`}</label>
            <input type="text" id="name" value={name} onChange={this.handleChange} name="name" className="contact-form-input" placeholder={t`Entrez Votre Nom`} />
            {this.getError('name') ? <p className="contact-form-error">{this.getError('name')}</p> : ''}
          </div>
          <div className={`contact-form-group${this.getError('email') ? ' error' : ''}`}>
            <label htmlFor="email" className="contact-form-label">{t`Email`}</label>
            <input type="email" id="email" value={email} onChange={this.handleChange} name="email" className="contact-form-input" placeholder={t`Entrez Votre Email`} />
            {this.getError('email') ? <p className="contact-form-error">{this.getError('email')}</p> : ''}
          </div>
          <div className={`contact-form-group${this.getError('message') ? ' error' : ''}`}>
            <label htmlFor="message" className="contact-form-label">{t`Message`}</label>
            <textarea type="text" id="message" value={message} onChange={this.handleChange} name="message" className="contact-form-input contact-form-input--textarea" placeholder={t`Entrez Votre Message`} rows="8" />
            {this.getError('message') ? <p className="contact-form-error">{this.getError('message')}</p> : ''}
          </div>
          <a href="#!" className={`btn contact-form-button${(loading || sent || delay > 0) ? ' contact-form-button--disabled' : ''}`} id="send" onClick={this.handleSubmit}>
            {/* eslint-disable-next-line no-nested-ternary */}
            {loading ? t`Envoie en cours...` : (delay > 0) ? `${delay} ${t`secondes`}` : t`Envoyer`}
          </a>
        </article>
      </section>
    );
  }
}

Contact.defaultProps = {
  alerts: {
    current: {
      alert() {
        return true;
      },
    },
  },
};

Contact.propTypes = {
  alerts: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
};
