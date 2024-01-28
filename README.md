<h1>Somme d'éléments d'un tableau</h1>
<p>Ce code fournit une fonction sum qui prend un tableau d'éléments numériques positifs en entrée et renvoie la somme des éléments avec une précision de deux décimales.</p>

<h1>Fonctionnalités</h1>
<h3>Fonction sum</h3>
<p>La fonction sum prend un tableau en entrée et renvoie la somme des éléments du tableau. Elle valide d'abord l'entrée pour s'assurer qu'elle est conforme aux exigences spécifiées.</p>

<h3>Validation de l'entrée</h3>
<p>La fonction validateInput vérifie si l'entrée est un tableau et si tous les éléments du tableau sont des nombres positifs. Elle lève une exception avec un message approprié si l'entrée ne répond pas à ces critères.</p>

<h1>Tests</h1>
<p>Le code inclut des tests unitaires pour garantir le bon fonctionnement de la fonction sum dans différentes situations.</p>

<ul>
  <li>Somme des éléments du tableau [1, 2, 3] doit être 6</li>
<li>Somme des éléments du tableau vide doit être 0</li>
<li>Somme des éléments du tableau [5] doit être 5</li>
<li>L'entrée doit être un tableau</li>
<li>Exception lorsque le tableau contient des nombres négatifs</li>
<li>Tous les éléments du tableau doivent être des nombres positifs</li>
</ul>


<h1>Utilisation</h1>
<p>NodeJs doit être à jour : éxécuter la commande : <code>npm install</code>,<code>npm update</code> et <code>npm upgrade</code></p>

<p>Les tests sont fait avec JEST. Pour exécuter les tests : <code>npx jest</code> ou <code>npm run test</code></p>


| Tests Status |
| ------- |
| [![Node.js CI](https://github.com/DCKeanu/tdd_keanu_colin/actions/workflows/node.js.yml/badge.svg)](https://github.com/DCKeanu/tdd_keanu_colin/actions/workflows/node.js.yml)
