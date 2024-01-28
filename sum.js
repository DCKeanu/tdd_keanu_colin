// sum.js
module.exports = function sum(array) {
    // Vérifie que l'entrée est un tableau
    if (!Array.isArray(array)) {
        throw new Error('ValueError: L\'entrée doit être un tableau');
    }

    // Si le tableau est vide, retourne 0
    if (array.length === 0) return 0;

    // Si le tableau contient un seul élément, retourne cet élément
    if (array.length === 1) return array[0];

    // Parcourt chaque élément du tableau
    for (let value of array) {
        // Si l'élément n'est pas un nombre ou est négatif, lance une exception
        if (typeof value !== 'number' || value < 0) {
            throw new Error('ValueError: Tous les éléments du tableau doivent être des nombres positifs');
        }
    }

    // Utilise la méthode 'reduce' pour calculer la somme des éléments du tableau
    return array.reduce((a, b) => a + b, 0);
}
