import React from "react";
import AppHeader from "../App-header";
import RandomPlanet from "../App-random-planet";
import AppList from "../App-list";
import "./App.css";

export default class App extends React.Component {
    render() {
        return (
            <div id="app">
                <AppHeader />
                <RandomPlanet />
                <AppList />
            </div>
        );
    }
}
