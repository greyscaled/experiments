/**
 * CANVAS_WIDTH is the width of the canvas element, ie: the maximum 'x' we can
 * draw to.
 *
 * @todo Canvas is fixed dimensions; nice-to-have responsive resizing
 */
export const CANVAS_WIDTH = 300

/**
 * CANVAS_HEIGHT is the height of the canvas element, ie: the maximum 'y' we can
 * draw to.
 *
 * @todo Canvas is fixed dimensions; nice-to-have responsive resizing
 */
export const CANVAS_HEIGHT = 500

/**
 * DELTA represents the distance between X1 X2 and Y1 Y2 for any given adjacent
 * set of coordinates
 *
 * @todo Canvas is fixed dimensions; nice-to-have responsive resizing
 */
export const DELTA = 20

export interface Coordinate {
    x: number
    y: number
}

/**
 * getCoordinates returns all coordinates that may act as the centre of circles
 * or connection points for lines. The return looks like:
 *
 * ```
 * [
 *  [{x: 20, y: 20}, ..., {x: 280, y: 20}],
 *  ...,
 *  [{x: 20, y: 480}, ..., {x: 280, y: 480}],
 * ]
 * ```
 *
 * @todo Canvas is fixed dimensions; nice-to-have responsive resizing
 */
const getCoordinates = (): Coordinate[][] => {
    const coordinates: Coordinate[][] = []

    let i = 0
    for (let y = DELTA; y <= CANVAS_HEIGHT - DELTA; y += DELTA) {
        coordinates.push([])

        for (let x = DELTA; x <= CANVAS_WIDTH - DELTA; x += DELTA) {
            coordinates[i].push({ x, y })
        }

        i++
    }

    return coordinates
}

export default getCoordinates
