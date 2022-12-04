export interface Coordinate {
    x: number
    y: number
}

/**
 * getVectors returns a set of "Y-Vectors". Each vector is a set of co-ordinates
 * that move down a semi-straight line from y_min to y_max. The return looks
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
    for (let x = 5; x < 300; x += 5) {
        vectors.push([])

        for (let y = 0; y <= 500; y += 5) {
            vectors[i].push({ x, y })
        }

        i++
    }

    return vectors
}

export default getVectors
