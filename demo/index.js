var width = $('#paper').width()
	, height = $('#paper').height()
	, paper = Raphael("paper", width, height)
	, color = "#222"
	, pts = [
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
]

$(window).resize(function () {
	var w = $('#paper').width()
		, h = $('#paper').height()
		, sq = paper.equation(Math.cos, -20, 20, w, h, 0.8)

	paper.setSize(w, h)
	paper.clear()

	paper.grid(0, 0, w, h, 20, 20).attr({
	  "stroke" : "none",
	  "fill"   : "silver"
	})

	paper.axes(0, 0, w, h, 20, 20).attr({
	  "stroke" : "none",
	  "fill"   : "gray"
	})

	paper.curve(sq, "L", color, "cross")

}).resize()