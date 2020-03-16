console.log('Hello from JavaScript');
const mapboxgl = require('mapbox-gl');
const buildMarker = require('./marker');

mapboxgl.accessToken = 'pk.eyJ1IjoibGJhc3NldHQiLCJhIjoiY2s3dW5nMjA5MDA0dDNwcnFtZWhwZXdoaiJ9.T9d8WPvRGRjly99qu4lFrA';

const map = new mapboxgl.Map({
	container: 'map',
	center: [ -87.641, 41.895 ], // FullStack Chicago
	zoom: 12, // starting zoom
	style: 'mapbox://styles/mapbox/streets-v10' // mapbox has different map styles
});

const marker = buildMarker('hotel', [ -87.641, 41.895 ]);
marker.addTo(map);

// syntax for creating new marker
/*
const marker1 = document.createElement('div');
marker1.className = 'marker';
marker1.style.backgroundImage = 'url(https://img.icons8.com/ios-glyphs/30/000000/marker-storm.png)';
new mapboxgl.Marker(marker1).setLngLat([ -87.641, 41.895 ]).addTo(map);
*/
