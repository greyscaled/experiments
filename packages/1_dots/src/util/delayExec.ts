/**
 * delayedExec executes the passed function, `fn`, after a randomized delay
 * of upto `maxDelay`. The delay may be any number, and is not necessarily an
 * Integer.
 */
const delayedExec = (
    fn: () => void,
    minDelayMS: number,
    maxDelayMS: number
): Promise<void> => {
    const delta = maxDelayMS - minDelayMS
    const delay = Math.random() * delta + minDelayMS
    console.debug("delay = ", delay)
    return new Promise((resolve) => {
        setTimeout(() => {
            fn()
            resolve()
        }, delay)
    })
}

export default delayedExec
