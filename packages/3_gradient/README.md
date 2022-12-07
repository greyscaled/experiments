# 3 Gradient

Conceived on: 2022-12-06

## Description

I'm visualizing a large shape on a canvas (ex: Triangle). There are rectangular
stripes running horizontally through the canvas. The shape asks as a "mask", as
in we cannot see these stripes unless they're running underneath the shape. The
shape should therefore have an opaque stroke, and transparent fill. The stripes
are a gradient of a color such that as they run (from right to left), the color
gradually darkens or lightens.

### Specification

1. "Stripes" are a long reel of a color, representing the full spectrum of its
   gradient from absolute `#ffffff` to absolute `#000000`.
2. Adjacent stripes are not related in color or position; that stripe a may be
   running through a gradient of purple starting from its lightest shade while
   stripe b may be running through a gradient of yellow from its darkest shade.
   They may be at different positions in their reels.
3. While a stripe is running through a color, it has constant velocity.
4. When a stripe reaches the end of a color, it selects a new color and
   reverses. That is, it goes from light to dark to light.
5. Stripes running from dark to light run left to right.
6. Stripes running from light to dark run right to left.
7. When a stripe selects a new color to run, its velocity may be updated but
   otherwise remains fixed until the next selection.
8. There is a minimum velocity above 0 whereby a color will take at most 60
   seconds to complete.
9. There is a maximum velocity such that a color will take at least 10 seconds
   to complete.
10. Velocities need not be integers, and the change in velocity need not be
    smooth.

#### Look & Feel

This is a colourful project. It should be vibrant. The shape should be large but
not so large as to cover the entire width or height of the canvas.

##### Ambience

The non-masked area of the canvas, in an ideal implementation, may resemble a
dark but starry night with twinkling stars. One such inspiration for this piece
is Pink Floyd's Dark Side of the Moon.

## Alternatives

None known yet.
