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
  }
}


function decorateLayer(layer, type) {
  switch (type) {

    case "ditch_closed": {
      layer.setText(' ► ', { repeat: true, attributes: { bold: true, fill: "#0099ff" }});
      break;
    }

    case "ditch_open": {
      layer.setText(' ► ', { centered: true, repeat: true, attributes: { bold: true, fill: "#0099ff"}});
      break;
    }
  }
}
