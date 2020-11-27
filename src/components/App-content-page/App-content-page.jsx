import React from "react";
import AppListItems from "../App-list-items";
import AppItemDetails from "../App-item-details";
import PropTypes from "prop-types";
import AppErrorIndicator from "../App-error-indicator";
import SwapiServices from "../Swapi-services";
import {AppTemplateCard} from "../App-item-details";
let swapiServices = new SwapiServices();

export default class AppContentPage extends React.Component {
    state = {
        itemId: null,
        error: false,
    };
    getItem = (itemId) => {
        this.setState({ itemId });
    };
    componentDidCatch() {
        this.setState({ error: true });
    }
    render() {
        if (this.state.error) {
            return <AppErrorIndicator />;
        }
        let { getItemId, itemId } = this.props;
        const itemListPeople = (
            <AppListItems
                getItemId={getItemId}
                getData={swapiServices.getAllPeople}
            >
                {(item) => {
                    return `${item.name}`;
                }}
            </AppListItems>
        );
        const itemPersonDetails = (
            <AppItemDetails
                itemId={itemId}
                getData={swapiServices.getPerson}
            >
                <AppTemplateCard field="name" label="Name"/>
                <AppTemplateCard field="birthYear" label="Birth year"/>
                <AppTemplateCard field="height" label="Height"/>
                <AppTemplateCard field="mass" label="Mass"/>
                
            </AppItemDetails>
        );
        const itemListPlanets = (
            <AppListItems
                getItemId={getItemId}
                getData={swapiServices.getAllPlanets}
            >
                {(item) => {
                    return `${item.name}`;
                }}
            </AppListItems>
        );
        const itemPlanetDetails = (
            <AppItemDetails
                itemId={itemId}
                getData={swapiServices.getPlanet}
            >
                <AppTemplateCard field="planetName" label="Name"/>
                <AppTemplateCard field="population" label="Population"/>
                <AppTemplateCard field="rotationPeriod" label="Rotation Period"/>
                <AppTemplateCard field="diameter" label="Diameter"/>
            </AppItemDetails>
        );
        return (
            <div className="container">
                <AppContentItem
                    list={itemListPeople}
                    itemDetails={itemPersonDetails}
                />
                <AppContentItem
                    list={itemListPlanets}
                    itemDetails={itemPlanetDetails}
                />
            </div>
        );
    }
}

AppContentPage.propTypes = {
    getItemId: PropTypes.func,
    itemId: PropTypes.string,
};


const AppContentItem = ({ list, itemDetails }) => {
    return (
        <div className="row justify-content-around pt-5">
            <div className="w-25 col-5">{list}</div>
            <div className="w-50 col-5">{itemDetails}</div>
        </div>
    );
};
AppContentItem.propTypes = {
    list: PropTypes.element,
    itemDetails: PropTypes.element,
};