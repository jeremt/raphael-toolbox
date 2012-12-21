Raphael Toolbox
===============

Simple set of useful raphael tools to draw mathematical curve with vectors.

Demo
----

View the demo [here](http://jeremiet.github.com/raphael-toolbox).

Api
---

### Raphael#axes(x, y, w, h, nx, ny)

Similar to the grid method. This one draw x and y axes according to a size, a position, and a proportion.

#### Arguments

- the x position
- the y position
- the height of the grid
- the height of the grid
- the x proportion
- the y proportion

### Raphael#cross(x, y, w, h)

Draw a simple cross according a position and a size.

#### Arguments

- the x position
- the y position
- the width
- the height

### Raphael#curve(pts, type, color, shape)

Draw a curve from an array of points. You can choose the type, the color and the shape.

#### Arguments

- an array of pts ({x: value, y: value})
- the type of the curve (smoothe, line...)
- the color of the curve
- the shape of each pts of the array

### Raphael#equation(equa, min, max, width, height, precision)

Generates a points array from an equation (_ex: y = ax + b_). The result is between a min and max x.

#### Arguments

- the equation function
- the minimal x position
- the maximal x position
- the width of the grid
- the height of the grid
- the precision of the curve (0 --> 1)

### Raphael#grid(x, y, w, h, nx, ny)

Generates a configurable grid.

#### Arguments

- the x position into the canvas
- the y position into the canvas
- the width of the grid
- the height of the grid
- the horizontal step between each line
- the vertical step between each line