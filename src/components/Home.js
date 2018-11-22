import React, {Component} from "react";
import {
    fetchPlaces,
    selectPlace,
    deletePlace,
    addPlace,
} from "../actions";
import {connect} from "react-redux";
import LocationSearchInput from "./LocationSearchInput";
import Place from './Place';
import Weather from './Weather';



class App extends Component {
    componentWillMount() {
        this.props.fetchPlaces();
    }

    deletePlace = () => {
        const {places, selectedPlace, deletePlace} = this.props;
        deletePlace(selectedPlace.key);
    };
    addPlace = () => {
        const {selectedPlace, addPlace} = this.props;
        addPlace(selectedPlace.key);
    };

    render() {
        const {places, selectedPlace, selectPlace} = this.props;
        console.log("PROPS", this.props)
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
                                            data={place}
                                            index={index}
                                            selectedPlace={selectedPlace}
                                            selectPlace={selectPlace}
                                        />
                                    );
                                })}
                            </div>
                        </form>
                    </div>
                    <div className="col-sm p-3">
                        {this.props.selectedPlace ? (
                            <Weather/>
                        ) : (
                            <h3 class="text-center">Choose the location</h3>
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
    }
)(App);
