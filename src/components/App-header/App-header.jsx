import React from "react";
import { Link } from "react-router-dom";
import "./App-header.css";

let AppHeader = () => {
    return (
        <div className="row">
            <div className="row justify-content-around w-100">
                <h2 className="col">
                    <Link to="/">SWAPI App</Link>
                </h2>
                <ul className="col row align-content-end">
                    <li className="col-sm">
                        <Link to="/person/">Person</Link>
                    </li>
                    <li className="col-sm">
                        <Link to="/planets/">Planet</Link>
                    </li>
                    <li className="col-sm">
                        <Link to="/starships/">Starships</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};
export default AppHeader;
