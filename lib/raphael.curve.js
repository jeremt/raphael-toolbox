
/**
 * Draw a curve from an array of points. You can choose the type,
 * the color and the shape.
 *
 * @param {Array} an array of pts ({x: value, y: value})
 * @param {String} the type of the curve (smoothe, line...)
 * @param {String} the color of the curve
 * @param {String} the shape of each pts of the array
 */

Raphael.fn.curve = function(pts, type, color, shape) {

  // Create path from pts

  var path = (function (pts, type) {
    var path = "M "
    var i = 0

    path += pts[i].x + " " + pts[i].y
    for (i = 0 ; i < pts.length ; i++) {
      path += " " + type + " " + pts[i].x + " " + pts[i].y
    }
    return path
  })(pts, type || "L")

  // Draw points

  for (var i = 0, l = pts.length ; i < l ; i++) {
    switch(shape) {
      case 'circle':
        this.circle(pts[i].x, pts[i].y, 2)
          .attr({"stroke": "none","fill": color})
        break;
      case 'rect':
        this.rect(pts[i].x - 2, pts[i].y - 2, 4, 4)
          .attr({"stroke": "none","fill": color})
        break;
      case 'cross':
        this.cross(pts[i].x - 4, pts[i].y - 4, 8, 8)
          .attr({"stroke": color})
        break;
      default:
        return console.warn('Invalid shape: ' + shape)
    }
  }

  // Draw curve

  return this.path(path).attr("stroke", color)
}
