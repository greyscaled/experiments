import rng from "./rng"

describe("rng", () => {
    it("returns a float within (3, 7)", () => {
        const min = 3
        const max = 7
        for (let i = 0; i < 100; i++) {
            const got = rng(min, max)
            expect(got).toBeGreaterThanOrEqual(min)
            expect(got).toBeLessThanOrEqual(max)
        }
    })
})
