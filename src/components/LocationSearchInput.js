import React from "react";
import {connect} from "react-redux";
import { selectPlace, addPlace } from "../actions";
import PlacesAutocomplete, {geocodeByAddress, getLatLng} from "react-places-autocomplete";

class LocationSearchInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = { address: '' };
    }

    handleChange = address => {
        this.setState({ address });
    };

    handleSelect = address => {
        geocodeByAddress(address)
            .then(results => getLatLng(results[0]))
            .then(latLng => this.props.selectPlace({address, coordinates: latLng}))
            .catch(error => console.error('Error', error));
    };

    render() {
        return (
            <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
    >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
            <div>
            <input
            {...getInputProps({
                placeholder: 'Search Places ...',
                className: 'location-search-input',
            })}
            />
            <div className="autocomplete-dropdown-container">
            {loading && <div>Loading...</div>}
            {suggestions.map(suggestion => {
                const className = suggestion.active
                    ? 'suggestion-item--active'
                    : 'suggestion-item';
                const style = suggestion.active
                    ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                    : { backgroundColor: '#ffffff', cursor: 'pointer' };
                return (
                    <div
                {...getSuggestionItemProps(suggestion, {
                    className,
                    style,
                })}
            >
            <span>{suggestion.description}</span>
                </div>
            );
            })}
        </div>
        </div>
        )}
    </PlacesAutocomplete>
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
    selectPlace,
    addPlace,
})(LocationSearchInput);