import delayedExec from "./delayExec"

describe("delayedExec", () => {
    it("performs a delay", async () => {
        // Given
        const fn = () => {
            // do nothing
            for (let i = 0; i < 10; i++) {
                i + 2
            }
        }
        const minMS = 500
        const maxMS = 600
        const marginMS = 50

        // When
        const before = Date.now()
        await delayedExec(fn, minMS, maxMS)
        const after = Date.now()

        // Then
        expect(after - before).toBeGreaterThanOrEqual(minMS)
        expect(after - before).toBeLessThanOrEqual(maxMS + marginMS)
    })
})
