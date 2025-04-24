// Define links to basemaps, attribution, and zoom properties 
const BASEMAPS = {
  OpenStreetMap: L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors.</a>.',
    maxNativeZoom: 18,
    maxZoom: 22,
  }),
  Satellit: L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
  })
};


// Group the basemaps
const BASETREE = {
  label: 'Kartbakgrunder',
  children: [
    { label: 'OpenStreetMap', layer: BASEMAPS.OpenStreetMap },
    { label: 'Satellit', layer: BASEMAPS.Satellit },
  ]
};

// List the sources for GeoJSON-data
var sources = [
  "data/ditches/fields/mellanangarna-vastra.geojson",
  "data/ditches/fields/mellanangarna-ostra.geojson",
  "data/ditches/fields/centralangarna.geojson",
  "data/ditches/fields/ostra.geojson",
  "data/ditches/fields/norra.geojson",
  "data/ditches/roads.geojson",
  "data/ongoing.geojson",
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
            const GROUP = GROUPS[feature.properties.group];
            GROUP.addLayer(layer);
            const DECORATOR = layer.decorate(feature.properties.type, feature.geometry.type);
            if (DECORATOR) GROUP.addLayer(DECORATOR);
          }
        },
        pointToLayer: function (feature, latlng) {
          if (feature.properties.icon) {
            thisMarker = L.marker(latlng, {
              icon: ICONS[feature.properties.icon],
            });
          } else {
            thisMarker = L.marker(latlng, {
            });
          }
          return thisMarker;
        },
        style: (feature) => styleFeature(feature)
      });
    })
    .catch(error => {
      console.error(`Error loading GeoJSON from ${source}: ${error}`);
    });
});

// Config for the layer controls
const OPTIONS = {
  closedSymbol: '<i class="fa fa-solid fa-chevron-right"></i>',
  openedSymbol: '<i class="fa fa-solid fa-chevron-down"></i>',
  selectorBack: false,
  namedToggle: false,
  labelIsSelector: "both",
  collapsed: false,
};

// Exported windows
window.MapLayers = {
  OverlaysTree: OVERLAYS_TREE,
  BaseTree: BASETREE,
  Basemaps: BASEMAPS,
  Options: OPTIONS,
}
