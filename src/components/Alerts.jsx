import React, { Component } from 'react';

export default class Alerts extends Component {
  constructor(props) {
    super(props);

    /* It's defining the initial state */
    this.state = {
      alerts: [],
    };
  }

  /**
     * Create an alert
     * @param message {String} The alert message
     * @param type {String} The alert type
     */
  // eslint-disable-next-line react/no-unused-class-component-methods
  alert(message, type) {
    const { alerts } = this.state;
    /* It's adding the alert to the state */
    this.setState(() => ({
      alerts: [...alerts, { message, type }],
    }));

    /* Clear the alert after 7000 ms */
    this.timeoutAlert({
      message,
      type,
    });
  }

  /**
     * Delete alert from state after x delay
     * @param message {String} The alert message
     * @param type {String} The alert type
     * @param timeout {Number} The timeout suppression delay in ms
     */
  timeoutAlert({
    message,
    type,
    timeout = 7000,
  }) {
    /* It's clearing the alert from the state after delay */
    setTimeout(() => {
      const { alerts } = this.state;
      this.setState(() => ({
        alerts: alerts.filter((alert) => alert.message !== message && alert.type !== type),
      }));
    }, timeout);
  }

  render() {
    const { alerts } = this.state;

    return (
      <div className="alert-container">
        {alerts.map((alert) => <div className={`alert alert-${alert.type}`} key="x">{alert.message}</div>)}
      </div>
    );
  }
}
