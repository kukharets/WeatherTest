import React, { Component } from "react";
import {addPlace, deletePlace, fetchWeather} from "../actions";
import {connect} from "react-redux";
import DailyWeather from './DailyWeather';

class WeatherBlock extends Component {
    constructor(){
        super();
        this.state = {
            type: 'daily',
        }
    }
    addPlace = () => {
        const { selectedPlace, addPlace } = this.props;
        const { address, coordinates } = selectedPlace;
        addPlace({address, coordinates});
    };
    deletePlace = () => {
        const { selectedPlace, deletePlace } = this.props;
        deletePlace(selectedPlace.key);
    };
    render() {
        const { selectedPlace } = this.props;
        const { address } = selectedPlace;
        console.log("render", this.props)
        return (
            <div>
                <div>
                    <b>Weather in</b> {address}:
                    <br/>
                    {this.state.type === 'daily' && <DailyWeather />}

                    <button onClick={this.addPlace}>ADD PLACE</button>
                    <button onClick={this.deletePlace}>DELETE PLACE</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ basic }) => {
    const {
        selectedPlace,
    } = basic;
    console.log("mapStateToProps", basic)

    return {
        selectedPlace,
    };
};

export default connect(mapStateToProps, {
    addPlace,
    deletePlace,
    fetchWeather,
})(WeatherBlock);