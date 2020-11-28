import React from "react";
import hocHelper from "../App-HOC-helper";
import SwapiServices from "../Swapi-services";
import AppListItems from "../App-list-items";


let swapiServices = new SwapiServices();
let { getAllPlanets, getAllPeople, getAllStarships } = swapiServices;
let listItemsHOC = (Comp, func) => {
    return class listItHOC extends React.Component{
        render(){
            return <Comp {...this.props}>{func}</Comp>;
        }
    };
};
let valueToRender=(item) => {
    return `${item.name}`;};
    
let listItemsWrapper=listItemsHOC(AppListItems,valueToRender);

const PersonList = hocHelper(listItemsWrapper, getAllPeople);
const PlanetList = hocHelper(listItemsWrapper, getAllPlanets);
const StarshipList = hocHelper(listItemsWrapper, getAllStarships);

export { PersonList, PlanetList, StarshipList };
