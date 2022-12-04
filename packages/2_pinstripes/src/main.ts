import drawLine from "./canvas/drawLine"
import getCanvas from "./canvas/getCanvas"
import getVectors from "./model/getVectors"
import "./style.css"

console.debug("starting main")
const ctx = getCanvas()

const vectors = getVectors()

vectors.forEach((vector) => {
    const secondLastIdx = vector.length - 2
    for (let i = 0; i < secondLastIdx; i++) {
        // draw a line from current (ith) idx to i + 1
        const c1 = vector[i]
        const c2 = vector[i + 1]
        drawLine(ctx, c1.x, c1.y, c2.x, c2.y)
    }
})
