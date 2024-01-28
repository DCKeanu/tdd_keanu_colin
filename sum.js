// Exporte une fonction nommée 'sum'
module.exports = function sum(array) {
    // Si le tableau est vide, retourne 0
    if (array.length === 0) return 0;
    // Initialise une variable 'total' à 0 pour stocker la somme des éléments du tableau
    let total = 0;
    // Parcourt chaque élément 'value' du tableau 'array'
    for (let value of array) {
        // Ajoute la valeur de l'élément actuel à 'total'
        total += value;
    }
    // Retourne la somme totale des éléments du tableau
    return total;
}