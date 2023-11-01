const averageCalculator = (grades) => {
    if (grades.length !== 3) {
        throw new Error('You must provide exactly three grades.')
    }
    const sum = grades.reduce((acc, grade) => acc + grade, 0)
    const average = sum / 3
    return Number(average.toFixed(2))
}

module.exports = averageCalculator;
