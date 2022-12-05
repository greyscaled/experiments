import rng from "../util/rng"

/**
 * DOHERTY is the well-known Doherty Threshold (400ms)
 */
const DOHERTY = 400

/**
 * MIN_INTERVAL_MS is the minimum time between updates
 */
export const MIN_INTERVAL_MS = DOHERTY

/**
 * MAX_INTERVAL_MS is the maximum time between updates
 */
export const MAX_INTERVAL_MS = MIN_INTERVAL_MS * 4

/**
 * MAX_DELTA_INTERVAL is the maximum change in interval at a moment in time
 */
export const MAX_DELTA_INTERVAL = DOHERTY

/**
 * REFACTORY_PERIOD is the time interval for which the dynamic interval must
 * not be updated.
 *
 * @remark Getting this period correct is what gives the "smoothness", so long
 * as the `MAX_DELTA_INTERVAL` isn't too jarringly high.
 */
export const REFACTORY_PERIOD = MAX_DELTA_INTERVAL * 4

/**
 * ClockEventType is the type for a window event representing a clock tick
 *
 * @example window.addEventListener(ClockEventType, handleClockEvent)
 */
export const ClockEventType = "experiments-2-pinstripes-clock-tick"

const nextInterval = (currentInterval: number): number => {
    const intervals = []
    const min = Math.max(MIN_INTERVAL_MS, currentInterval - MAX_DELTA_INTERVAL)
    const max = Math.min(MAX_INTERVAL_MS, currentInterval + MAX_DELTA_INTERVAL)
    for (let i = min; i <= max; i += 100) {
        intervals.push(i)
    }
    return intervals[rng(0, intervals.length - 1, "integer")]
}

let current_ms = 0
let interval_ms = MIN_INTERVAL_MS
let refactory_ms = 0
let hasSatisfedRefactory = false
const smoothDynamicClock = (): void => {
    console.debug("start smoothDynamicClock")

    window.setInterval(() => {
        current_ms = (current_ms + 100) % interval_ms

        if (current_ms === 0) {
            window.dispatchEvent(new CustomEvent(ClockEventType))
        }

        refactory_ms = (refactory_ms + 100) % REFACTORY_PERIOD

        if (refactory_ms === 0) {
            hasSatisfedRefactory = true
        }

        if (hasSatisfedRefactory) {
            if (Math.random() < 0.5) {
                interval_ms = nextInterval(interval_ms)
                refactory_ms = 0
                hasSatisfedRefactory = false
                console.debug("update interval_ms: ", interval_ms)
            }
        }
    }, 100)
}

export default smoothDynamicClock
