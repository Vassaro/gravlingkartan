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
        color: "#33ccff",
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


function decorateLayer(layer, type) {
  console.log("DECORATED");
  switch (type) {

    case "ditch_closed": {
      layer.setText(" ► ", { repeat: true, attributes: { fill: "#0099ff" }});
      break;
    }

    case "ditch_open": {
      layer.setText(" ► ", { repeat: true, attributes: { fill: "#0099ff" }});
      break;
    }

    case "ditch_ongoing": {
      layer.setText(" ► ", { repeat: true, attributes: { fill: "#cc0000" }});
      break;
    }
  }
}
