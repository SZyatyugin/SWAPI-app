import React from "react";
import { StarshipList,StarshipDetails } from "../App-content-page-component";
import PropTypes from "prop-types";

export default class StarshipPage extends React.Component {
    propTypes={
        itemId:PropTypes.string,
        getItemId:PropTypes.func
    }
    state = {
        selectedItems: null,
    };
    onItemSelected = (selectedItem) => {
        this.setState({ selectedItem });
    };
    render() {
        let {itemId,getItemId}=this.props;
        return (
            <div className="row mb-4 h-100 justify-content-around">
                <StarshipList getItemId={getItemId}>
                <StarshipDetails itemId={itemId} />
            </div>
        );
    }
}