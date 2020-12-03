import React from "react";
import { StarshipList} from "../App-content-page-component";
import PropTypes from "prop-types";
import {withRouter} from "react-router-dom";
const StarshipPage = ({history}) => {

    let getItemId = (id) => {
        history.push(id);
    };
    return (
        <div className="row mb-4 h-100 justify-content-around">
            <StarshipList getItemId={getItemId} />
        </div>
    );
};
export default withRouter(StarshipPage);
StarshipPage.propTypes = {
    history:PropTypes.object,
    getItemId: PropTypes.func,
};
