module.exports = function sum(array) {
    let total = 0;
    for (let value of array) {
        total += value;
    }
    return total;
}
