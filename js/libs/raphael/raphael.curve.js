var Raphael = Raphael || {};

/*
  Raphael.curve: Draw a curve from an array of points. You can choose
  the type, the color and the shape.

  @param {array} an array of pts ({x: value, y: value})
  @param {string} the type of the curve (smoothe, line...)
  @param {string} the color of the curve
  @param {string} the shape of each pts of the array
*/

var getPath = function (pts, type) {
  var path = "M ";
  var i = 0;

  path += pts[i].x + " " + pts[i].y;
  for (i = 0 ; i < pts.length ; i++) {
    path += " " + type + " " + pts[i].x + " " + pts[i].y;
  }
  return path;
};

Raphael.prototype.curve = function(pts, type, color, shape) {
  var curve = this.path(getPath(pts, type || "L"));

  for (var i = 0, l = pts.length ; i < l ; i++) {
    switch(shape) {
      case 'circle':
        this.circle(pts[i].x, pts[i].y, 2)
          .attr({"stroke": "none","fill": color});
        break;
      case 'rect':
        this.rect(pts[i].x - 2, pts[i].y - 2, 4, 4)
          .attr({"stroke": "none","fill": color});
        break;
      case 'cross':
        this.cross(pts[i].x - 4, pts[i].y - 4, 8, 8)
          .attr({"stroke": color});
        break;
      default:
        return console.log('Invalid shape: ' + shape);
    }
  }
  curve.attr("stroke", color);
};