import {Component} from "react";

export default class ThemeToggler extends Component {
    /**
     * The ThemeToggler constructor
     * @param props {Props} the component props
     */
    constructor(props) {
        super(props);

        /* It's defining the initial state */
        this.state = {
            theme: localStorage.getItem('theme') || 'day'
        };

        /* It's binding the context to the methods */
        this.handleChange = this.handleChange.bind(this);

        /* It's updating the theme at loading */
        this.setTheme(this.state.theme);
    }

    /**
     * It's handling the theme toggler click
     * @param e {Event} The event object
     */
    handleChange(e) {
        /* It's determining the new theme */
        const checked = e.target.checked
        const newTheme = checked ? 'night' : 'day'

        /* It's defining the new theme on the state */
        this.setState(() => {
            return {
                theme: newTheme
            }
        });

        /* It's defining the theme in the local storage */
        localStorage.setItem('theme', newTheme);

        /* It's updating the theme */
        this.setTheme(newTheme);
    }

    /**
     * Update the current theme
     * @param theme {String} The theme name
     */
    setTheme(theme) {
        /* It's editing the body's classname depending on the theme */
        document.body.className = `theme-${theme}`;
    }

    /**
     * Renders the ThemeToggler element
     * @return {JSX.Element} Returns the ThemeToggler JSX
     */
    render() {
        return <li className="navbar-item">
            <label className="theme-toggler" htmlFor="darkmode">
                <input type="checkbox" name="darkmode" id="darkmode" className="theme-toggler-input" onChange={this.handleChange} checked={this.state.theme === 'night'} />
                <div className="theme-toggler-circle"></div>
                <span className="theme-toggler-emoji">🌚</span>
                <span className="theme-toggler-emoji">🌞</span>
            </label>
        </li>
    }
}