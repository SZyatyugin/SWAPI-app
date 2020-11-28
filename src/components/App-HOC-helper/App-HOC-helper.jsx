import React from "react";
import Apploading from "../App-loading";

const hocHelper = (View, getData) => {
    return class AppHOCHelper extends React.Component {
        state = {
            data: null,
        };
        componentDidMount() {
            getData().then((result) => {
                this.getResultFromAPI(result);
            });
        }
        getResultFromAPI(data) {
            this.setState({ data });
        }

        render() {
            let { data } = this.state;

            if (!data) {
                return (
                    <div className="d-flex justify-content-center">
                        <Apploading />;
                    </div>
                );
            }
            return <View {...this.props} data={data} />;
        }
    };
};

export default hocHelper;
