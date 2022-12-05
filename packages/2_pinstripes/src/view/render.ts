import clearArea from "../canvas/clearArea"
import drawCircle from "../canvas/drawCircle"
import drawLine from "../canvas/drawLine"
import getVectors, {
    CANVAS_HEIGHT,
    CANVAS_WIDTH,
    Coordinate,
} from "../model/getVectors"
import Orb from "../model/Orb"

const renderLine = (
    ctx: CanvasRenderingContext2D,
    c1: Coordinate,
    c2: Coordinate,
    orb: Orb
): void => {
    const orbPos = orb.getPosition()
    const mode = orb.getMode()
    const radius = orb.getRadius()

    if (orb.contains(c1) && orb.contains(c2)) {
        if (mode === "opaque") {
            return
        }
        drawLine(ctx, c1.x, c1.y, orbPos.x, orbPos.y)
        return
    }

    if (orb.contains(c1) && !orb.contains(c2)) {
        if (mode === "opaque") {
            drawLine(ctx, orbPos.x, orbPos.y + radius, c2.x, c2.y)
            return
        }
        drawLine(ctx, orbPos.x, orbPos.y, c2.x, c2.y)
        return
    }

    if (!orb.contains(c1) && orb.contains(c2)) {
        if (mode === "opaque") {
            drawLine(ctx, c1.x, c1.y, orbPos.x, orbPos.y - radius)
            return
        }
        drawLine(ctx, c1.x, c1.y, orbPos.x, orbPos.y)
        return
    }

    drawLine(ctx, c1.x, c1.y, c2.x, c2.y)
}

const render = (ctx: CanvasRenderingContext2D, orb: Orb): void => {
    clearArea(ctx, CANVAS_WIDTH, CANVAS_HEIGHT)

    const orbPos = orb.getPosition()
    const fill = orb.getMode() === "distortion" ? undefined : "black"

    drawCircle(ctx, orbPos.x, orbPos.y, orb.getRadius(), fill)

    getVectors().forEach((vector) => {
        const secondLastIdx = vector.length - 2

        for (let i = 0; i < secondLastIdx; i++) {
            const c1 = vector[i]
            const c2 = vector[i + 1]
            renderLine(ctx, c1, c2, orb)
        }
    })
}

export default render
