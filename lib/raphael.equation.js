
/**
 * Generates a points array from an equation (ex: y = ax + b).
 * The result is between a min and max x.
 *
 * @param {Function} the equation function
 * @param {Number} the minimal x position
 * @param {Number} the maximal x position
 * @param {Number} the width of the grid
 * @param {Number} the height of the grid
 * @param {Float} the precision of the curve (0 --> 1)
 */

Raphael.prototype.equation = function(equa, min, max, width, height, precision) {
  var pts = []
    , i = 0
    , px = width / (max - min)
    , py = height / (max - min)

  precision || (precision = 0.1)

  for (var x = min ; x < max ; x += precision) {
    pts[i++] = {
      x: (x * px) + (width >> 1),
      y: height - equa(x) * py - (height >> 1)
    }
  }
  return pts
}
