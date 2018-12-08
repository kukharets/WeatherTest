import React, {Component} from "react";
import {
    fetchPlaces,
    selectPlace,
    deletePlace,
    addPlace, fetchWeather,
} from "../actions";
import {connect} from "react-redux";
import LocationSearchInput from "./LocationSearchInput";
import Place from './Place';
import WeatherBlock from './WeatherBlock';
import Test from "./Test";



class App extends Component {
    componentWillMount() {
        this.props.fetchPlaces();
    }

    render() {
        const {places, selectedPlace, selectPlace, fetchWeather} = this.props;
        console.log("render of --> Home", this.props, this.state)
        return (
            <div className="p-5 h-100">
                <div className="row h-100 w-100">
                    <div className="col-sm border-right p-3">
                        <form className="card card-sm">
                            <div
                                style={{marginBottom: "0"}}
                                className="card-body row no-gutters align-items-center"
                            >
                                <div className="col-auto">
                                    <i className="fas fa-search h4 text-body"/>
                                </div>
                                <div className="col">
                                    <LocationSearchInput/>
                                </div>
                            </div>
                            <div style={{height: "60vh", overflowY: 'scroll'}} className="p-1 scrolling">

                                {places.length > 0 &&
                                places.map((place, index) => {
                                    return (
                                        <Place
                                            key={index}
                                            data={place}
                                            selectedPlace={selectedPlace}
                                            selectPlace={selectPlace}
                                        />
                                    );
                                })}
                            </div>
                        </form>
                    </div>
                    <div className="col-sm p-3">
                        {(this.props.selectedPlace && this.props.selectedPlace.coordinates) ? (
                            <span>
                                <WeatherBlock fetchWeather={fetchWeather} selectedPlace={selectedPlace}/>
                            <Test data='1' />
                            </span>

                        ) : (
                            <h3 className="text-center">Choose the location</h3>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({basic}) => {
    const {places, selectedPlace} = basic;
    return {
        places,
        selectedPlace
    };
};

export default connect(
    mapStateToProps,
    {
        fetchPlaces,
        selectPlace,
        deletePlace,
        addPlace,
        fetchWeather
    }
)(App);
