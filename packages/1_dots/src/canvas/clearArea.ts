const clearArea = (
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number
): void => {
    ctx.beginPath()
    ctx.clearRect(0, 0, width, height)
    ctx.closePath()
}

export default clearArea
