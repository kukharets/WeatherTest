import React, { Component } from "react";
import {addPlace, deletePlace} from "../actions";
import {connect} from "react-redux";

class Weather extends Component {
    addPlace = () => {
        const { selectedPlace, addPlace } = this.props;
        addPlace(selectedPlace);
    };
    deletePlace = () => {
        const { selectedPlace, deletePlace } = this.props;
        deletePlace(selectedPlace.key);
    };
    render() {

        const { selectedPlace } = this.props;
        const { address, weather } = selectedPlace;
        const { temp_min, temp_max, visibility } = weather;
        const temp = temp_min == temp_max ? temp_max : " min: " + {temp_min} + " , max: " + {temp_max};
        return (
            <div>
                {weather &&
                <div>
                    <b>Weather in</b> {address}:
                    <br/>
                    Visibility: { visibility }
                    Temp: {temp}
                    <button onClick={this.addPlace}>ADD PLACE</button>
                    <button onClick={this.deletePlace}>DELETE PLACE</button>
                </div>
                }
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
    addPlace,
    deletePlace,
})(Weather);