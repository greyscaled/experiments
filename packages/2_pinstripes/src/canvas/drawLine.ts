const drawLine = (
    ctx: CanvasRenderingContext2D,
    startX: number,
    startY: number,
    endX: number,
    endY: number
): void => {
    ctx.beginPath()
    ctx.moveTo(startX, startY)
    ctx.lineTo(endX, endY)
    ctx.closePath()

    ctx.strokeStyle = "white"
    ctx.stroke()
}

export default drawLine
