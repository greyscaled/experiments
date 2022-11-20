import getCoordinates, { Coordinate } from "./getCoordinates"

describe("getCoordinates", () => {
    it("returns expected coordinates", () => {
        // Given
        const expectedLength = 480 / 20
        const expectedFirstRow: Coordinate[] = [
            { x: 20, y: 20 },
            { x: 40, y: 20 },
            { x: 60, y: 20 },
            { x: 80, y: 20 },
            { x: 100, y: 20 },
            { x: 120, y: 20 },
            { x: 140, y: 20 },
            { x: 160, y: 20 },
            { x: 180, y: 20 },
            { x: 200, y: 20 },
            { x: 220, y: 20 },
            { x: 240, y: 20 },
            { x: 260, y: 20 },
            { x: 280, y: 20 },
        ]
        const expectedLastRow: Coordinate[] = [
            { x: 20, y: 480 },
            { x: 40, y: 480 },
            { x: 60, y: 480 },
            { x: 80, y: 480 },
            { x: 100, y: 480 },
            { x: 120, y: 480 },
            { x: 140, y: 480 },
            { x: 160, y: 480 },
            { x: 180, y: 480 },
            { x: 200, y: 480 },
            { x: 220, y: 480 },
            { x: 240, y: 480 },
            { x: 260, y: 480 },
            { x: 280, y: 480 },
        ]

        // When
        const got = getCoordinates()

        // Then
        expect(got.length).toBe(expectedLength)
        expect(got[0]).toEqual(expectedFirstRow)
        expect(got[got.length - 1]).toEqual(expectedLastRow)
    })
})
