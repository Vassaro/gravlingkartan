// Helper functions to simplify other code

// Defines allowed GeoJSON geometry types for later error checking
const VALID_GEOMETRY_TYPES = [
  "Point", 
  "LineString", 
  "Polygon"
]

// Defines allowed types of features for error checking
const VALID_FEATURE_TYPES = [
  "ditch_closed", 
  "ditch_open", 
  "ditch_ongoing"
]

/** Defines styles for layers
  * @param {"ditch_open" | "ditch_closed" | "ditch_ongoing"} type 
  * @returns {object} options for PolylineDecorator
*/
function styleFeature (feature) {
  switch (feature.properties.type) {
    case "ditch_closed": return {
        dasharray: "2, 10",
        color: "#33ccff",
        weight: 5,
        opacity: 0
      }

    case "ditch_open": return {
        color: "#3388ff",
        weight: 5,
        opacity: 1
      }

    case "ditch_ongoing": return {
        dashArray: "2, 10",
        color: "#cc0000",
        weight: 5,
        opacity: 0 
      }
    
    default: return {}
  }
}

/** Specifies options for type of geometry
  *
  * @param {L.layer} layer
  * @param {"ditch_open" | "ditch_closed" | "ditch_ongoing"} type
  * @returns {Object} Options for polylineDecorator()
  */
function _polylineDecoratorOptions (layer, type) {
  switch (type) {
    case "ditch_closed": return {
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
      }
    
    case "ditch_open": return {
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
      }

    case "ditch_ongoing": return {
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
      }

    default: return {}
  }
}

/** Validates a layer for decoration 
  *
  * @param {"ditch_open" | "ditch_closed" | "ditch_ongoing"} featureType - the type of feature, e.g. ditch, waterline, fibre-optic cable.
  * @param {"Point" | "LineString" | "Polygon"} geometryType - the GeoJSON geometry type
  */
L.Layer.prototype._validateDecoration = function (featureType, geometryType) {
  // Check that the geometry type is allowed 
  if (!VALID_GEOMETRY_TYPES.includes(geometryType)) {
    throw new Error(`The GeoJSON geometry type ${geometryType} is not allowed for this function!`)
  }

  // Check that the type of feature is allowed 
  if (!VALID_FEATURE_TYPES.includes(featureType)) {
    throw new Error(`${featureType} is not a valid feature type!`)
  }
}

/** Returns a decorator given a layer, if the geometry and type is valid
  *
  * @param {"ditch_open" | "ditch_closed" | "ditch_ongoing"} featureType - the type of feature, e.g. ditch, waterline, fibre-optic cable.
  * @param {"Point" | "LineString" | "Polygon"} geometryType - the GeoJSON geometry type 
  * @returns {L.Polyline | undefined}
  */
L.Layer.prototype.decorate = function (featureType, geometryType) {
  this._validateDecoration(featureType, geometryType)
  
  switch (geometryType) {
    case "Point":
      // TODO
      return undefined

    case "LineString":
      return L.polylineDecorator(this, _polylineDecoratorOptions(this, featureType))
    
    case "Polygon":
      // TODO
      return undefined

    default: return undefined
  }
}
