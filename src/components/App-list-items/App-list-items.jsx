import React from "react";
import PropTypes from "prop-types";

class AppListItems extends React.Component {
    renderListItems(data) {
        return data.map((elem) => {
            const value = this.props.children(elem);
            return (
                <li
                    key={elem.id}
                    className="list-group-item list-group-item-action d-flex justify-content-center align-items-center h-100"
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
        let { data } = this.props;
        return (
            <ul className="list-group list-group-flush pb-3 col-5">
                {this.renderListItems(data)}
            </ul>
        );
    }
}
AppListItems.propTypes = {
    getItemId: PropTypes.func,
    children: PropTypes.func,
    data: PropTypes.array,
};

export default AppListItems;
