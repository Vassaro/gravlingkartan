// Helper functions to simplify other code

// Defines allowed types for later error checking
var allowedGeometryTypes = [
  "Point", 
  "LineString", 
  "Polygon"
];

var allowedTypes = [
  "ditch_closed", 
  "ditch_open", 
  "ditch_ongoing"
];


/** Defines styles for layers
  * @param {"ditch_open" | "ditch_closed" | "ditch_ongoing"} type 
  * @returns {object} options 
*/
function styleLayer(type) {
  var options = {};
  switch (type) {

    case "ditch_closed": {
      options = {
        dasharray: "2, 10",
        color: "#33ccff",
        weight: 5,
        opacity: 0
      };
      break;
    }

    case "ditch_open": {
      options = {
        color: "#3388ff",
        weight: 5,
        opacity: 1
      };
      break;
    }

    case "ditch_ongoing": {
      options = {
        dashArray: "2, 10",
        color: "#cc0000",
        weight: 5,
        opacity: 0 
      };
      break;
    }
  }

  return options;
}


/** Specifies options for type of geometry
  *
  * @param{L.layer} layer
  * @param{"ditch_open" | "ditch_closed" | "ditch_ongoing"} type
  * @returns {object} Options for polylineDecorator()
  */
function polylineDecoratorOptions(layer, type) {
  switch (type) {

    case "ditch_closed": {
      return {
        patterns: [
          {
            offset: 0, 
            repeat: 20, 
            symbol: L.Symbol.dash({ pixelSize: 10 })
          },
      
          {
            offset: 0,
            repeat: 80,
            symbol: L.Symbol.arrowHead({
              pixelSize: 10,
              polygon: false,
              pathOptions: { color: "#3388ff" }
            })
          }
        ]
      };
      break;
    }
    
    case "ditch_open": {
      return {
        patterns: [
          {
            offset: 0, 
            repeat: 80, 
            symbol: L.Symbol.arrowHead({ 
              pixelSize: 10,
              polygon: false,
              pathOptions: { stroke: true, color: "#3388ff" }
            })
          }
        ]
      };
      break;
    }

    case "ditch_ongoing": {
      return {
        patterns: [
          {
            offset: 0, 
            repeat: 20, 
            symbol: L.Symbol.dash({ 
              pixelSize: 10,
              pathOptions: { color: "#cc0000"}
            })
          }
        ]
      };
      break;
    }
  }
}


/** Returns a decorator given a layer, if the geometry and type is valid
  *
  * @param {L.layer} layer
  * @param {"ditch_open" | "ditch_closed" | "ditch_ongoing"} type - the feature type 
  * @param {"Point", "LineString", "Polygon"} geometryType - the GeoJSON geometry type 
  * @returns {L.polyline | undefined}
  */
function decorateLayer(layer, type, geometryType) {

  if (!allowedGeometryTypes.includes(geometryType)) {
    throw new Error("The GeoJSON geometry type", geometryType, "is not allowed for this function!");
    return;
  }

  if (!allowedTypes.includes(type)) {
    throw new Error(type, "is not a valid feature type!");
    return;
  }

  if (geometryType === "LineString") {
    return L.polylineDecorator(layer, polylineDecoratorOptions(layer, type));
  }
}
