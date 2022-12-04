const rng = (min: number, max: number) => {
    const delta = max - min
    return Math.floor(Math.random() * delta) + min
}

export default rng
