const mapboxgl = require("mapbox-gl");

const markerURLs = {
    activity: 'http://i.imgur.com/WbMOfMl.png',
    hotel: 'http://i.imgur.com/D9574Cu.png',
    restaurant: 'http://i.imgur.com/cqR6pUI.png'
}

const makeMarker = function(coord, type) {
    var el = document.createElement('div');
    el.className = 'marker';
    el.style.backgroundImage = `url(${markerURLs.type})`
    return new mapboxgl.Marker(el).setLngLat(coord);
    
    }

module.exports = makeMarker



