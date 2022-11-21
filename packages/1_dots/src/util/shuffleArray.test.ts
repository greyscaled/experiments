import shuffleArray from "./shuffleArray"

describe("shuffleArray", () => {
    it("returns a shuffled array", () => {
        const arr = [1, 2, 3, 4, 5, 6]
        const expectedLength = 6
        for (let i = 0; i < 100; i++) {
            const got = shuffleArray(arr)
            expect(got.length).toBe(expectedLength)
            expect(got).toContain(1)
            expect(got).toContain(2)
            expect(got).toContain(3)
            expect(got).toContain(4)
            expect(got).toContain(5)
            expect(got).toContain(6)
        }
    })
})
