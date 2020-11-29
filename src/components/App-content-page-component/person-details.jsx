import React from "react";
import PropTypes from "prop-types";
import AppItemDetails from "../App-item-details";
import { AppTemplateCard } from "../App-item-details";
import { appHOCHelperSwapiServices } from "../App-HOC-helper";
const PersonDetails = ({ itemId, swapiService }) => {
    let { getPerson } = swapiService;
    return (
        <AppItemDetails itemId={itemId} getData={getPerson}>
            <AppTemplateCard field="name" label="Name" />
            <AppTemplateCard field="birthYear" label="Birth year" />
            <AppTemplateCard field="height" label="Height" />
            <AppTemplateCard field="mass" label="Mass" />
        </AppItemDetails>
    );
};
PersonDetails.propTypes = {
    itemId: PropTypes.string,
    swapiService: PropTypes.object,
};

export default appHOCHelperSwapiServices(PersonDetails);
