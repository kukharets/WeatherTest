import React, { Component } from "react";
import {selectPlace} from "../actions";
import {connect} from "react-redux";

class Test extends Component {

    render() {
        console.log("render of --> Test", this.props, this.state)
        const {data} = this.props;
        return (
            <div>
                ERONDONDON: {data && data.address}
            </div>
        );
    }
}


export default Test