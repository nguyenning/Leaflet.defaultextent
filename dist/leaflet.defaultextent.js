
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(["leaflet"], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory(require('leaflet'));
  } else {
    root.L.Control.DefaultExtent = factory(root.L);
  }
}(this, function(L) {

return (function () {
  L.Control.DefaultExtent = L.Control.extend({
    options: {
      text: 'Default Extent',
      title: 'Zoom to default extent'
    },
    onAdd: function (map) {
      this._map = map;
      return this._initLayout();
    },
    _initLayout: function () {
      var className = 'leaflet-control-defaultextent',
        container = L.DomUtil.create('div', className);
      this._container = container;
      this._fullExtentButton = this._createExtentButton(container);

      L.DomEvent.disableClickPropagation(container);

      return this._container;
    },
    _createExtentButton: function () {
      var link = L.DomUtil.create('a', 'defaultextent', this._container);
      link.href = '#';
      link.innerHTML = this.options.text;
      link.title = this.options.title;
      L.DomEvent
        .on(link, 'mousedown dblclick', L.DomEvent.stopPropagation);
      return link;
    }
  });

  L.Map.addInitHook(function () {
    if (this.options.defaultExtentControl) {
      this.addControl(new L.Control.DefaultExtent());
    }
  });

  L.control.defaultExtent = function (options) {
    return new L.Control.DefaultExtent(options);
  };

  return L.Control.DefaultExtent;

}());
;

}));
