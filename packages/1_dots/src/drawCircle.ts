import { Coordinate } from "./getCoordinates"

const drawCircle = (
    ctx: CanvasRenderingContext2D,
    coords: Coordinate,
    fillStyle: string | CanvasGradient | CanvasPattern = "white",
    strokeStyle: string | CanvasGradient | CanvasPattern = "white"
): void => {
    // Save styles prior to this draw
    const preFillStyle = ctx.fillStyle
    const preStrokeStyle = ctx.strokeStyle

    // Set styles for this draw
    ctx.fillStyle = fillStyle
    ctx.strokeStyle = strokeStyle

    const { x, y } = coords

    ctx.beginPath()
    ctx.arc(x, y, 2.5, 0, 2 * Math.PI)
    ctx.stroke()
    ctx.fill()

    // Restore Styles
    ctx.fillStyle = preFillStyle
    ctx.strokeStyle = preStrokeStyle
}

export default drawCircle
