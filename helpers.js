// Helper functions to simplify other code
function styleLayer(type) {
  switch (type) {

    case "ditch_closed": {
      return {
        dasharray: "2, 10",
        color: "#33ccff",
        weight: 5,
        opacity: 0
      };
      break;
    }

    case "ditch_open": {
      return {
        color: "#3388ff",
        weight: 5,
        opacity: 1
      };
      break;
    }

    case "ditch_ongoing": {
      return {
        dashArray: "2, 10",
        color: "#cc0000",
        weight: 5,
        opacity: 0 
      };
      break;
    }
  }
}

// This function defines objects containing options for polylineDecorator 
function polylineDecoratorOptinons(layer, type) {
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

// Constructs a decorator using a given polyline and
function decorateLayer(layer, type, geometryType) {

  if (geometryType == "LineString") {
    return L.polylineDecorator(layer, polylineDecoratorOptions(layer, type));
  }

}
