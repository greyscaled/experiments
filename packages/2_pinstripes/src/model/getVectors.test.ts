import getVectors, { X_MAX, X_MIN } from "./getVectors"

describe("getVectors", () => {
    it("has the correct length", () => {
        // Given
        const expectedLength = 30

        // When
        const gotLength = getVectors().length

        // Then
        expect(gotLength).toBe(expectedLength)
    })

    it("has the correct first and last vector", () => {
        // Given
        const expectedY = [
            0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80,
            85, 90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150,
            155, 160, 165, 170, 175, 180, 185, 190, 195, 200, 205, 210, 215,
            220, 225, 230, 235, 240, 245, 250, 255, 260, 265, 270, 275, 280,
            285, 290, 295, 300, 305, 310, 315, 320, 325, 330, 335, 340, 345,
            350, 355, 360, 365, 370, 375, 380, 385, 390, 395, 400, 405, 410,
            415, 420, 425, 430, 435, 440, 445, 450, 455, 460, 465, 470, 475,
            480, 485, 490, 495, 500,
        ]

        // When
        const vectors = getVectors()
        const gotFirstVector = vectors[0]
        const gotLastVector = vectors[vectors.length - 1]

        for (let i = 0; i < gotFirstVector.length; i++) {
            // Then
            expect(gotFirstVector[i].x).toBeGreaterThanOrEqual(X_MIN)
            expect(gotFirstVector[i].x).toBeLessThanOrEqual(X_MIN + 1)
            expect(gotFirstVector[i].y).toBe(expectedY[i])
            expect(gotLastVector[i].x).toBeGreaterThanOrEqual(X_MAX - 1)
            expect(gotLastVector[i].x).toBeLessThanOrEqual(X_MAX)
            expect(gotLastVector[i].y).toBe(expectedY[i])
        }
    })
})
