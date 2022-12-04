import clearArea from "../canvas/clearArea"
import drawLine from "../canvas/drawLine"
import getVectors from "../model/getVectors"

const render = (ctx: CanvasRenderingContext2D): void => {
    clearArea(ctx, 300, 500)
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
}

export default render
