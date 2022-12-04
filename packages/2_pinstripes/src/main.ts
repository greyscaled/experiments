import getCanvas from "./canvas/getCanvas"
import "./style.css"
import render from "./view/render"

console.debug("starting main")
const ctx = getCanvas()

const updateTick = (tick: number): number => {
    return (tick + 1) % 10
}

let tick = 0
const update = () => {
    tick = updateTick(tick)
    if (tick === 0) {
        render(ctx)
    }
    window.requestAnimationFrame(update)
}

render(ctx)
window.requestAnimationFrame(update)
