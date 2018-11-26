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

        return (
            <div>
                {weather &&
                <div>
                    Temperature: {weather.temp_max}
                    <br/>
                    Humidity: { weather.humidity }
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