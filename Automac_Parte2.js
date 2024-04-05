// Localize o ticket aberto usando o seletor CSS
setTimeout(() => {
    var ticketopen = document.querySelector('a.open-ticket.ng-scope');
    // Verifica se o elemento foi encontrado
    if (ticketopen) {
        // Simula um clique no elemento
        ticketopen.click();
        console.log("Ticket aberto para preencher.");
    } else {
        console.log("Ticket não encontrado.");
    }
}, 4000); // Intervalo de 1 segundo antes de abrir o ticket

// Selecionando o botão pelo seletor CSS
setTimeout(() => {
    var button = document.querySelector("#tags-list-container");

    // Verificando se o botão foi encontrado
    if (button) {
        // Simulando um clique no botão
        button.click();
    } else {
        console.error("Botão não encontrado.");
    }
}, 10000); // Intervalo de 2 segundos antes de clicar no botão

setTimeout(() => {
    var input = document.querySelector("#modal-show-ticket > div.ticket-container > div > div.ticket-options > div.input-container.relative > div.ticket-tags.actions-item.ng-scope > ul > input");
    var valorAtual = input.value;
    input.value = valorAtual.slice(0, -6); // Remove o último caractere

    // Disparando um evento de input para notificar o input sobre a alteração
    var event = new Event('input', { bubbles: true });
    input.dispatchEvent(event);

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
    
}, 12000); // Intervalo de 3 segundos antes de remover os caracteres do input

   // Seleciona a nota de avaliação do ticket
    var Primeiranota = document.querySelector('span.review-rating.ng-binding.ng-scope');
    if (Primeiranota) {
        var Notaticket = Primeiranota.textContent; // Obtém a nota do ticket
        console.log("A nota da avaliação é:", Notaticket); // Exibe a nota do ticket
        var NotaDoTicket = "Nota " + Notaticket; // Concatena a nota com a string "Nota"
    } else {
        console.log("Nota não encontrada"); // Nota de avaliação não encontrada
    }

setTimeout(() => {
// Localizando todas as labels com data-ng-class="tag.selection" e classe "ng-binding blank"
var labels = document.querySelectorAll("label[data-ng-class='tag.selection'].ng-binding.blank");

// Iterando sobre todas as labels encontradas
labels.forEach(function(label) {
    // Obtendo o conteúdo da label
    var content = label.textContent.trim();
    // Verificando se o conteúdo da label é igual à variável notaticket
    if (content === NotaDoTicket) {
        // Preenchendo o input com o valor da variável notaticket
        var input = document.querySelector("#modal-show-ticket > div.ticket-container > div > div.ticket-options > div.input-container.relative > div.ticket-tags.actions-item.ng-scope > ul > input");
        input.value = NotaDoTicket;
        console.log("Preenchendo com", NotaDoTicket);
        // Simulando um clique na label
        label.click();
    }
});
}, 16000); // Intervalo de 4 segundos antes de clicar no último elemento

 //espera para colocar a avaliação
    setTimeout(() => {
    // Clica apenas no último elemento encontrado
    if (ultimoElemento) {
        ultimoElemento.click();
        console.log('00. Avaliação Sem Comentário - preenchido');
    } else {console.log('ultimo elemento não encontrado')}
}, 17000); // Intervalo de 3 segundos antes de remover os caracteres do input

setTimeout(() => {
// Selecionando o elemento pelo seletor CSS
const elemento = document.querySelector("a.apply[data-ng-click='applyTags({post: ticket, tags: tags});notifyTagChanges(ticket)']");

// Verificando se o elemento foi encontrado
if (elemento) {
    // Simulando um clique no elemento
    elemento.click();
} else {
    console.error("Elemento não encontrado.");
}
}, 25000); // Intervalo de 4 segundos antes de clicar no último elemento
