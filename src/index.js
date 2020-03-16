console.log('Hello from JavaScript');
const mapboxgl = require("mapbox-gl");
const makeMarker = require('./marker.js')

mapboxgl.accessToken = "pk.eyJ1IjoibGJhc3NldHQiLCJhIjoiY2s3dW5nMjA5MDA0dDNwcnFtZWhwZXdoaiJ9.T9d8WPvRGRjly99qu4lFrA";
// var map = new mapboxgl.Map({
// container: 'map',
// style: `mapbox://styles/mapbox/streets-v11`
// });

const map = new mapboxgl.Map({
  container: "map",
  center: [-87.641, 41.895], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});
// const marker1 = document.createElement('div')
// marker1.className='marker'

// // marker1.style.backgroundImage ='url(https://img.icons8.com/ios-glyphs/30/000000/marker-storm.png)'

// new mapboxgl.Marker(marker1).setLngLat([-87.641, 41.895]).addTo(map);

const marker = makeMarker([41.9106217, -87.678182], 'hotel')
marker.addTo(map)