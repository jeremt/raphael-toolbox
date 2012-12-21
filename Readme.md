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

License
-------

(The MIT License)

Copyright (c) 2012 Jeremie T. <taboada.jeremie@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.