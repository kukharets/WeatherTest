import React, { Component } from "react";
import {addPlace, deletePlace, fetchWeather} from "../actions";
import {connect} from "react-redux";
import DailyWeather from './DailyWeather';
import WeeklyWeather from './WeeklyWeather';
import { Button, ButtonGroup } from 'reactstrap';
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
    onRadioBtnClick = () => {
        const { type } = this.state;
        this.setState({
            type: type === 'daily' ? 'weekly' : 'daily'
        })
    };
    render() {
        console.warn("render of --> WeatherBlock", this.props, this.state)

        const { selectedPlace, lol, fetchWeather } = this.props;
        return (
            <div>
                <div>
                    <h3>{lol}
                        <b>Weather in</b>
                        <br/>
                        <ButtonGroup>
                            <Button color="second" onClick={this.onRadioBtnClick} active={this.state.type === 'daily'}>Daily</Button>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <Button color="gray" onClick={this.onRadioBtnClick} active={this.state.type === 'weekly'}>Weekly</Button>
                        </ButtonGroup>
                        {selectedPlace && (
                            <span>
                                {this.state.type === 'daily' && <DailyWeather fetchWeather={fetchWeather} selectedPlace={selectedPlace}/>}
                                {this.state.type === 'weekly' && <WeeklyWeather />}
                                {!selectedPlace.key && <button className="btn btn-primary" onClick={this.addPlace}>SAVE PLACE</button>}
                                {selectedPlace.key && <button className="btn btn-danger" onClick={this.deletePlace}>DELETE PLACE</button>}
                            </span>
                        )}

                    </h3>
                </div>
            </div>
        );
    }
}


export default WeatherBlock;