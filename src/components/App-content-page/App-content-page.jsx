import React from "react";
import PropTypes from "prop-types";
import AppErrorIndicator from "../App-error-indicator";
import PeoplePage from "../App-pages";
import SwapiServices from "../Swapi-services";

import { Provider } from "../Swapi-services-context";
export default class AppContentPage extends React.Component {
    swapiServices = new SwapiServices();
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
        let { getItemId, itemId } = this.props;
        return (
            <Provider value={this.swapiServices}>
                <div className="container">
                    <PeoplePage getItemId={getItemId} itemId={itemId} />
                </div>
            </Provider>
        );
    }
}

AppContentPage.propTypes = {
    getItemId: PropTypes.func,
    itemId: PropTypes.string,
};
