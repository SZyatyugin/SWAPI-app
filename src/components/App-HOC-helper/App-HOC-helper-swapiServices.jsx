import React from "react";
import { Consumer } from "../Swapi-services-context";

let appHOCHelperSwapiServices = (Comp) => {
    return class HOCHelper extends React.Component {
        render() {
            return (
                <Consumer>
                    {(swapiService) => {
                        return (
                            <Comp {...this.props} swapiService={swapiService} />
                        );
                    }}
                </Consumer>
            );
        }
    };
};
export default appHOCHelperSwapiServices;
