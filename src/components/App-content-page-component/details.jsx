import React from "react";
import PropTypes from "prop-types";
import AppItemDetails from "../App-item-details";
import SwapiServices from "../Swapi-services";
import {AppTemplateCard} from "../App-item-details";
let swapiServices = new SwapiServices();

let { getPerson, getPlanet, getStarship } = swapiServices;

const PersonDetails = ({ itemId }) => {
    return (
        <AppItemDetails itemId={itemId} getData={getPerson}>
            <AppTemplateCard field="name" label="Name" />
            <AppTemplateCard field="birthYear" label="Birth year" />
            <AppTemplateCard field="height" label="Height" />
            <AppTemplateCard field="mass" label="Mass" />
        </AppItemDetails>
    );
};

const PlanetDetails = ({ itemId }) => {
    return (
        <AppItemDetails itemId={itemId} getData={getPlanet}>
            <AppTemplateCard field="planetName" label="Name" />
            <AppTemplateCard field="population" label="Population" />
            <AppTemplateCard field="rotationPeriod" label="Rotation Period" />
            <AppTemplateCard field="diameter" label="Diameter" />
        </AppItemDetails>
    );
};
const StarshipDetails = ({ itemId }) => {
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

export { PersonDetails, PlanetDetails, StarshipDetails };
PersonDetails.propTypes = {
    itemId: PropTypes.string,
};
PlanetDetails.propTypes = {
    itemId: PropTypes.string,
};
StarshipDetails.propTypes = {
    itemId: PropTypes.string,
};
