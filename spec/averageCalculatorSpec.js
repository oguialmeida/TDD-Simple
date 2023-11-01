const averageCalculator = require('../index.js')

describe('averageCalculator', () => {
    it('should calculate the average of three valid grades', () => {
        expect(averageCalculator([90, 85, 88])).toBe(87.67)
    })

    it('should handle all grades being zero', () => {
        expect(averageCalculator([0, 0, 0])).toBe(0)
    })

    it('should handle grades with decimal values', () => {
        expect(averageCalculator([95.5, 87.25, 91.75])).toBe(91.5)
    })

})
