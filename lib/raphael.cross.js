
/**
 * Draw a simple cross according a position and a size.
 *
 * @param {Number} the x position
 * @param {Number} the y position
 * @param {Number} the width
 * @param {Number} the height
 */

Raphael.fn.cross = function(x, y, w, h) {
  return this.set().push(
    this.path("M " + x + " " + y + " L " + (x + w) + " " + (y + h)),
    this.path("M " + (x + w) + " " + y + " L " + x + " " + (y + h))
  )
}
