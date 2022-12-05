const rng = (min: number, max: number) => {
    const delta = max - min
    return Math.random() * delta + min
}

export default rng
