import React from "react";
import AppHeader from "../App-header";
import RandomPlanet from "../App-random-planet";
import "./App.css";
import AppErrorIndicator from "../App-error-indicator";
import AppContentPage from "../App-content-page";
export default class App extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        itemId: null,
        error: false,
    };
    componentDidCatch() {
        this.setState({ error: true });
    }
    getItemId = (itemId) => {
        this.setState({ itemId });
    };
    render() {
        if (this.state.error) {
            return <AppErrorIndicator />;
        }
        return (
            <div id="app">
                <AppHeader />
                <RandomPlanet />
                <AppContentPage
                    getItemId={this.getItemId}
                    itemId={this.state.itemId}
                />
            </div>
        );
    }
}
