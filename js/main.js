var paper, colors, color, width, height;

width 	= parseInt($('#canvas').css('width'), 10);
height 	= parseInt($('#canvas').css('height'), 10);
paper 	= Raphael("canvas", width, height);
colors 	= ["red", "teal", "green", "orange", "purple", "blue", "magenta"];
color 	= colors[Math.floor(Math.random() * colors.length)];

var pts = [
	{ x: 10, y: 100 },
	{ x: 50, y: 150 },
	{ x: 70, y: 10 },
	{ x: 120, y: 100 },
	{ x: 160, y:420 },
	{ x: 200, y: 520 },
	{ x: 250, y: 50 },
	{ x: 300, y: 200 },
	{ x: 420, y: 300 },
	{ x: 550, y: 580 }
];

var square = function (x) {
	return x * x;
};

var draw = function (w, h, color) {
	paper.setSize(w, h);
	paper.clear();

	paper.grid(0, 0, w, h, 20, 20).attr({
	  "stroke": "none",
	  "fill": "silver"
	});

	paper.axes(0, 0, w, h, 20, 20).attr({
	  "stroke": "none",
	  "fill": "gray"
	});

	var sq = paper.equation(Math.cos, -20, 20, w, h, 0.8);
	paper.curve(sq, "L", color, "circle");
};

draw(width, height, color);

$(window).resize(function () {
	width = parseInt($('#canvas').css('width'), 10);
	height = parseInt($('#canvas').css('height'), 10);
	draw(width, height, color);
});