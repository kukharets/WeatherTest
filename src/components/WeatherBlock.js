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
        const { selectedPlace } = this.props;
        const { address } = selectedPlace;
        return (
            <div>
                <div>
                    <h3>
                        <b>Weather in</b> {address}:
                        <br/>
                        <ButtonGroup>
                            <Button color="second" onClick={this.onRadioBtnClick} active={this.state.type === 'daily'}>Daily</Button>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <Button color="gray" onClick={this.onRadioBtnClick} active={this.state.type === 'weekly'}>Weekly</Button>
                        </ButtonGroup>
                        {this.state.type === 'daily' && <DailyWeather />}
                        {this.state.type === 'weekly' && <WeeklyWeather />}
                        {!selectedPlace.key && <button className="btn btn-primary" onClick={this.addPlace}>SAVE PLACE</button>}
                        {selectedPlace.key && <button className="btn btn-danger" onClick={this.deletePlace}>DELETE PLACE</button>}
                    </h3>
                </div>
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
    fetchWeather,
})(WeatherBlock);