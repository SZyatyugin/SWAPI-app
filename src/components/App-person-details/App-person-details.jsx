import React from "react";
import PropTypes from "prop-types";

export default class AppPersonDetails extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        let {personToShow}=this.props;
        console.log(personToShow);
        return (
            <div className="card">
                <img></img>
                <div className="card-body">
                    <h5>{personToShow.name}</h5>
                    <p className="card-text"></p>
                </div>
            </div>
        );
    }
};
AppPersonDetails.propTypes={
    personToShow:PropTypes.object,
};

