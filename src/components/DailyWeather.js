import React, { Component } from "react";
import {fetchWeather} from "../actions";
import {connect} from "react-redux";

import { ClipLoader } from 'react-spinners';


class DailyWeather extends Component {
    componentDidMount(){
        const { selectedPlace } = this.props;
        if (selectedPlace && (!selectedPlace.weather)) {
            this.props.fetchWeather({place: selectedPlace, type: 'daily'})
        }
    }
    render() {
        const { selectedPlace: {dailyWeather} } = this.props;
        console.log("render of --> DAILY", this.props, this.state)

        return (
            <div>
                {dailyWeather &&
                <div>
                    Temperature: {dailyWeather.temp_max}
                    <br/>
                    Humidity: { dailyWeather.humidity }
                </div>
                }
                {!dailyWeather && <ClipLoader
                    sizeUnit={"px"}
                    size={50}
                    color={'#123abc'}
                    loading={true}
                />}
            </div>
        );
    }
}


export default DailyWeather;