import { MarkovChain } from "@vapurrmaid/markov-chain"
import { Coordinate } from "./getVectors"

const p0 = 0
const p4 = 1 / 4
const p6 = 1 / 6
const p9 = 1 / 9

const Values: Coordinate[] = [
    { x: 20, y: 20 },
    { x: 40, y: 20 },
    { x: 60, y: 20 },
    { x: 80, y: 20 },

    { x: 20, y: 40 },
    { x: 40, y: 40 },
    { x: 60, y: 40 },
    { x: 80, y: 40 },

    { x: 20, y: 60 },
    { x: 40, y: 60 },
    { x: 60, y: 60 },
    { x: 80, y: 60 },

    { x: 20, y: 80 },
    { x: 40, y: 80 },
    { x: 60, y: 80 },
    { x: 80, y: 80 },
]

const Probabilities: number[][] = [
    [p4, p4, p0, p0, p4, p4, p0, p0, p0, p0, p0, p0, p0, p0, p0, p0], //(0, 0)
    [p6, p6, p6, p0, p6, p6, p6, p0, p0, p0, p0, p0, p0, p0, p0, p0], // (1, 0)
    [p0, p6, p6, p6, p0, p6, p6, p6, p0, p0, p0, p0, p0, p0, p0, p0], // (2, 0)
    [p0, p0, p4, p4, p0, p0, p4, p4, p0, p0, p0, p0, p0, p0, p0, p0], // (3, 0)

    [p6, p6, p0, p0, p6, p6, p0, p0, p6, p6, p0, p0, p0, p0, p0, p0], // (0, 1)
    [p9, p9, p9, p0, p9, p9, p9, p0, p9, p9, p9, p0, p0, p0, p0, p0], // (1, 1)
    [p0, p9, p9, p9, p0, p9, p9, p9, p0, p9, p9, p9, p0, p0, p0, p0], // (2, 1)
    [p0, p0, p6, p6, p0, p0, p6, p6, p0, p0, p6, p6, p0, p0, p0, p0], // (3, 1)

    [p0, p0, p0, p0, p6, p6, p0, p0, p6, p6, p0, p0, p6, p6, p0, p0], // (0, 2)
    [p0, p0, p0, p0, p9, p9, p9, p0, p9, p9, p9, p0, p9, p9, p9, p0], // (1, 2)
    [p0, p0, p0, p0, p0, p9, p9, p9, p0, p9, p9, p9, p0, p9, p9, p9], // (2, 2)
    [p0, p0, p0, p0, p0, p0, p6, p6, p0, p0, p6, p6, p0, p0, p6, p6], // (3, 2)

    [p0, p0, p0, p0, p0, p0, p0, p0, p4, p4, p0, p0, p4, p4, p0, p0], // (0, 3)
    [p0, p0, p0, p0, p0, p0, p0, p0, p6, p6, p6, p0, p6, p6, p6, p0], // (1, 3)
    [p0, p0, p0, p0, p0, p0, p0, p0, p0, p6, p6, p6, p0, p6, p6, p6], // (2, 3)
    [p0, p0, p0, p0, p0, p0, p0, p0, p0, p0, p4, p4, p0, p0, p4, p4], // (3, 3)
]

const mc = new MarkovChain(Values, Probabilities)

const getOrb = (): Coordinate => {
    return mc.next()
}

export default getOrb
