// Localize o ticket aberto usando o seletor CSS
var ticketopen = document.querySelector('a.open-ticket.ng-scope');

// Verifica se o elemento foi encontrado
if (ticketopen) {
    // Simula um clique no elemento
    ticketopen.click();
} else {
    console.log("Ticket não encontrado.");
}

// Selecionando o elemento correspondente ao item "00. Avaliação Sem Comentário"
var avaliacaoSemComentarioItem = document.querySelector(".item-list.tooltipster.ng-scope.blank:nth-of-type(1)");

// Simulando o clique no elemento
if (avaliacaoSemComentarioItem) {
    avaliacaoSemComentarioItem.click();
} else {
    console.log("O elemento '00. Avaliação Sem Comentário' não foi encontrado.");
}
