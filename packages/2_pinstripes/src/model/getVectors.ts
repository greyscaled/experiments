import rng from "../util/rng"

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
const X_MIN = 5

/**
 * X_MAX is the maximum x value for any coordinate
 */
const X_MAX = 295

/**
 * Y_MIN is the minimum y value for any coordinate
 */
const Y_MIN = 0

/**
 * Y_MAX is the maximum y value for any coordinate
 */
const Y_MAX = 500

/**
 * X_DELTA is the distance from x0 to x1 for a pair of adjacenet coordinates in
 * the x direction (ie: horizontal)
 */
const X_DELTA = 10

/**
 * Y_DELTA is the distance from y0 to y1 for a pair of adjacent
 * coordinates in the y direction (ie: vertical)
 */
const Y_DELTA = 5

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
            const xWithNoise = rng(Math.max(0, x - 1), x + 1)
            vectors[i].push({ x: xWithNoise, y })
        }

        i++
    }

    return vectors
}

export default getVectors
