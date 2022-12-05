import Orb from "../model/Orb"
import smoothDynamicClock, { ClockEventType } from "../model/smoothDynamicClock"
import render from "../view/render"

const controller = (ctx: CanvasRenderingContext2D) => {
    const orb = new Orb()

    // First paint
    render(ctx, orb)

    // Setup the clock
    const handleClockEvent = () => {
        orb.changeMode()
    }
    window.addEventListener(ClockEventType, handleClockEvent as EventListener)
    smoothDynamicClock()

    // Setup render loop assuming 60 fps
    let tick = 0
    const loop = () => {
        tick = (tick + 1) % 5
        if (tick === 0) {
            orb.update()
            render(ctx, orb)
        }

        window.requestAnimationFrame(loop)
    }

    // Start render loop
    window.requestAnimationFrame(loop)
}

export default controller
