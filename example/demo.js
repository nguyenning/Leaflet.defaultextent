var mapCenter = [29.76, -95.38];

// Set up map
var map = L.map('map', {
  center: mapCenter,
  zoom: 14,
  defaultExtentControl: true
});

L.tileLayer('https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png', {
  maxZoom: 18,
  id: 'examples.map-i86knfo3'
}).addTo(map);
