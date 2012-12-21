
/**
 * Raphael.grid Generates a configurable grid.
 *
 * @param {integer} the x position into the canvas
 * @param {integer} the y position into the canvas
 * @param {integer} the width of the grid
 * @param {integer} the height of the grid
 * @param {integer} the horizontal step between each line
 * @param {integer} the vertical step between each line
*/

Raphael.prototype.grid = function(x, y, w, h, nx, ny) {
  var grid = this.set();

  for (var i = x ; i < w ; i += w / nx)
    grid.push(this.rect(i, y, 1, h));
  for (i = y ; i < h ; i += h / ny)
    grid.push(this.rect(x, i, w, 1));
  return grid;
}