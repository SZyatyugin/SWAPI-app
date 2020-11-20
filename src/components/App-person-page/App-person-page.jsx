import React from "react";
import AppListItems from "../App-list-items";
import AppPersonDetails from "../App-person-details";
import PropTypes from "prop-types";
import AppErrorIndicator from "../App-error-indicator";
export default class AppPersonPage extends React.Component {
    state = {
        person: null,
        error: false,
    };

    getPerson = (personId) => {
        this.setState({ personId });
    };
    componentDidCatch() {
        this.setState({error:true});
    }
    render() {
        if (this.state.error) {
            return <AppErrorIndicator />;
        }
        let { getPerson, personId } = this.props;
        return (
            <div className="row justify-content-around">
                <div className="w-25 col-5">
                    <ul className="list-group list-group-flush">
                        <AppListItems getPerson={getPerson} />
                    </ul>
                </div>
                <div className="w-50 col-5">
                    <AppPersonDetails personId={personId} />
                </div>
            </div>
        );
    }
}
AppPersonPage.propTypes = {
    getPerson: PropTypes.func,
    personId: PropTypes.string,
};
