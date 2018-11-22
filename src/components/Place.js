import React, { Component } from "react";
import {selectPlace} from "../actions";
import {connect} from "react-redux";

class Place extends Component {
    selectPlace = () => {
        const {data} = this.props;
        this.props.selectPlace(data);
    };

    render() {
        const {data, selectedPlace} = this.props;
        const {city, key} = data;
        const attachClass =
            selectedPlace && selectedPlace.key == key
                ? "row m-4 lol hoverable "
                : "row m-4 bg-light hoverable";
        return (
            <div
                onClick={this.selectPlace}
                style={{marginTop: "0", height: "100px"}}
                className={attachClass}>

                {city}
            </div>
        );
    }
}

const mapStateToProps = ({ basic }) => {
    const {
        selectedPlace,
    } = basic;
    return {
        selectedPlace,
    };
};

export default connect(mapStateToProps, {
    selectPlace,
})(Place);