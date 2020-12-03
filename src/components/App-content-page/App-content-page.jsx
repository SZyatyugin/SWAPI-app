import React from "react";
import PropTypes from "prop-types";
import AppErrorIndicator from "../App-error-indicator";
import { PeoplePage, PlanetPage, StarshipPage } from "../App-pages";
import SwapiServices from "../Swapi-services";
import { Route, Switch,Redirect } from "react-router-dom";
import { Provider } from "../Swapi-services-context";
import { StarshipDetails } from "../App-content-page-component";
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
        return (
            <Provider value={this.swapiServices}>
                <Switch>
                    <Route
                        path="/"
                        render={() => {
                            return (
                                <h2 className="text-center pt-5">
                                    Welcome to Star Wars app
                                </h2>
                            );
                        }}
                        exact
                    />
                    <Route exact path="/person/:id?" component={PeoplePage} />
                    <Route exact path="/planets/:id?" component={PlanetPage} />
                    <Route exact path="/starships" component={StarshipPage} />
                    <Route
                        path="/starships/:id"
                        render={({ match }) => {
                            let { id } = match.params;
                            return (
                                <div className="row justify-content-center">
                                    <StarshipDetails itemId={id} />
                                </div>
                            );
                        }}
                    />
                    <Redirect to="/"/>
                </Switch>
            </Provider>
        );
    }
}

AppContentPage.propTypes = {
    getItemId: PropTypes.func,
    itemId: PropTypes.string,
};
