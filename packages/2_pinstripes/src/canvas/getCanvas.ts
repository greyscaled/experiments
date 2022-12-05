const getCanvas = (): CanvasRenderingContext2D => {
    const canvas = document.getElementById("canvas") as HTMLCanvasElement
    const ctx = canvas.getContext("2d")
    if (!ctx) {
        throw new Error("cannot access canvas 2d rendering context")
    }
    return ctx
}

export default getCanvas
