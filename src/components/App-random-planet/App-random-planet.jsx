import React from "react";
import PropTypes from "prop-types";
import "./App-random-planet.css";
import SwapiServices from "../Swapi-services";
import Apploading from "../App-loading";
import AppErrorIndicator from "../App-error-indicator";
let swapiServices = new SwapiServices();

class RandomPlanet extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        randomPlanet: {},
        loading: true,
        error: false,
    };
    componentDidMount() {
        this.getRensponseFromAPI();
        setInterval(() => {
            this.getRensponseFromAPI();
        }, 5000);
    }
    showRandomPlanet(randomPlanet) {
        this.setState({
            randomPlanet,
            loading: false,
        });
    }
    planetShowError() {
        this.setState({
            error: true,
            loading: false,
        });
    }
    getRandomPlanet() {
        this.getRensponseFromAPI();
    }
    getRensponseFromAPI = () => {
        if (!this.state.error) {
            this.setState({ loading: true });
        }
        let randomId = Math.floor(Math.random() * 25) + 2;
        swapiServices
            .getPlanet(randomId)
            .then((result) => {
                this.showRandomPlanet(result);
            })
            .catch(() => {
                this.planetShowError();
            });
    };

    render() {
        let { randomPlanet, loading, error } = this.state;
        let hasData = !(loading || error);
        let loadingSpinner = loading ? <Apploading /> : null;
        let content = hasData ? <PlanetView planet={randomPlanet} /> : null;
        let errorShow = error ? <AppErrorIndicator /> : null;
        return (
            <div className="random-planet jumbotron jumbotron-fluid">
                {errorShow}
                {loadingSpinner}
                {content}
            </div>
        );
    }
}
const PlanetView = ({ planet }) => {
    let { planetName, population, rotationPeriod, diameter, image } = planet;
    return (
        <div>
            <div className="row justify-content-center">
                <img
                    className="img-fluid rounded"
                    src={image}
                    alt={planetName}
                />
                <div className="planet-info">
                    <h4>{planetName}</h4>
                    <ul className="list-group">
                        <li className="list-group-item">
                            <span className="term">Population: </span>
                            <span> {population}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Rotation Period: </span>
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
    );
};
PlanetView.propTypes = {
    planet: PropTypes.object,
};
export default RandomPlanet;
