const clearCircle = (
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number
): void => {
    ctx.save()
    ctx.beginPath()
    ctx.arc(x, y, 3.5, 0, 2 * Math.PI)
    ctx.clip()
    ctx.clearRect(x - 2.5 - 1, y - 2.5 - 1, 2.5 * 2 + 2, 2.5 * 2 + 2)
    ctx.closePath()
    ctx.restore()
}

export default clearCircle
