const drawCircle = (
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    radius: number
): void => {
    ctx.beginPath()
    ctx.arc(x, y, radius, 0, 2 * Math.PI)
    ctx.closePath()

    ctx.fillStyle = "white"
    ctx.fill()
}

export default drawCircle
