import rng from "./rng"

describe("rng", () => {
    it("returns an integer within (3, 7)", () => {
        const min = 3
        const max = 7
        for (let i = 0; i < 100; i++) {
            const got = rng(min, max)
            expect(Number.isInteger(got)).toBeTruthy()
            expect(got).toBeGreaterThanOrEqual(min)
            expect(got).toBeLessThanOrEqual(max)
        }
    })
})
