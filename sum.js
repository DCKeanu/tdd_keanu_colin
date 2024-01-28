// sum.js

// Fonction pour valider l'entrée
function validateInput(array) {
    // Si l'entrée n'est pas un tableau, lance une exception
    if (!Array.isArray(array)) {
        throw new Error('ValueError: L\'entrée doit être un tableau');
    }

    // Parcourt chaque élément du tableau
    for (let value of array) {
        // Si l'élément n'est pas un nombre ou est négatif, lance une exception
        if (typeof value !== 'number' || value < 0) {
            throw new Error('ValueError: Tous les éléments du tableau doivent être des nombres positifs');
        }
    }
}

// Exporte une fonction nommée 'sum'
module.exports = function sum(array) {
    // Appelle la fonction de validation sur l'entrée
    validateInput(array);

    // Si le tableau est vide, retourne 0
    if (array.length === 0) return 0;

    // Si le tableau contient un seul élément, retourne cet élément
    if (array.length === 1) return array[0];

    // Utilise la méthode 'reduce' pour calculer la somme des éléments du tableau
    return parseFloat(array.reduce((a, b) => a + b, 0).toFixed(2));
}
