import drawLine from "../../canvas/drawLine"
import generatePath from "../../model/generatePath"
import { Coordinate } from "../../model/getCoordinates"

const createShape = (ctx: CanvasRenderingContext2D): Coordinate[] => {
    console.debug("createShape")
    const path = generatePath()

    for (let i = 1; i < path.length; i++) {
        const endCoord = path[i]
        const startCoord = path[i - 1]
        drawLine(ctx, startCoord.x, startCoord.y, endCoord.x, endCoord.y)
    }

    return path
}

export default createShape
