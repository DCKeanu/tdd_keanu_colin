const sum = require('./sum');

test('somme des éléments du tableau [1, 2, 3] doit être 6', () => {
    expect(sum([1, 2, 3])).toBe(6);
});

test('somme des éléments du tableau vide doit être 0', () => {
    expect(sum([])).toBe(0);
});

test('somme des éléments du tableau [5] doit être 5', () => {
    expect(sum([5])).toBe(5);
});

test('doit lancer une exception lorsque l\'entrée n\'est pas un tableau', () => {
    expect(() => {
        sum(123);
    }).toThrow('ValueError: L\'entrée doit être un tableau');
});
// sum.test.js
test('doit lancer une exception lorsque le tableau contient des nombres négatifs', () => {
    expect(() => {
        sum([1, 2, -3]);
    }).toThrow('ValueError: Tous les éléments du tableau doivent être des nombres positifs');
});

// sum.test.js
test('doit lancer une exception lorsque le tableau contient des nombres décimaux', () => {
    expect(() => {
        sum([1, 2, 3.5]);
    }).toThrow('ValueError: Tous les éléments du tableau doivent être des nombres entiers');
});
