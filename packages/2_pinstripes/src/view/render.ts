import clearArea from "../canvas/clearArea"
import drawLine from "../canvas/drawLine"
import getVectors, { X_MAX, Y_MAX } from "../model/getVectors"

const render = (ctx: CanvasRenderingContext2D): void => {
    clearArea(ctx, X_MAX, Y_MAX)

    getVectors().forEach((vector) => {
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
