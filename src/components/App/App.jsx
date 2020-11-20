import React from "react";
import AppHeader from "../App-header";
import RandomPlanet from "../App-random-planet";
import AppList from "../App-list";
import "./App.css";
import SwapiServices from "../Swapi-services";
let swapiServices=new SwapiServices();
export default class App extends React.Component {
    constructor(props){
        super(props);
    }
    state={
        personToShow:{},
    }
    getPerson=async(id)=>{
        let person=await swapiServices.getPerson(id).then((result)=>{
            console.log(result);
            return result;
        });
        console.log(person);
        swapiServices.getPerson(id).then((result)=>{
            this.savePersonToState(result);
        });
    }
    savePersonToState(personToShow){
        this.setState({personToShow});
    }
    render() {
        return (
            <div id="app">
                <AppHeader />
                <RandomPlanet />
                <AppList getPerson={this.getPerson} personToShow={this.state.personToShow}/>
            </div>
        );
    }
}
