import {Component} from "react";

export default class Alerts extends Component {
    constructor(props) {
        super(props);

        /* It's defining the initial state */
        this.state = {
            alerts: []
        }
    }

    /**
     * Create an alert
     * @param message {String} The alert message
     * @param type {String} The alert type
     */
    alert(message, type) {
        /* It's adding the alert to the state */
        this.setState(() => {
            return {
                alerts: [...this.state.alerts, {message, type}]
            }
        })

        /* It's clearing the alert from the state after delay */
        setTimeout(() => {
            this.setState(() => {
                return {
                    alerts: this.state.alerts.filter((alert) => alert.message !== message && alert.type !== type)
                }
            })
        }, 7000)
    }

    render() {
        const {alerts} = this.state;

        return <div className="alert-container">
            {alerts.map((alert) => <div className={"alert alert-" + alert.type} key="x">{alert.message}</div>)}
        </div>
    }
}