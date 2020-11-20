import React from "react";
import PropTypes from "prop-types";
import AppPersonDetails from "../App-person-details";
import "./App-list.css";
import AppListItems from "../App-list-items";

let AppList = ({getPerson,personToShow}) => {
    return (
        <div className="row justify-content-around">
            <div className="w-25 col-5">
                <ul className="list-group list-group-flush">
                    <AppListItems getPerson={getPerson} personToShow={personToShow}/>
                </ul>
            </div>
            <div className="w-50 col-5">
                <AppPersonDetails personToShow={personToShow}/>
            </div>
        </div>
    );
};
AppList.propTypes={
    getPerson:PropTypes.func,
    personToShow:PropTypes.object,

};
export default AppList;
