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
import { BrowserRouter, NavLink, Redirect, Switch, Route } from 'react-router-dom'
import Navigation from "./Navigation";

class Login extends Component {
    render() {
        console.log("Login render", this)

        return(
            <div>LOGIN PAGE
                <NavLink to="/register" activeClassName="active">REGISTER</NavLink></div>
        )
    }
}

class Superlock extends Component {
    render() {
        console.log("SuperlockENDDDDD render")

        return(
            <div>SuperlockENDDDDD PAGE</div>
        )
    }
}

class Root extends Component {
    render() {
        console.log("Root render")

        return(
            <div>ROOT PAGE
                <NavLink to="/superlock" activeClassName="active">SUPERLOCK</NavLink></div>
        )
    }
}

class App extends Component {
    componentWillMount() {
        this.props.fetchPlaces();
    }

    render() {
        const {places, selectedPlace, selectPlace, fetchWeather} = this.props;
        console.log("render of --> Home", this.props, this.state)
        // if ((Math.floor((Math.random() * 100) + 1))) {
        //     return <Redirect to='/login' />
        // }
        return (
            <div className="p-5 h-100">
                <Navigation/>
                <Root/>
                <Switch>
                    <Route exact path='/superlock' component={Superlock}/>
                </Switch>

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
