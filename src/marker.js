const { Marker } = require('mapbox-gl');

const markerURLs = {
	activity: 'https://i.imgur.com/WbMOfMl.png',
	hotel: 'https://i.imgur.com/D9574Cu.png',
	restaurant: 'https://i.imgur.com/cqR6pUI.png'
};

const buildMarker = function(type, coords) {
	if (!markerURLs.hasOwnProperty(type)) type = 'activity';
	let el = document.createElement('div');
	el.style.backgroundSize = 'contain';
	el.style.width = '32px';
	el.style.height = '37px';
	// el.className = 'marker';
	el.style.backgroundImage = `url(${markerURLs[type]})`;
	return new Marker(el).setLngLat(coords);
};

module.exports = buildMarker;
