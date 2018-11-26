import React, { Component } from "react";
import {fetchWeather} from "../actions";
import {connect} from "react-redux";

import { ClipLoader } from 'react-spinners';


class DailyWeather extends Component {
    componentDidMount(){
        const { selectedPlace, weather } = this.props;
        if (selectedPlace && (!weather)) {
            this.props.fetchWeather({place: selectedPlace, type: 'daily'})
        }
    }
    render() {
        const { weather } = this.props;
        console.log("weather", weather)

        return (
            <div>
                {weather &&
                <div>
                    Visibility: { weather.visibility }
                    Temp: {weather.temp_max}
                </div>
                }
                {!weather && <ClipLoader
                    sizeUnit={"px"}
                    size={50}
                    color={'#123abc'}
                    loading={true}
                />}
            </div>
        );
    }
}

const mapStateToProps = ({ basic }) => {
    const {
        selectedPlace, weather,
    } = basic;

    return {
        selectedPlace, weather,
    };
};

export default connect(mapStateToProps, {
    fetchWeather,
})(DailyWeather);