import React from "react";
import PropTypes from "prop-types";
import AppItemDetails from "../App-item-details";
import { AppTemplateCard } from "../App-item-details";
import { appHOCHelperSwapiServices } from "../App-HOC-helper";
const PlanetDetails = ({ itemId, swapiService }) => {
    let { getPlanet } = swapiService;
    return (
        <AppItemDetails itemId={itemId} getData={getPlanet}>
            <AppTemplateCard field="planetName" label="Name" />
            <AppTemplateCard field="population" label="Population" />
            <AppTemplateCard field="rotationPeriod" label="Rotation Period" />
            <AppTemplateCard field="diameter" label="Diameter" />
        </AppItemDetails>
    );
};
PlanetDetails.propTypes = {
    itemId: PropTypes.string,
    swapiService: PropTypes.object,
};
export default appHOCHelperSwapiServices(PlanetDetails);
