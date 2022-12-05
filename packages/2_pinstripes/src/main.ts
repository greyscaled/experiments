import getCanvas from "./canvas/getCanvas"
import smoothDynamicClock, { ClockEventType } from "./model/smoothDynamicClock"
import "./style.css"
import render from "./view/render"

console.debug("starting main")
const ctx = getCanvas()

const handleClockEvent = () => {
    console.debug("handleClockEvent")
    render(ctx)
}
window.addEventListener(ClockEventType, handleClockEvent as EventListener)

// render at the start
render(ctx)

// start the clock
smoothDynamicClock()
