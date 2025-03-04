// Define links to basemaps, attribution, and zoom properties 
var basemaps = {
  OpenStreetMap: L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors.</a>.',
    maxNativeZoom: 18,
    maxZoom: 22,
  }),
  Satellit: L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
  })
};

const STYLES = {

  ditch_closed: {
    dashArray: "2, 10",
    color: "#003300",
    weight: 5,
    opacity: 1 
  },

  ditch_open: {
    color: "#003300",
    weight: 5,
    opacity: 1 
  },

};

// Group the basemaps
var baseTree = {
  label: 'Kartbakgrunder',
  children: [
    { label: 'OpenStreetMap', layer: basemaps.OpenStreetMap },
    { label: 'Satellit', layer: basemaps.Satellit },
  ]
};

// List the sources for GeoJSON-data
var sources = [
  "data/ditches/fields/mellanangarna-vastra.geojson",
  "data/ditches/fields/mellanangarna-ostra.geojson",
  "data/ditches/fields/centralangarna.geojson",
  "data/ditches/fields/ostra.geojson",
  "data/ditches/fields/norra.geojson",
  "data/toilets.geojson",
  "data/trashrooms.geojson",
];

// Fetch GeoJSON-objects from each file
sources.forEach(source => {
  fetch(source)
    .then(response => response.json())
    .then(data => {
      L.geoJSON(data, {
        onEachFeature: function (feature, layer) {
          if (feature.properties.title) {
            layer.bindPopup("<b>" + feature.properties.title + "</b><br>" + feature.properties.desc);
          }
          if (feature.properties.skip !== true) { // || true) { // för att visa andra stigar
            eval("groups." + feature.properties.group).addLayer(layer);
          }
        },
        pointToLayer: function (feature, latlng) {
          if (feature.properties.icon) {
            thisMarker = L.marker(latlng, {
              icon: eval("icons." + feature.properties.icon),
            });
          } else {
            thisMarker = L.marker(latlng, {
            });
          }
          return thisMarker;
        },

        style: function (feature) {
          switch (feature.properties.type) {

            case "ditch_closed": {
              return STYLES.ditch_closed;
              break;
            }
            case "ditch_open": {
              return STYLES.ditch_open;
              break;
            }
          }
        }
      });
    })
    .catch(error => {
      console.error('Error loading GeoJSON from', source + ':', error);
    });
});

// Config for the layer controls
var options = {
  closedSymbol: '<i style="font-size: 11pt">&#x25b6</i>',
  openedSymbol: '<i style="font-size: 14pt">&#x25bc</i>',
  spaceSymbol: " ",
  selectorBack: false,
  namedToggle: false,
  collapseAll: "Kollapsa alla",
  expandAll: "Expandera alla",
  labelIsSelector: "both"
};

// Exported windows
window.MapLayers = {
  OverlaysTree: overlaysTree,
  BaseTree: baseTree,
  Basemaps: basemaps,
  Options: options
}
