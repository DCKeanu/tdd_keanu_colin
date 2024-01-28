module.exports = function sum(array) {
    if (array.length === 0) return 0;
    let total = 0;
    for (let value of array) {
        total += value;
    }
    return total;
}