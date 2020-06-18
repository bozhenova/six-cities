import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CITIES } from '../../../src/constants';
import leaflet from 'leaflet';

const MapConfig = {
  ID: `map`,
  ZOOM: 12,
  PIN_PATH: `img/pin.svg`,
  ACTIVE_PIN_PATH: `img/pin-active.svg`,
  PIN_SIZE: [30, 30],
  TITLE_LAYER: `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`
};

class Map extends Component {
  static propTypes = {
    coordinates: PropTypes.array.isRequired,
    currentCity: PropTypes.string.isRequired,
    selectedOffer: PropTypes.array
  };

  static defaultProps = {
    selectedOffer: []
  };

  group = null;
  icon = leaflet.icon({
    iconUrl: MapConfig.PIN_PATH,
    iconSize: MapConfig.PIN_SIZE
  });

  activeIcon = leaflet.icon({
    iconUrl: MapConfig.ACTIVE_PIN_PATH,
    iconSize: MapConfig.PIN_SIZE
  });

  addMarkers() {
    const { selectedOffer, coordinates } = this.props;
    const activeOffer = selectedOffer.length !== 0;
    this.group = leaflet.layerGroup().addTo(this.map);

    for (let item of coordinates) {
      leaflet.marker(item, { icon: this.icon }).addTo(this.group);
    }
    if (activeOffer) {
      leaflet
        .marker(selectedOffer, { icon: this.activeIcon })
        .addTo(this.group);
    }
  }

  initMap() {
    const city = CITIES.get(this.props.currentCity);

    this.map = leaflet.map(MapConfig.ID, {
      center: city,
      zoom: MapConfig.ZOOM,
      zoomControl: false,
      marker: true,
      scrollWheelZoom: false
    });
    this.map.setView(city, MapConfig.ZOOM);

    leaflet.tileLayer(MapConfig.TITLE_LAYER).addTo(this.map);
    this.addMarkers();
  }

  componentDidMount() {
    this.initMap();
  }

  componentDidUpdate() {
    const { currentCity, coordinates, selectedOffer } = this.props;

    this.group.clearLayers();
    this.map.setView(CITIES.get(currentCity), MapConfig.ZOOM);

    for (let item of coordinates) {
      leaflet.marker(item, { icon: this.icon }).addTo(this.group);
    }
    if (activeOffer) {
      leaflet
        .marker(selectedOffer, { icon: this.activeIcon })
        .addTo(this.group);
    }
  }

  render() {
    return (
      <div
        style={{ width: '100%', height: '100%', minHeight: '823px' }}
        className='cities__map'
        id='map'
      />
    );
  }
}

export default Map;
