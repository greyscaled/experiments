const drawCircle = (
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    radius: number,
    fillStyle: string | CanvasGradient | CanvasPattern = "black"
): void => {
    // Path
    ctx.beginPath()
    ctx.arc(x, y, radius, 0, 2 * Math.PI)
    ctx.closePath()
    ctx.fillStyle = fillStyle
    ctx.fill()
    ctx.strokeStyle = "white"
    ctx.stroke()
}

export default drawCircle
