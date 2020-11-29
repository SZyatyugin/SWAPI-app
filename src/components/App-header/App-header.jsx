import React from "react";

import "./App-header.css";

let AppHeader = () => {
    return (
        <div className="row">
            <div className="row justify-content-around w-100">
                <h2 className="col">SWAPI App</h2>
                <ul className="col row align-content-end">
                    <li className="col-sm">People</li>
                    <li className="col-sm">Planet</li>
                    <li className="col-sm">Starships</li>
                </ul>
            </div>
        </div>
    );
};
export default AppHeader;
