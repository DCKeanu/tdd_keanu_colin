// Exporte une fonction nommée 'sum'
module.exports = function sum(array) {
    // Si le tableau est vide, retourne 0
    if (array.length === 0) return 0;

    // Si le tableau contient un seul élément, retourne cet élément
    if (array.length === 1) return array[0];

    // Utilise la méthode 'reduce' pour calculer la somme des éléments du tableau
    // 'reduce' prend une fonction anonyme (a, b) => a + b comme argument
    // Cette fonction est appliquée à chaque élément du tableau
    // 'a' est l'accumulateur, qui stocke la somme intermédiaire
    // 'b' est l'élément actuel du tableau
    // La valeur initiale de l'accumulateur est 0
    return array.reduce((a, b) => a + b, 0);
}