import React from "react";
import { hocHelper, appHOCHelperSwapiServices } from "../App-HOC-helper";
import SwapiServices from "../Swapi-services";
import AppListItems from "../App-list-items";

let swapiServices = new SwapiServices();
let { getAllPlanets, getAllPeople, getAllStarships } = swapiServices;
let listItemsHOC = (Comp, func) => {
    return class listItemsHOC extends React.Component {
        render() {
            return <Comp {...this.props}>{func}</Comp>;
        }
    };
};
let valueToRender = (item) => {
    return `${item.name}`;
};
let listItemsWrapper = listItemsHOC(AppListItems, valueToRender);
const PersonList = appHOCHelperSwapiServices(
    hocHelper(listItemsWrapper, getAllPeople)
);
const PlanetList = appHOCHelperSwapiServices(
    hocHelper(listItemsWrapper, getAllPlanets)
);
const StarshipList = appHOCHelperSwapiServices(
    hocHelper(listItemsWrapper, getAllStarships)
);

export { PersonList, PlanetList, StarshipList };
