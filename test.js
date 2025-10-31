
const test = [
    [[2, 3], [3, 4], [1, 0]],
    [[4, 5], [3, 4]]
]

const result = test.filter(arr => arr.length > 0)  // Filter out empty arrays
                                   .reduce((min, arr) => arr.length < min.length ? arr : min)
                                   
console.log(result);