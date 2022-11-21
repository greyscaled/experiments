import clearCircle from "../../canvas/clearCircle"
import getCoordinates, { Coordinate } from "../../model/getCoordinates"
import { ControllerContext } from "../controller"

const emphasizeShape = (
    ctx: CanvasRenderingContext2D,
    ctrlCtx: ControllerContext
): void => {
    console.debug("emphasizeShape")

    const inPath = (c: Coordinate): boolean => {
        return ctrlCtx.shapePath.some((p) => p.x === c.x && p.y === c.y)
    }

    getCoordinates().forEach((row) => {
        row.forEach((coord) => {
            if (!inPath(coord)) {
                clearCircle(ctx, coord.x, coord.y)
            }
        })
    })
}

export default emphasizeShape
