// Helper functions to simplify other code
function styleLine(type) {
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


function decorateLine(layer, type) {
  switch (type) {

    case "ditch_closed": {
      layer.setText(" ⯈ ", { repeat: true, attributes: { fill: "#0099ff" }});
      break;
    }

    case "ditch_open": {
      layer.setText(" ⯈ ", { repeat: true, attributes: { fill: "#0099ff" }});
      break;
    }
  }
}
