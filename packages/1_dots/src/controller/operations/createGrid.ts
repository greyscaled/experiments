import drawCircle from "../../canvas/drawCircle"
import getCoordinates from "../../model/getCoordinates"

const createGrid = (ctx: CanvasRenderingContext2D): void => {
    console.debug("createGrid")
    getCoordinates().forEach((row) => {
        row.forEach((coords) => {
            drawCircle(ctx, coords.x, coords.y)
        })
    })
}

export default createGrid
