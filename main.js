// Create the maps with restrictions on ZOOM
var lfmap = L.map('map', {
  center: [60.25542, 18.69360],
  zoom: 16,
  minZoom: 12,
  layers: [window.MapLayers.Basemaps.OpenStreetMap],
  zoomControl: false,
})

// Define the map's edges (a bit outside VÖ, Garpen, Bodskären)-->
const SOUTH_WEST = L.latLng(60.0, 18.5);
const NORTH_EAST = L.latLng(60.4, 19.0);
const BOUNDS = L.latLngBounds(SOUTH_WEST, NORTH_EAST)
lfmap.setMaxBounds(BOUNDS);
lfmap.on('drag', function () {
  lfmap.panInsideBounds(BOUNDS, { animate: false })
})

const LAYER_CONTROL = L.control.layers.tree(null, window.MapLayers.OverlaysTree, window.MapLayers.Options).addTo(lfmap)

const SIDEBAR = L.control.sidebar('sidebar').addTo(lfmap)

const FULLSCREEN = L.control.fullscreen({
  title: {
    "true": "Återgå till normalläge",
    "false": "Fullskärmsläge"
  }
}).addTo(lfmap)

// Configs and activation of location function - https://github.com/domoritz/leaflet-locatecontrol - For settings of locate.
const LC = L.control.locate({
  strings: {
    title: "Visar din nuvarande position!"
  }
}).addTo(lfmap)

const ZOOM = L.control.zoom().addTo(lfmap)

const SCALE = L.control.scale({
  position: "bottomright",
  metric: true,
}).addTo(lfmap)

const OBJECTS = [FULLSCREEN, LC, ZOOM];
const BUTTON_BOX = document.getElementById("button-box")
const FILTER_BOX = document.getElementById("filter-box")
function setParent(child, newParent) {
  newParent.appendChild(child.getContainer())
}
OBJECTS.forEach(element => {
  setParent(element, BUTTON_BOX)
});
setParent(LAYER_CONTROL, FILTER_BOX)

// Switch Basemaps
if (document.querySelector('input[name="selectBackground"]')) {
  document.querySelectorAll('input[name="selectBackground"]').forEach((elem) => {
    elem.addEventListener("change", function (event) {
      const ITEM = event.target.value
      for (let key in MapLayers.Basemaps) {
        MapLayers.Basemaps[key].remove()
      }
      MapLayers.Basemaps[ITEM].addTo(lfmap)
    })
  })
}

