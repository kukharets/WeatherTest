import React, { Component } from 'react';
import Navigation from './components/Navigation';
import Home from './components/Home';
import { BrowserRouter, NavLink, Redirect, Switch, Route } from 'react-router-dom'

class Login extends Component {
    render() {
        console.log("Login render", this)

        return(
            <div><span>LOGIN PAGE</span>
            <NavLink to="/register" activeClassName="active">REGISTER</NavLink></div>
        )
    }
}

class Register extends Component {
    render() {
        return(
            <div><span>LOGIN PAGE</span>
                <NavLink to="/" activeClassName="active">APP</NavLink></div>
        )
    }
}

class Loginz extends Component {
    render() {
        return(
            <div>LOGIN PAGE</div>
        )
    }
}

class App extends Component {
    render() {
        console.log("app render", this)
        return (
            <div className="h-100">
                <Switch>
                    <Route exact path='/login' component={Login}/>
                    <Route exact path='/register' component={Register}/>
                    <Route path='/:_' component={Home}/>
                </Switch>
            </div>
        )
    }
}

export default App;