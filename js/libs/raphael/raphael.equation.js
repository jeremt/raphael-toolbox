var Raphael = Raphael || {};

/*
  Raphael.equation Generates a points array from an equation (ex: y = ax + b).
  The result is between a min and max x.

  @param {function} the equation function
  @param {integer} the minimal x position
  @param {integer} the maximal x position
  @param {integer} the width of the grid
  @param {integer} the height of the grid
  @param {float} the precision of the curve
*/

Raphael.prototype.equation = function(equa, min, max, width, height, precision) {
  var pts, i, px, py;

  pts = [];
  i = 0;
  px = width / (max - min);
  py = height / (max - min);
  precision = precision || 0.1;

  for (var x = min ; x < max ; x += precision) {
    pts[i] = {
      x: (x * px) + width / 2,
      y: height - equa(x) * py - height / 2
    };
    ++i;
  }
  return pts;
};