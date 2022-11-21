const clearArea = (
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number
): void => {
    ctx.clearRect(0, 0, width, height)
}

export default clearArea
