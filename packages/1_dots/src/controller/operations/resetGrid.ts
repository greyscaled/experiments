import clearArea from "../../canvas/clearArea"
import { CANVAS_HEIGHT, CANVAS_WIDTH } from "../../model/getCoordinates"

const resetGrid = (ctx: CanvasRenderingContext2D): void => {
    console.debug("resetGrid")
    clearArea(ctx, CANVAS_WIDTH, CANVAS_HEIGHT)
}

export default resetGrid
