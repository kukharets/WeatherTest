import React, { Component } from "react";
import {fetchWeather} from "../actions";
import {connect} from "react-redux";

import { ClipLoader } from 'react-spinners';


class WeeklyWeather extends Component {
    componentDidMount(){
        const { selectedPlace, weather } = this.props;
        if (selectedPlace && (!weather || (weather && !weather.list))) {
            this.props.fetchWeather({place: selectedPlace, type: 'weekly'})
        }
    }
    render() {
        const { weather } = this.props;

        return (
            <div>
                Weekly Weather...
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
})(WeeklyWeather);