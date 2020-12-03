import React from "react";
import { PersonList, PersonDetails } from "../App-content-page-component";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
let PeoplePage = ({ history, match }) => {
    let {id}=match.params;
    let getItemId = (id) => {
        history.push(id);
    };
    
    return (
        <div className="row mb-4 h-100 justify-content-around">
            <PersonList getItemId={getItemId} />
            <PersonDetails itemId={id} />
        </div>
    );
};
export default withRouter(PeoplePage);
PeoplePage.propTypes = {
    history: PropTypes.object,
    match:PropTypes.object
};
