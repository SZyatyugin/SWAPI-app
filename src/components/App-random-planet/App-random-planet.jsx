import React from "react";
import "./App-random-planet.css";
import SwapiServices from "../Swapi-services";

let swapiServices = new SwapiServices();
class RandomPlanet extends React.Component {
    
   
    state = {
        randomPlanet:{},
    };
    constructor(props) { 
        super(props);
        this.getRensponseFromAPI();
    }
    showRandomPlanet(result){
        this.setState({randomPlanet:result,});
    }
    getRensponseFromAPI() {
        let randomId = Math.floor(Math.random() * 25) + 2;
        swapiServices.getPlanet(randomId)
            .then((result)=>{this.showRandomPlanet(result);});
    }

    render() {
        console.log(this.state.randomPlanet);
        let {randomPlanet:{planetName,population,rotationPeriod,diameter,id,},} = this.state;
        return (
            <div className="random-planet jumbotron jumbotron-fluid">
                <div className="container">
                    <div className="row justify-content-center">
                        <img
                            className="img-fluid rounded"
                            src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
                            alt=""
                        />
                        <div className="planet-info">
                            <h4>{planetName}</h4>
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <span className="term">Population: </span>
                                    <span> {population}</span>
                                </li>
                                <li className="list-group-item">
                                    <span className="term">
                                        Rotation Period:{" "}
                                    </span>
                                    <span> {rotationPeriod}</span>
                                </li>
                                <li className="list-group-item">
                                    <span className="term">Diameter: </span>
                                    <span> {diameter}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default RandomPlanet;
