// Seleciona todos os elementos <a> dentro de elementos <li> com a classe específica
var elementosA = document.querySelectorAll('li.tooltipster.ng-scope.tooltipstered a');

// Agora, você pode iterar sobre esses elementos ou acessá-los diretamente como um array
// Por exemplo, para acessar o texto dentro do primeiro elemento <a>:
var primeiroTextoA = elementosA[0].textContent;

// E para acessar o texto dentro do segundo elemento <a>:
var segundoTextoA = elementosA[1].textContent;

// E assim por diante...

console.log(primeiroTextoA);
console.log(segundoTextoA);
