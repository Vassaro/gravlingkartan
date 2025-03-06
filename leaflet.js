// Create the maps with restrictions on zoom
var lfmap = L.map('map', {
  center: [60.25542, 18.69360],
  zoom: 16,
  minZoom: 12,
  layers: [window.MapLayers.Basemaps.OpenStreetMap],
});

// Define the map's edges (a bit outside VÖ, Garpen, Bodskären)-->
var southWest = L.latLng(60.0, 18.5);
var northEast = L.latLng(60.4, 19.0);
var bounds = L.latLngBounds(southWest, northEast);
lfmap.setMaxBounds(bounds);
lfmap.on('drag', function () {
  lfmap.panInsideBounds(bounds, { animate: false });
});

var layerControl = L.control.layers.tree(null, window.MapLayers.OverlaysTree, window.MapLayers.Options).addTo(lfmap);

var sidebar = L.control.sidebar('sidebar').addTo(lfmap);

var fullscreen = L.control.fullscreen({
  title: {
    "true": "Fullskärmsläge",
    "false": "Återgå till normalläge"
  }
}).addTo(lfmap);

// Configs and activation of location function - https://github.com/domoritz/leaflet-locatecontrol - For settings of locate.
var lc = L.control
  .locate({
    strings: {
      title: "Visar din nuvarande position!"
    }
  }).addTo(lfmap);

var zoom = L.control.zoom().addTo(lfmap);

var scale = L.control.scale({
  position: "bottomright",
  metric: true,
}).addTo(lfmap);

var objects = [fullscreen, lc, zoom];
var buttonbox = document.getElementById("button-box");
var filterbox = document.getElementById("filter-box");
function setParent(child, newParent) {
  newParent.appendChild(child.getContainer());
};
objects.forEach(element => {
  setParent(element, buttonbox);
});
setParent(layerControl, filterbox);


// Switch Basemaps
if (document.querySelector('input[name="selectBackground"]')) {
  document.querySelectorAll('input[name="selectBackground"]').forEach((elem) => {
    elem.addEventListener("change", function (event) {
      var item = event.target.value;
      for (let key in MapLayers.Basemaps) {
        eval("MapLayers.Basemaps." + key).remove();
      };
      eval("MapLayers.Basemaps." + item).addTo(lfmap);
    });
  });
}

