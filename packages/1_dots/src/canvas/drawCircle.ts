const drawCircle = (
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    fillStyle: string | CanvasGradient | CanvasPattern = "white"
): void => {
    // Path
    ctx.beginPath()
    ctx.arc(x, y, 2.5, 0, 2 * Math.PI)
    ctx.closePath()
    ctx.fillStyle = fillStyle
    ctx.fill()
}

export default drawCircle
