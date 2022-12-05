export type RngMode = "float" | "integer"

const rng = (min: number, max: number, mode: RngMode = "float") => {
    const delta = max - min
    if (mode === "float") {
        return Math.random() * delta + min
    }
    return Math.floor(Math.random() * delta) + min
}

export default rng
