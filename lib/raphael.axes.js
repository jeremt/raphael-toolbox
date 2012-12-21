
/**
 * Similar to the grid method. This one draw x and y axes according
 * to a size, a position, and a proportion
 *
 * @param {Number} the x position
 * @param {Number} the y position
 * @param {Number} the height of the grid
 * @param {Number} the height of the grid
 * @param {Number} the x proportion
 * @param {Number} the y proportion
 */

Raphael.fn.axes = function(x, y, w, h, nx, ny) {
  var axes = this.set()
    , px = width / nx
    , py = height / ny

  axes.push(this.rect((w - x) / 2, y, 1, h))
  axes.push(this.rect(x, (h - y) / 2, w, 1))
  axes.push(this.text((w - x) / 2 + 10, (h - y) / 2 + 10, "0"))
  axes.push(this.rect())
  axes.push(this.text((w - x) / 2 + px + 10, (h - y) / 2 + 10, "1"))
  axes.push(this.text((w - x) / 2 + 10, (h - y) / 2 - py + 10, "1"))
  return axes
}
