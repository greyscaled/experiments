import delayedExec from "../util/delayExec"
import resetGrid from "./operations/resetGrid"
import createGridOperation from "./operations/createGrid"
import createShapeOperation from "./operations/createShape"

/**
 * State represents each state of the FSM
 */
export type State = "reset" | "createGrid" | "createShape"

/**
 * StateFn is a function associated to at State
 */
export type StateFn = () => void

/**
 * Transitions is a map of state transitions
 */
const Transitions: Record<State, State> = {
    reset: "createGrid",
    createGrid: "createShape",
    createShape: "reset",
}

/**
 * stateFnFactory creates a map of each State to a StateFn
 */
const stateFnFactory = (
    ctx: CanvasRenderingContext2D
): Record<State, StateFn> => {
    return {
        reset: () => resetGrid(ctx),
        createGrid: () => createGridOperation(ctx),
        createShape: () => createShapeOperation(ctx),
    }
}

const controllerFSM = async (ctx: CanvasRenderingContext2D): Promise<void> => {
    console.debug("starting controllerFSM")
    let phase: State = "reset"

    const stateFns = stateFnFactory(ctx)

    // eslint-disable-next-line no-constant-condition
    while (true) {
        const fn = stateFns[phase]
        console.debug("await delay")
        await delayedExec(fn, 500, 5000)
        phase = Transitions[phase]
    }
}

export default controllerFSM
