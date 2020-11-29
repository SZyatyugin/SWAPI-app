import React from "react";
import { PersonList, PersonDetails } from "../App-content-page-component";
import PropTypes from "prop-types";

export default class PeoplePage extends React.Component {
    state = {
        selectedItems: null,
    };
    onItemSelected = (selectedItem) => {
        this.setState({ selectedItem });
    };
    render() {
        let { itemId, getItemId } = this.props;
        return (
            <div className="row mb-4 h-100 justify-content-around">
                <PersonList getItemId={getItemId}></PersonList>
                <PersonDetails itemId={itemId} />
            </div>
        );
    }
}
PeoplePage.propTypes = {
    itemId: PropTypes.string,
    getItemId: PropTypes.func,
};
