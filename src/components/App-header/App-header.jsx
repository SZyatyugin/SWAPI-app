import React from "react";

import "./App-header.css";

let AppHeader = () => {
    return (
        <div className="container-sm">
            <div className="row align-content-center">
                <h2 className="col-sm">SWAPI App</h2>
                <ul className="col-sm row align-content-end">
                    <li className="col-sm">People</li>
                    <li className="col-sm">Planet</li>
                    <li className="col-sm">Starships</li>
                </ul>
            </div>
        </div>
    );
};
export default AppHeader;
