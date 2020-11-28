import React from "react";
import PropTypes from "prop-types";
import AppErrorIndicator from "../App-error-indicator";
import {
    PersonList,
    PlanetList,
    StarshipList,
} from "../App-content-page-component";
import {
    PersonDetails,
    PlanetDetails,
    StarshipDetails,
} from "../App-content-page-component";
export default class AppContentPage extends React.Component {
    state = {
        error: false,
    };
    componentDidCatch() {
        this.setState({ error: true });
    }
    render() {
        if (this.state.error) {
            return <AppErrorIndicator />;
        }
        let { getItemId,itemId } = this.props;
        return (
            <div className="container">
                <div className="row mb-4 h-100 justify-content-around">
                    <PersonList getItemId={getItemId}>
                    </PersonList>
                    <PersonDetails itemId={itemId} />
                </div>
                <div className="row mb-4 h-100 justify-content-around">
                    <PlanetList getItemId={getItemId}>
                    </PlanetList>
                    <PlanetDetails itemId={itemId} />
                </div>
                <div className="row h-100 justify-content-around">
                    <StarshipList getItemId={getItemId}>
                    </StarshipList>
                    <StarshipDetails itemId={itemId} />
                </div>
            </div>
        );
    }
}

AppContentPage.propTypes = {
    getItemId: PropTypes.func,
    itemId: PropTypes.string,
};
