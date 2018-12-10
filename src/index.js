import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import './index.css';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import reducers from "./reducers";
import App from "./App";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { composeWithDevTools } from 'redux-devtools-extension';
import { BrowserRouter } from 'react-router-dom'
const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(reduxThunk)));
class AppWrapper extends Component {
    state = {
        gmapsLoaded: false,
    }

    initMap = () => {
        this.setState({
            gmapsLoaded: true,
        })
    }
    componentDidMount () {
        window.initMap = this.initMap
        const gmapScriptEl = document.createElement(`script`)
        gmapScriptEl.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDOWYyDeWeCedhIjL973Zh1k_FJgqPW9H8&callback=initMap&libraries=places`
        document.querySelector(`body`).insertAdjacentElement(`beforeend`, gmapScriptEl)
    }

    render () {
        return (
            <div>
                {this.state.gmapsLoaded && (
                    <div>{this.props.children}</div>
                )}
            </div>
        )
    }
}

ReactDOM.render(
    <Provider store={store}>

        <BrowserRouter><App /></BrowserRouter>
    </Provider>,
    document.getElementById("root")
);
