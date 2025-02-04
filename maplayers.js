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

// Define groups
var groups = {
  // Ditches 
  
  // WEST MELLAN 
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
  mvg1: new L.LayerGroup(),

  // EAST MELLAN
  mea1: new L.LayerGroup(),
  mea2: new L.LayerGroup(),
  mea3: new L.LayerGroup(),
  mea4: new L.LayerGroup(),
  mea5: new L.LayerGroup(),
  mea6: new L.LayerGroup(),
  mea7: new L.LayerGroup(),
  mea8: new L.LayerGroup(),
  mea9: new L.LayerGroup(),
  mea10: new L.LayerGroup(),
  meb1: new L.LayerGroup(),
  mec1: new L.LayerGroup(),
  mec2: new L.LayerGroup(),
  med1: new L.LayerGroup(),
  mee1: new L.LayerGroup(),


  // CENTRAL
  ca1: new L.LayerGroup(),
  ca2: new L.LayerGroup(),
  ca3: new L.LayerGroup(),
  ca4: new L.LayerGroup(),
  ca5: new L.LayerGroup(),
  ca6: new L.LayerGroup(),
  ca7: new L.LayerGroup(),
  ca8: new L.LayerGroup(),
  ca9: new L.LayerGroup(),
  ca10: new L.LayerGroup(),
  ca11: new L.LayerGroup(),
  ca12: new L.LayerGroup(),
  ca13: new L.LayerGroup(),
  ca14: new L.LayerGroup(),
  ca15: new L.LayerGroup(),
  ca16: new L.LayerGroup(),
  ca17: new L.LayerGroup(),
  ca18: new L.LayerGroup(),
  cb1: new L.LayerGroup(),
  cb2: new L.LayerGroup(),
  cb3: new L.LayerGroup(),
  cc1: new L.LayerGroup(),
  cc2: new L.LayerGroup(),
  cc3: new L.LayerGroup(),
  cc4: new L.LayerGroup(),
  cc5: new L.LayerGroup(),
  cd1: new L.LayerGroup(),
  ce1: new L.LayerGroup(),
  ce2: new L.LayerGroup(),
  ce3: new L.LayerGroup(),
  cf1: new L.LayerGroup(),
  cf2: new L.LayerGroup(),
  cf3: new L.LayerGroup(),
  cf4: new L.LayerGroup(),
  cf5: new L.LayerGroup(),
  cf6: new L.LayerGroup(),
  cg1: new L.LayerGroup(),
  cg2: new L.LayerGroup(),
  cg3: new L.LayerGroup(),
  ch1: new L.LayerGroup(),
  ch2: new L.LayerGroup(),
  ch3: new L.LayerGroup(),
  ch4: new L.LayerGroup(),
  ci1: new L.LayerGroup(),
  ci2: new L.LayerGroup(),

  // OTHERS
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

            // Ditch g 
            { label: "G", layer: groups.mvg1 },
          ]},


          // Östra mellanängarna
          { label: "Östra", selectAllCheckbox: true, collapsed: true, children: [

            // Ditch A 
            { label: "A", selectAllCheckbox: true, collapsed: true, children: [
              { label: "A1", layer: groups.mea1 },
              { label: "A2", layer: groups.mea2 },
              { label: "A3", layer: groups.mea3 },
              { label: "A4", layer: groups.mea4 },
              { label: "a5", layer: groups.mea5 },
              { label: "A6", layer: groups.mea6 },
              { label: "A7", layer: groups.mea7 },
              { label: "a8", layer: groups.mea8 },
              { label: "A9", layer: groups.mea9 },
              { label: "A10", layer: groups.mea10 },
            ]},

            // Ditch B 
            { label: "B", layer: groups.meb1 },

            // Ditch C 
            { label: "C", selectAllCheckbox: true, collapsed: true, children: [
              { label: "C1", layer: groups.mec1 },
              { label: "C2", layer: groups.mec2 },
            ]},

            // Ditch D 
            { label: "D", layer: groups.med1 },

            // Ditch E 
            { label: "E", layer: groups.mee1 },
          ]},


        ]},



        // CENTRAL 
        { label: "Centrala Ängarna", selectAllCheckbox: true, collapsed: true, children: [
          

          { label: "A", selectAllCheckbox: true, collapsed: true, children: [
          
            { label: "a1", layer: groups.ca1 },
            { label: "A2", layer: groups.ca2 },
            { label: "A3", layer: groups.ca3 },
            { label: "A4", layer: groups.ca4 },
            { label: "A5", layer: groups.ca5 },
            { label: "A6", layer: groups.ca6 },
            { label: "A7", layer: groups.ca7 },
            { label: "A8", layer: groups.ca8 },
            { label: "a9", layer: groups.ca9 },
            { label: "A10", layer: groups.ca10 },
            { label: "A11", layer: groups.ca11 },
            { label: "A12", layer: groups.ca12 },
            { label: "A13", layer: groups.ca13 },
            { label: "a14", layer: groups.ca14 },
            { label: "A15", layer: groups.ca15 },
            { label: "A16", layer: groups.ca16 },
            { label: "A17", layer: groups.ca17 },
            { label: "A18", layer: groups.ca18 },
          
          ]},
          

          { label: "B", selectAllCheckbox: true, collapsed: true, children: [

            { label: "B1", layer: groups.cb1 },
            { label: "b2", layer: groups.cb2 },
            { label: "B3", layer: groups.cb3 },
          
          ]},


          { label: "C", selectAllCheckbox: true, collapsed: true, children: [

            { label: "C1", layer: groups.cc1 },
            { label: "c2", layer: groups.cc2 },
            { label: "C3", layer: groups.cc3 },
            { label: "c4", leyer: groups.cc4 },
            { label: "C5", layer: groups.cc5 },

          ]},


          { label: "D", layer: groups.cd1 },


          { label: "E", selectAllCheckbox: true, collapsed: true, children: [

            { label: "E1", layer: groups.ce1 },
            { label: "e2", layer: groups.ce2 },
            { label: "E3", layer: groups.ce3 },

          ]},


          { label: "F", selectAllCheckbox: true, collapsed: true, children: [

            { label: "F1", layer: groups.cf1 },
            { label: "F2", layer: groups.cf2 },
            { label: "F3", layer: groups.cf3 },
            { label: "f4", layer: groups.cf4 },
            { label: "F5", layer: groups.cf5 },
            { label: "F6", layer: groups.cf6 },

          ]},


          { label: "G", selectAllCheckbox: true, collapsed: true, children: [

            { label: "G1", layer: groups.cg1 },
            { label: "g2", layer: groups.cg2 },
            { label: "G3", layer: groups.cg3 },

          ]},

          
          { label: "H", selectAllCheckbox: true, collapsed: true, children: [

            { label: "h1", layer: groups.ch1 },
            { label: "H2", layer: groups.ch2 },
            { label: "h3", layer: groups.ch3 },
            { label: "H4", layer: groups.ch4 },

          ]},


          { label: "I", selectAllCheckbox: true, collapsed: true, children: [

            { label: "I1", layer: groups.ci1 },
            { label: "I2", layer: groups.ci2 },

          ]},
        ]}

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
  "data/ditches/fields/mellanangarna/mellanangarna-ostra.geojson",
  "data/ditches/fields/centralangarna/centralangarna.geojson",
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
