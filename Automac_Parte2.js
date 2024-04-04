// Localize o ticket aberto usando o seletor CSS
var ticketopen = document.querySelector('a.open-ticket.ng-scope');
// Verifica se o elemento foi encontrado
if (ticketopen) {
    // Simula um clique no elemento
    ticketopen.click();
    console.log("Ticket aberto para preencher.");
} else {
    console.log("Ticket não encontrado.");
}

// Selecionando o botão pelo seletor CSS
var button = document.querySelector("#modal-show-ticket > div.ticket-container > div > div.ticket-options > div.input-container.relative > div.ticket-tags.actions-item.ng-scope > a.button.tags.tooltipstered");

// Verificando se o botão foi encontrado
if (button) {
    // Simulando um clique no botão
    button.click();
} else {
    console.error("Botão não encontrado.");
}

// Removendo os caracteres do valor do input
    var input = document.querySelector("#modal-show-ticket > div.ticket-container > div > div.ticket-options > div.input-container.relative > div.ticket-tags.actions-item.ng-scope > ul > input");
    var valorAtual = input.value;
    input.value = valorAtual.slice(0, -6); // Remove o último caractere

    // Disparando um evento de input para notificar o input sobre a alteração
    var event = new Event('input', { bubbles: true });
    input.dispatchEvent(event);

// Seleciona todos os elementos com a classe 'item-list-container'
const itens = document.querySelectorAll(".item-list-container");

let ultimoElemento = null;

// Itera sobre os elementos encontrados
itens.forEach(item => {
    // Verifica se o elemento corresponde ao seletor específico
    const labelElement = item.querySelector('label.blank');
    if (labelElement && labelElement.innerText.trim() === '00. Avaliação Sem Comentário') {
        // Atualiza o último elemento encontrado
        ultimoElemento = labelElement;
    }
});

// Clica apenas no último elemento encontrado
if (ultimoElemento) {
    ultimoElemento.click();
    console.log('00. Avaliação Sem Comentário - preenchido');
}
