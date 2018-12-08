import React, { Component } from "react";
import {selectPlace} from "../actions";
import {connect} from "react-redux";

class Place extends Component {
    selectPlace = () => {
        const {data} = this.props;
        this.props.selectPlace(data);
    };

    render() {
        console.log("render of --> Place", this.props, this.state)

        const {data, selectedPlace} = this.props;
        const {address, key} = data;
        const attachClass =
            selectedPlace && selectedPlace.key === key
                ? "row m-4 lol hoverable "
                : "row m-4 bg-light hoverable";
        return (
            <div
                onClick={this.selectPlace}
                style={{marginTop: "0", height: "30px"}}
                className={attachClass}>

                {address}
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