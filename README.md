Leaflet.defaultextent
=====================

Adds a Default Extent button on a Leaflet map.

## Using the plugin

There are several ways to add the button to the map

1. Add on initialize

  ```javascript
    var map = L.map('map', {
      center: mapCenter,
      zoom: 14,
      defaultExtentControl: true
    });
  ```
1. Direct

  ```javascript
  L.control.defaultExtent()
    .addTo(map);
  ```

#### Options

| Property | Type | Description
| --- | --- | ---
| `title` | `string` | Tooltip title of the toggle button when mouse hover


#### Methods

| Method | Returns | Description
| --- | --- | ---
| `setCenter(`[LatLng](http://leafletjs.com/reference.html#latlng) *center*`)` | `this` | Sets the default center to new LatLng
| `setZoom(` `<Number>` zoom `)` | `this` | Represents a geographical point with a certain latitude and longitude.
