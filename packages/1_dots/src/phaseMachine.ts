import drawCircle from "./drawCircle"
import getCoordinates, { CANVAS_HEIGHT, CANVAS_WIDTH } from "./getCoordinates"

export type Phases = "phase-1" | "phase-2"

const phaseMachine = (ctx: CanvasRenderingContext2D): void => {
    let phase: Phases = "phase-1"

    window.setInterval(() => {
        switch (phase) {
            case "phase-1":
                phase = "phase-2"
                getCoordinates().forEach((row) => {
                    row.forEach((coords) => {
                        drawCircle(ctx, coords)
                    })
                })
                break

            case "phase-2":
                phase = "phase-1"
                ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
                break
            default:
                break
        }
    }, 5000)
}

export default phaseMachine
