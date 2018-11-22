import React, { Component } from "react";
import {selectPlace} from "../actions";
import {connect} from "react-redux";

class Weather extends Component {

    render() {
        return (
            <div>
                POGODA
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
})(Weather);