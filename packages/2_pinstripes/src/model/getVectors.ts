import rng from "../util/rng"

/**
 * CANVAS_WIDTH is the fixed width of the canvas
 */
export const CANVAS_WIDTH = 300

/**
 * CANVAS_HEIGHT is the fixed height of the canvas
 */
export const CANVAS_HEIGHT = 500

/**
 * Coordinate is a point in 2D space; there is an x and y value. While this
 * interface is agnostic of planes and grids, it's worth noting that the origin
 * (0, 0) of a canvas is top left, and both x and y values are positive.
 */
export interface Coordinate {
    x: number
    y: number
}

/**
 * X_MIN is the minimum x value for any coordinate
 */
export const X_MIN = 5

/**
 * X_MAX is the maximum x value for any coordinate
 */
export const X_MAX = 295

/**
 * Y_MIN is the minimum y value for any coordinate
 */
export const Y_MIN = 0

/**
 * Y_MAX is the maximum y value for any coordinate
 */
export const Y_MAX = 500

/**
 * X_DELTA is the distance from x0 to x1 for a pair of adjacenet coordinates in
 * the x direction (ie: horizontal)
 */
export const X_DELTA = 5

/**
 * Y_DELTA is the distance from y0 to y1 for a pair of adjacent
 * coordinates in the y direction (ie: vertical)
 */
export const Y_DELTA = 15

/**
 * getVectors returns a set of "Y-Vectors". Each vector is a set of co-ordinates
 * that move down a semi-straight line from Y_MIN to Y_MAX. The return looks
 * like:
 *
 * ```
 * [
 *  [{x:5, y:0}...{x:5, y:500}],
 *  ...,
 *  [{x:295, y:0}...{x:295, y:500}],
 * ]
 * ```
 */
const getVectors = (): Coordinate[][] => {
    const vectors: Coordinate[][] = []

    let i = 0
    for (let x = X_MIN; x <= X_MAX; x += X_DELTA) {
        vectors.push([])

        for (let y = Y_MIN; y <= Y_MAX; y += Y_DELTA) {
            const xWithNoise = rng(
                Math.max(X_MIN, x - 1),
                Math.min(X_MAX, x + 1)
            )
            vectors[i].push({ x: xWithNoise, y })
        }

        i++
    }

    return vectors
}

export default getVectors
