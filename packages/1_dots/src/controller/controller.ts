import delayedExec from "../util/delayExec"
import resetGrid from "./operations/resetGrid"
import createGridOperation from "./operations/createGrid"
import createShapeOperation from "./operations/createShape"
import emphasizeShapeOperation from "./operations/emphasizeShape"
import { Coordinate } from "../model/getCoordinates"

/**
 * State represents each state of the FSM
 */
export type State = "reset" | "createGrid" | "createShape" | "emphasizeShape"

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
    createShape: "emphasizeShape",
    emphasizeShape: "reset",
}

export interface ControllerContext {
    phase: State
    shapePath: Coordinate[]
}

/**
 * stateFnFactory creates a map of each State to a StateFn
 */
const stateFnFactory = (
    ctx: CanvasRenderingContext2D,
    ctrlCtx: ControllerContext
): Record<State, StateFn> => {
    return {
        reset: () => resetGrid(ctx),
        createGrid: () => createGridOperation(ctx),
        createShape: () => {
            ctrlCtx.shapePath = createShapeOperation(ctx)
        },
        emphasizeShape: () => {
            emphasizeShapeOperation(ctx, ctrlCtx)
        },
    }
}

const controllerFSM = async (ctx: CanvasRenderingContext2D): Promise<void> => {
    console.debug("starting controllerFSM")
    const ctrlCtx: ControllerContext = {
        phase: "reset",
        shapePath: [],
    }

    const stateFns = stateFnFactory(ctx, ctrlCtx)

    // eslint-disable-next-line no-constant-condition
    while (true) {
        const fn = stateFns[ctrlCtx.phase]
        console.debug("await delay")
        await delayedExec(fn, 500, 5000)
        ctrlCtx.phase = Transitions[ctrlCtx.phase]
    }
}

export default controllerFSM
