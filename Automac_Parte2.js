// Localize o ticket aberto usando o seletor CSS
var ticketopen = document.querySelector('a.open-ticket.ng-scope');

// Verifica se o elemento foi encontrado
if (ticketopen) {
    // Simula um clique no elemento
    ticketopen.click();
} else {
    console.log("Ticket não encontrado.");
}

// Seleciona 
var Primeiranota = document.querySelector('span.review-rating.ng-binding.ng-scope');

// armazena a nota
var Notaticket = Primeiranota.textContent;

console.log(Notaticket);
