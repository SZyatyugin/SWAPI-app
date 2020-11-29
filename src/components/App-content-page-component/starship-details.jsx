import React from "react";
import PropTypes from "prop-types";
import AppItemDetails from "../App-item-details";
import { AppTemplateCard } from "../App-item-details";
import { appHOCHelperSwapiServices } from "../App-HOC-helper";
const StarshipDetails = ({ itemId, swapiService }) => {
    let { getStarship } = swapiService;
    return (
        <AppItemDetails itemId={itemId} getData={getStarship}>
            <AppTemplateCard field="name" label="Name" />
            <AppTemplateCard field="model" label="Model" />
            <AppTemplateCard field="manufacturer" label="Manufacturer" />
            <AppTemplateCard field="starship_class" label="Starship Class" />
            <AppTemplateCard
                field="max_atmosphering_speed"
                label="Max atmosphering speed"
            />
        </AppItemDetails>
    );
};
StarshipDetails.propTypes = {
    itemId: PropTypes.string,
    swapiService: PropTypes.func,
};
export default appHOCHelperSwapiServices(StarshipDetails);
