import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';
import { connect } from 'react-redux';

const MapConfig = {
  ID: `map`,
  MARKER_PATH: `img/pin.svg`,
  ACTIVE_MARKER_PATH: `img/pin-active.svg`,
  MARKER_SIZE: [30, 30],
  TITLE_LAYER: `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`
};

class Map extends PureComponent {
  static propTypes = {
    offers: PropTypes.array.isRequired,
    filteredOffers: PropTypes.array.isRequired,
    currentOfferId: PropTypes.number
  };

  static defaultProps = {
    currentOfferId: null,
    offers: []
  };

  coordinates = this.props.offers.map(offer => offer.place.coords);
  city = this.props.offers[0].city;
  group = null;
  icon = leaflet.icon({
    iconUrl: MapConfig.MARKER_PATH,
    iconSize: MapConfig.MARKER_SIZE
  });
  activeIcon = leaflet.icon({
    iconUrl: MapConfig.ACTIVE_MARKER_PATH,
    iconSize: MapConfig.MARKER_SIZE
  });

  getCurrentOffer = () => {
    const { currentOfferId, filteredOffers } = this.props;
    const currentOffer = filteredOffers.find(
      item => item.id === currentOfferId
    );
    return currentOffer ? currentOffer.place.coords : [0, 0];
  };

  addMarkers() {
    this.group = leaflet.layerGroup().addTo(this.map);
    for (let item of this.coordinates) {
      leaflet.marker(item, { icon: this.icon }).addTo(this.group);
    }
    leaflet
      .marker(this.getCurrentOffer(), { icon: this.activeIcon })
      .addTo(this.group);
  }

  initMap() {
    this.map = leaflet.map(MapConfig.ID, {
      center: this.city.coords,
      zoom: this.city.zoom,
      zoomControl: false,
      marker: true,
      scrollWheelZoom: false
    });
    this.map.setView(this.city.coords, this.city.zoom);

    leaflet.tileLayer(MapConfig.TITLE_LAYER).addTo(this.map);
    this.addMarkers();
  }

  componentDidMount() {
    this.initMap();
  }

  componentDidUpdate() {
    this.city = this.props.offers[0].city;
    this.coordinates = this.props.offers.map(offer => offer.place.coords);

    this.group.clearLayers();
    this.map.setView(this.city.coords, this.city.zoom);

    for (let item of this.coordinates) {
      leaflet.marker(item, { icon: this.icon }).addTo(this.group);
    }

    leaflet
      .marker(this.getCurrentOffer(), { icon: this.activeIcon })
      .addTo(this.group);
  }

  render() {
    return (
      <div
        style={{ width: '100%', height: '100%' }}
        className='cities__map'
        id='map'
      />
    );
  }
}

const mapStateToProps = state => ({
  currentOfferId: state.data.currentOfferId,
  filteredOffers: state.data.filteredOffers
});

export { Map };
export default connect(mapStateToProps)(Map);
