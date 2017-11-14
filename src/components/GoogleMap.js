/*global google*/
import React, {Component} from 'react';

class GoogleMap extends Component {
    componentDidMount() {
        new google.maps.Map(this.refs.map, {
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        });
    }

    render() {
        // Creates a direct reference to the div that can be accessed
        // using this.refs.map
        return <div ref="map" />;
    }
}

export default GoogleMap;
