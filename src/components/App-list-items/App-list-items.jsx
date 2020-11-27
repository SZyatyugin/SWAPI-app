import React from "react";
import PropTypes from "prop-types";
import Apploading from "../App-loading";
export default class AppListItems extends React.Component {
    state = {
        listItems: null,
    };
    componentDidMount() {
        const {getData}=this.props;
        getData().then((result) => {
            this.getResultFromAPI(result);
        });
    }
    getResultFromAPI(listItems) {
        this.setState({ listItems });
    }
    renderListItems(listItems) {
        return listItems.map((elem) => {
            const value=this.props.children(elem);
            return (
                <li
                    key={elem.id}
                    className="list-group-item list-group-item-action d-flex justify-content-center"
                    onClick={() => {
                        this.props.getItemId(elem.id);
                    }}
                >
                    <h5>{value}</h5>
                </li>
            );
        });
    }
    render() {
        let { listItems } = this.state;
        if (!listItems) {
            return (
                <div className="d-flex justify-content-center">
                    <Apploading />;
                </div>
            );
        }
        return (
            <ul className="list-group list-group-flush">
                {this.renderListItems(listItems)}
            </ul>);
    }
}
AppListItems.propTypes = {
    getItemId: PropTypes.func,
    getData:PropTypes.func,
    children:PropTypes.func,
};
