// leaflet-fullextent-control.js
var L = require('leaflet');

var FullExtentControl = L.Control.FullExtent = L.Control.extend({
  options: {
    position: 'topright',
    text: 'Full Extent',
    title: 'Zoom to full extent'
  },
  onAdd: function (map) {
    this._map = map;
    return this._initLayout();
  },
  _initLayout: function () {
    var className = 'leaflet-control-fullextent',
      container = L.DomUtil.create('div', className);
    this._container = container;
    this._fullExtentButton = this._createExtentButton(container);

    return this._container;
  },
  _createExtentButton: function () {
    var link = L.DomUtil.create('a', 'fullextent', this._container);
    link.href = '#';
    link.innerHTML = this.options.text;
    link.title = this.options.title;
    L.DomEvent
      .on(link, 'mousedown dblclick', L.DomEvent.stopPropagation);
    return link;
  }
});

module.exports = FullExtentControl;
