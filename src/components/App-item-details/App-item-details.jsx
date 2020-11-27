import React from "react";
import PropTypes from "prop-types";

export default class AppItemDetails extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        item: null,
    };
    componentDidMount() {
        this.getItem();
    }
    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
            this.getItem();
        }
    }
    getItem() {
        let { itemId, getData } = this.props;
        if (!itemId) {
            return;
        }
        getData(itemId).then((item) => {
            this.setState({ item });
        });
    }

    render() {
        let { item } = this.state;
        console.log(item);
        if (!this.state.item) {
            return <div className="text-center">Make a choice</div>;
        }
        return (
            <div className="card">
                <div className="card-body text-center">
                    {React.Children.map(this.props.children, (child) => {
                        return React.cloneElement(child, { item });
                    })}
                </div>
                <div></div>
            </div>
        );
    }
}

AppItemDetails.propTypes = {
    item: PropTypes.object,
    itemId: PropTypes.string,
    getData: PropTypes.func,
    children: PropTypes.object,
};

const AppTemplateCard = ({ item, field, label }) => {
    return (
        <div>
            <p className="card-text text-muted">{label} {item[field]} </p>
        </div>
    );
};
AppTemplateCard.propTypes = {
    // item: PropTypes.object,
    item: PropTypes.object,
    field: PropTypes.array,
    label: PropTypes.string,
};
export { AppTemplateCard };
