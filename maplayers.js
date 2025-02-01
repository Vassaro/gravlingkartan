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

// Define groups
var groups = {

  // Ditches 
  mva1: new L.LayerGroup(),
  mva2: new L.LayerGroup(),
  mva3: new L.LayerGroup(),
  mva4: new L.LayerGroup(),
  mva5: new L.LayerGroup(),
  mva6: new L.LayerGroup(),
  mvb1: new L.LayerGroup(),
  mvb2: new L.LayerGroup(),
  mvb3: new L.LayerGroup(),
  mvb4: new L.LayerGroup(),
  mvc1: new L.LayerGroup(),
  mvc2: new L.LayerGroup(),
  mvc3: new L.LayerGroup(),
  mvd1: new L.LayerGroup(),
  mve1: new L.LayerGroup(),
  mvf1: new L.LayerGroup(),
  toilets: new L.LayerGroup(),
  trashrooms: new L.LayerGroup(),
};

// Group the basemaps
var baseTree = {
    label: 'Kartbakgrunder',
    children: [
        { label: 'OpenStreetMap', layer: basemaps.OpenStreetMap },
        { label: 'Satellit', layer: basemaps.Satellit },
    ]
};

// Group maplayers
var overlaysTree = {
  label: "Kartfilter",
  selectAllCheckbox: 'Un/select all',
  children: [
    {
      // Ditches
      label: 'Diken',
      selectAllCheckbox: true,
      collapsed: true,
      children: [


        // Mellanängarna
        { label: 'Mellanängarna', selectAllCheckbox: true, collapsed: true, children: [

          // Västra mellanängarna
          { label: "Västra", selectAllCheckbox: true, collapsed: true, children: [
            // Ditch A
            { label: "A", selectAllCheckbox: true, collapsed: true, children: [
              { label: "A1", layer: groups.mva1 },
              { label: "A2", layer: groups.mva2 },
              { label: "A3", layer: groups.mva3 },
              { label: "A4", layer: groups.mva4 },
              { label: "a5", layer: groups.mva5 },
              { label: "A6", layer: groups.mva6 },
            ]},
            // Ditch B
            { label: "B", selectAllCheckbox: true, collapsed: true, children: [
              { label: "B1", layer: groups.mvb1 },
              { label: "B2", layer: groups.mvb2 },
              { label: "B3", layer: groups.mvb3 },
              { label: "B4", layer: groups.mvb4 },
            ]},
            // Ditch C 
            { label: "C", selectAllCheckbox: true, collapsed: true, children: [
              { label: "C1", layer: groups.mvc1 },
              { label: "C2", layer: groups.mvc2 },
              { label: "c3", layer: groups.mvc3 },
            ]},
            //  Ditch D 
            { label: "D", layer: groups.mvd1 },
            //  Ditch e 
            { label: "e", layer: groups.mve1 },
            //  Ditch f 
            { label: "f", layer: groups.mvf1 },
          ]},

        ]},

    ]},
        {
            label: "Annat",
            selectAllCheckbox: false,
            collapsed: false,
            children: [
		            { label: "Dass", layer: groups.toilets },
		            { label: "Soprum", layer: groups.trashrooms },

            ]
            // "Lokaler": groups.bookablerooms,
            // "Områden": groups.areas,
        }
    ]
}

// List the sources for GeoJSON-data
var sources = [
  "data/ditches/fields/mellanangarna/mellanangarna-vastra.geojson",
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
                    return {
                        color: feature.properties.color,
                        weight: 7,
                        opacity: 1,
                    };
                }
            });
        })
        .catch(error => {
            console.error('Error loading GeoJSON:', error);
        });
});

// Config for the layer controls
var options = {
    closedSymbol: "&#10010;",
    openedSymbol: "<b>&minus;</b>",
    spaceSymbol: " ",
    selectorBack: false,
    namedToggle: false,
    collapseAll: "Kollapsa alla",
    expandAll: "Expandera alla",
    labelIsSelector: "both"
};

// Exported windows
window.MapLayers = {
    BaseTree: baseTree,
    OverlaysTree: overlaysTree,
    Basemaps: basemaps,
    Options: options
}
