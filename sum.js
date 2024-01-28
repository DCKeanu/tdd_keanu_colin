// Exporte une fonction nommée 'sum'
module.exports = function sum(array) {
    // Si l'entrée n'est pas un tableau, lance une exception
    if (!Array.isArray(array)) {
        throw new Error('ValueError: L\'entrée doit être un tableau');
    }

    // Si le tableau est vide, retourne 0
    if (array.length === 0) return 0;

    // Si le tableau contient un seul élément, retourne cet élément
    if (array.length === 1) return array[0];

    // Parcourt chaque élément 'value' du tableau 'array'
    for (let value of array) {
        // Si l'élément n'est pas un nombre, lance une exception
        if (typeof value !== 'number') {
            throw new Error('TypeError: Tous les éléments du tableau doivent être des nombres');
        }
    }

    // Utilise la méthode 'reduce' pour calculer la somme des éléments du tableau
    // 'reduce' prend une fonction anonyme (a, b) => a + b comme argument
    // Cette fonction est appliquée à chaque élément du tableau
    // 'a' est l'accumulateur, qui stocke la somme intermédiaire
    // 'b' est l'élément actuel du tableau
    // La valeur initiale de l'accumulateur est 0
    return array.reduce((a, b) => a + b, 0);
}