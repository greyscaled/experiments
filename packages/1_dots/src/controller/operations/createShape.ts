import drawLine from "../../canvas/drawLine"
import generatePath from "../../model/generatePath"

const createShape = (ctx: CanvasRenderingContext2D): void => {
    console.debug("createShape")
    const path = generatePath()

    for (let i = 1; i < path.length - 1; i++) {
        const endCoord = path[i]
        const startCoord = path[0]
        drawLine(ctx, startCoord.x, startCoord.y, endCoord.x, endCoord.y)
    }
}

export default createShape
