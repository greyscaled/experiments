const drawLine = (
    ctx: CanvasRenderingContext2D,
    startX: number,
    startY: number,
    endX: number,
    endY: number,
    strokeStyle: string | CanvasGradient | CanvasPattern = "white"
): void => {
    // Save styles prior to this draw
    const preStrokeStyle = ctx.strokeStyle

    // Set styles for this draw
    ctx.strokeStyle = strokeStyle

    ctx.beginPath()
    ctx.moveTo(startX, startY)
    ctx.lineTo(endX, endY)
    ctx.stroke()

    // Restore Styles
    ctx.strokeStyle = preStrokeStyle
}

export default drawLine
