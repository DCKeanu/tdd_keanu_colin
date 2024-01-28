const sum = require('./sum');

test('somme des éléments du tableau [1, 2, 3] doit être 6', () => {
    expect(sum([1, 2, 3])).toBe(6);
});

test('somme des éléments du tableau vide doit être 0', () => {
    expect(sum([])).toBe(0);
});

test('somme des éléments du tableau [5] doit être 5', () => {
    expect(sum([5])).toBe(-5);
});