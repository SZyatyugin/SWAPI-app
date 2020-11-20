import React from "react";
import PropTypes from "prop-types";
import SwapiServices from "../Swapi-services";
let swapiServices = new SwapiServices();
export default class AppPersonDetails extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        person: null,
    };
    componentDidMount() {
        this.getPerson();
    }
    componentDidUpdate(prevProps,prevState){
        console.log(prevProps);
        console.log(prevState);
        this.getPerson();
    }
    getPerson(){
        let { personId } = this.props;
        console.log(personId);
        if (!personId) {
            return;
        }
        swapiServices.getPerson(personId).then((person) => {
            this.setState({ person });
        });
    };

    render() {
        console.log(this.props.personId);
        console.log(this.state.person);
        if (!this.state.person) {
            return <div className="text-center">Choose a person</div>;
        }
        let {person:image,name,birthYear,height,mass} = this.state;
        return (
            <div className="card">
                <div className="text-center">
                    <img
                        src={image}
                        className="img-fluid img-thumbnail rounded"
                    ></img>
                </div>
                <div className="card-body text-center">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text text-muted">birth: {birthYear}</p>
                    <p className="card-text text-muted">height: {height}</p>
                    <p className="card-text text-muted">mass: {mass}</p>
                </div>
                <div>
                    <p className="card-text text-muted text-center">
                        howeWorld:
                    </p>
                    <div className="text-center">
                        <img
                            src=""
                            className="img-fluid img-thumbnail rounded"
                        ></img>
                    </div>
                </div>
            </div>
        );
    }
}
AppPersonDetails.propTypes = {
    personId: PropTypes.string,
};
