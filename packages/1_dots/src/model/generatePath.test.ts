import generatePath, { nextCoord } from "./generatePath"
import { Coordinate } from "./getCoordinates"

describe("generatePath", () => {
    describe("generatePath", () => {
        it("returns a legal path", () => {
            const got = generatePath()
            expect(got.length).toBeGreaterThanOrEqual(3)
            expect(got.length).toBeLessThanOrEqual(7)

            for (let i = 1; i < got.length - 1; i++) {
                const currCord = got[i]
                const prevCoord = got[i - 1]
                const deltaX = Math.abs(currCord.x - prevCoord.x)
                const deltaY = Math.abs(currCord.y - prevCoord.y)
                expect(deltaX % 20).toBe(0)
                expect(deltaX).toBeGreaterThanOrEqual(0)
                expect(deltaX).toBeLessThanOrEqual(20)
                expect(deltaY % 20).toBe(0)
                expect(deltaY).toBeGreaterThanOrEqual(0)
                expect(deltaY).toBeLessThanOrEqual(20)
            }
        })
    })

    describe("nextCoord", () => {
        it("computes a nextCoordinate in bounds", () => {
            // Given
            const startCoord: Coordinate = {
                x: 20,
                y: 20,
            }

            // when
            const got = nextCoord(startCoord)

            // Then
            expect(got.x % 20).toBe(0)
            expect(got.x).toBeGreaterThanOrEqual(20)
            expect(got.x).toBeLessThanOrEqual(40)
            expect(got.y % 20).toBe(0)
            expect(got.y).toBeGreaterThanOrEqual(20)
            expect(got.y).toBeLessThanOrEqual(40)
        })
    })
})
