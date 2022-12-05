import rng from "../util/rng"
import { Coordinate, X_MAX, Y_MAX } from "./getVectors"

export type OrbMode = "opaque" | "distortion"

class Orb {
    private mode: OrbMode
    private currentPosition: Coordinate
    private targetPosition: Coordinate
    private radius: number
    private velocity: number

    constructor() {
        this.mode = "opaque"
        this.currentPosition = { x: 20, y: 20 }
        this.targetPosition = { x: 40, y: 40 }
        this.radius = 20
        this.velocity = 2
    }

    changeMode(): void {
        if (this.mode === "distortion") {
            this.mode = "opaque"
            return
        }
        this.mode = "distortion"
    }

    contains(coordinate: Coordinate): boolean {
        const orbPos = this.currentPosition
        const radius = this.radius

        return (
            coordinate.x >= orbPos.x - radius &&
            coordinate.x <= orbPos.x + radius &&
            coordinate.y >= orbPos.y - radius &&
            coordinate.y <= orbPos.y + radius
        )
    }

    getMode(): OrbMode {
        return this.mode
    }

    getPosition(): Coordinate {
        return {
            x: this.currentPosition.x,
            y: this.currentPosition.y,
        }
    }

    getRadius(): number {
        return this.radius
    }

    update(): void {
        if (this.hasReachedTarget()) {
            this.setNextTargetPosition()
        }

        if (this.currentPosition.x > this.targetPosition.x) {
            this.currentPosition.x = this.currentPosition.x - this.velocity
        } else if (this.currentPosition.x < this.targetPosition.x) {
            this.currentPosition.x = this.currentPosition.x + this.velocity
        }

        if (this.currentPosition.y > this.targetPosition.y) {
            this.currentPosition.y = this.currentPosition.y - this.velocity
        } else if (this.currentPosition.y < this.targetPosition.y) {
            this.currentPosition.y = this.currentPosition.y + this.velocity
        }
    }

    private hasReachedTarget(): boolean {
        return (
            this.currentPosition.x === this.targetPosition.x &&
            this.currentPosition.y === this.targetPosition.y
        )
    }

    private setNextTargetPosition(): void {
        const orbPos = this.currentPosition
        const radius = this.radius

        const possibilities: Coordinate[] = [
            // same
            { x: orbPos.x, y: orbPos.y },
            // diagonal up left
            { x: orbPos.x - radius, y: orbPos.y - radius },
            // up
            { x: orbPos.x, y: orbPos.y - radius },
            // diagonal up right
            { x: orbPos.x + radius, y: orbPos.y - radius },
            // right
            { x: orbPos.x + radius, y: orbPos.y },
            // diagonal down right
            { x: orbPos.x + radius, y: orbPos.y + radius },
            // down
            { x: orbPos.x, y: orbPos.y + radius },
            // diagonal down left
            { x: orbPos.x - radius, y: orbPos.y + radius },
            // left
            { x: orbPos.x - radius, y: orbPos.y },
        ].filter(
            (coordinate) =>
                coordinate.x >= radius &&
                coordinate.x <= X_MAX - radius &&
                coordinate.y >= radius &&
                coordinate.y <= Y_MAX - radius
        )

        this.targetPosition =
            possibilities[rng(0, possibilities.length - 1, "integer")]
    }
}

export default Orb
