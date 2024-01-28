// sum.js

// Fonction pour valider l'entrée
function validateInput(array) {
    if (!Array.isArray(array)) {
        throw new Error('ValueError: L\'entrée doit être un tableau');
    }

    for (let value of array) {
        if (typeof value !== 'number' || value < 0) {
            throw new Error('ValueError: Tous les éléments du tableau doivent être des nombres positifs');
        }
    }
}

// Exporte une fonction nommée 'sum'
module.exports = function sum(array) {
    validateInput(array);

    // Utilise la méthode 'reduce' pour calculer la somme des éléments du tableau
    // même si le tableau est vide ou contient un seul élément
    return parseFloat(array.reduce((a, b) => a + b, 0).toFixed(2));
}
