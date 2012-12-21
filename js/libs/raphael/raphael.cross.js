var Raphael = Raphael || {};

/*
	Raphael.cross: Draw a simple cross according a position and a size.

	@param {integer} the x position
	@param {integer} the y position
	@param {integer} the width
	@param {integer} the height
*/

Raphael.prototype.cross = function(x, y, w, h) {
  var cross = this.set();

  cross.push(
    this.path("M " + x + " " + y + " L " + (x + w) + " " + (y + h)),
    this.path("M " + (x + w) + " " + y + " L " + x + " " + (y + h))
  );
  return cross;
};