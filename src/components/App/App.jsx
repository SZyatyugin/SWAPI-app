import React from "react";
import AppHeader from "../App-header";
import RandomPlanet from "../App-random-planet";
import "./App.css";
import AppErrorIndicator from "../App-error-indicator";
import AppPersonPage from "../App-person-page";
export default class App extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        personId: null,
        error: false,
    };
    componentDidCatch() {
        this.setState({ error: true });
    }
    getPerson = (personId) => {
        this.setState({ personId });
    };
    render() {
        if(this.state.error){
            return <AppErrorIndicator/>;
        }
        return (
            <div id="app">
                <AppHeader />
                <RandomPlanet />
                <AppPersonPage 
                    getPerson={this.getPerson}
                    personId={this.state.personId}/>
            </div>
        );
    }
}
