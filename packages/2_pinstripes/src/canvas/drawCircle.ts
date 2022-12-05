const drawCircle = (
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    radius: number,
    fill: string | undefined
): void => {
    ctx.beginPath()
    ctx.arc(x, y, radius, 0, 2 * Math.PI)
    ctx.closePath()

    if (fill) {
        ctx.fillStyle = fill
        ctx.fill()
    }

    ctx.strokeStyle = "#c7c7c7"
    ctx.stroke()
}

export default drawCircle
