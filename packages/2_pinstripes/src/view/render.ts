import clearArea from "../canvas/clearArea"
import drawCircle from "../canvas/drawCircle"
import drawLine from "../canvas/drawLine"
import getOrb from "../model/getOrb"
import getVectors, {
    CANVAS_HEIGHT,
    CANVAS_WIDTH,
    Coordinate,
} from "../model/getVectors"

const render = (ctx: CanvasRenderingContext2D): void => {
    clearArea(ctx, CANVAS_WIDTH, CANVAS_HEIGHT)

    const orb = getOrb()
    const orb_x_min = orb.x - 20
    const orb_x_max = orb.x + 20
    const orb_y_min = orb.y - 20
    const orb_y_max = orb.y + 20

    const inOrb = (coordinate: Coordinate) => {
        return (
            coordinate.x >= orb_x_min &&
            coordinate.x <= orb_x_max &&
            coordinate.y >= orb_y_min &&
            coordinate.y <= orb_y_max
        )
    }

    drawCircle(ctx, orb.x, orb.y, 20)

    getVectors().forEach((vector) => {
        const secondLastIdx = vector.length - 2

        for (let i = 0; i < secondLastIdx; i++) {
            // draw a line from current (ith) idx to i + 1
            const c1 = vector[i]
            const c2 = vector[i + 1]
            if (inOrb(c1) && inOrb(c2)) {
                continue
            }
            if (inOrb(c1) && !inOrb(c2)) {
                drawLine(ctx, orb.x, orb_y_max, c2.x, c2.y)
                continue
            }
            if (inOrb(c2)) {
                drawLine(ctx, c1.x, c1.y, orb.x, orb_y_min)
                continue
            }
            drawLine(ctx, c1.x, c1.y, c2.x, c2.y)
        }
    })
}

export default render
