import React from "react";
import PropTypes from "prop-types";
import Apploading from "../App-loading";
export default class AppItemDetails extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        item: null,
        loading: null,
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
        this.setState({ loading: false });
        let { itemId, getData } = this.props;
        if (!itemId) {
            return;
        }
        getData(itemId).then((item) => {
            this.setState({ item, loading: true });
        });
    }

    render() {
        let { item, loading } = this.state;
        let { children } = this.props;
        if (!item) {
            return <div className="text-center">Make a choice</div>;
        }
        let personPlanet = item.imgPlanet ? (
            <img
                className="img-fluid img-thumbnail rounded"
                src={item.imgPlanet}
            ></img>
        ) : null;
        if (!loading) {
            return <Apploading />;
        }
        return (
            <div className="card col-6">
                <div className="card-body text-center">
                    <img
                        className="img-fluid img-thumbnail rounded"
                        src={item.image}
                    ></img>
                    {React.Children.map(children, (child) => {
                        return React.cloneElement(child, { item });
                    })}
                    {personPlanet}
                </div>
            </div>
        );
    }
}

AppItemDetails.propTypes = {
    item: PropTypes.object,
    itemId: PropTypes.string,
    getData: PropTypes.func,
    children: PropTypes.array,
};

const AppTemplateCard = ({ item, field, label }) => {
    return (
        <h6>
            {label} <span className="text-muted">{item[field]}</span>
        </h6>
    );
};
AppTemplateCard.propTypes = {
    item: PropTypes.object,
    field: PropTypes.string,
    label: PropTypes.string,
};
export { AppTemplateCard };
