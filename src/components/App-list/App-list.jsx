import React from "react";
import AppPersonDetails from "../App-person-details";
import "./App-list.css";

export default class Applist extends React.Component {
    render() {
        return (
            <div className="row justify-content-around">
                <div className="w-25">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">content</li>
                        <li className="list-group-item">content2</li>
                    </ul>
                </div>
                <div className="w-50">
                    <AppPersonDetails />
                </div>
            </div>
        );
    }
}
