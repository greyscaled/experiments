import getCoordinates, {
    CANVAS_HEIGHT,
    CANVAS_WIDTH,
    Coordinate,
    DELTA,
    getRandCoordinate,
} from "./getCoordinates"
import shuffleArray from "../util/shuffleArray"
import rng from "../util/rng"

export const nextCoord = (start: Coordinate): Coordinate => {
    // There are 8 possible directions from the start position.
    // We shuffle those possibilities and pop them off one-by-one
    // until we find one within bounds
    const possibilities: Coordinate[] = shuffleArray([
        // Diagonal up left
        {
            x: start.x - DELTA,
            y: start.y - DELTA,
        },
        // Up
        {
            x: start.x,
            y: start.y - DELTA,
        },
        // Diagonal up right
        {
            x: start.x + DELTA,
            y: start.y - DELTA,
        },
        // Right
        {
            x: start.x + DELTA,
            y: start.y,
        },
        // Diagonal down right
        {
            x: start.x + DELTA,
            y: start.y + DELTA,
        },
        // Down
        {
            x: start.x,
            y: start.y + DELTA,
        },
        // Diagonal down left
        {
            x: start.x - DELTA,
            y: start.y + DELTA,
        },
        // Left
        {
            x: start.x - DELTA,
            y: start.y,
        },
    ])

    // If we run out of possibilities, we throw an error
    while (possibilities.length > 0) {
        const possibility = possibilities.pop()

        if (!possibility) {
            // Theoretically impossible, just to appease TypeScript
            throw new Error(`nextCoord not possible from: ${start}`)
        }

        if (
            possibility.x >= DELTA &&
            possibility.x <= CANVAS_WIDTH - DELTA &&
            possibility.y >= DELTA &&
            possibility.y <= CANVAS_HEIGHT - DELTA
        ) {
            return possibility
        }
    }

    throw new Error(`nextCoord not possible from: ${start}`)
}

const generatePath = (): Coordinate[] => {
    const startCoord = getRandCoordinate(getCoordinates())
    const path = [startCoord]

    let currentCoord = startCoord
    for (let move = 0; move < rng(3, 20); move++) {
        currentCoord = nextCoord(currentCoord)
        path.push(currentCoord)
    }

    return path
}

export default generatePath
