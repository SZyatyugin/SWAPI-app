import React from "react";
import { PlanetList, PlanetDetails } from "../App-content-page-component";
import PropTypes from "prop-types";
import {withRouter} from "react-router-dom";
const PlanetPage = ({history,match}) => {
    let {id}=match.params;
    let getItemId = (id) => {
        history.push(id);
    };
    return (
        <div className="row mb-4 h-100 justify-content-around">
            <PlanetList getItemId={getItemId} />
            <PlanetDetails itemId={id} />
        </div>
    );
};
export default withRouter(PlanetPage);
PlanetPage.propTypes = {
    history:PropTypes.object,
    match:PropTypes.object

};
