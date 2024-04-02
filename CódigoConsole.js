// Armazena a marca
const brandSpan = document.querySelector('span[data-ng-bind="::brandInitials(post)"]');
const brandValue = brandSpan ? brandSpan.textContent : '';

// Clica em "Abrir Ticket"
const newTicketButton = document.querySelector('a.new-ticket[data-ng-if="displayNewTicketButton(post)"]');
if (newTicketButton) {
    newTicketButton.click();
} else {
    console.log("Botão para abrir novo ticket não encontrado.");
}

// Função para preencher a marca
function preencherMarca(marca) {
    const selectElement = document.getElementById("ticket-brand");
    if (selectElement) {
        selectElement.value = marca;
        selectElement.dispatchEvent(new Event('change'));
    } else {
        console.log("Elemento da marca não encontrado.");
    }
}

// Preenche a marca com base no valor da variável valorSpan
if (brandValue === 'C') {
    preencherMarca("616038478607cd31975c4006_casas_bahia");
} else {
    preencherMarca("616038478607cd31975c4006_ponto");
}

// Função para preencher o responsável
function preencherResponsavel(nomeResponsavel) {
    const selectElement = document.querySelector("select.responsible-select");
    if (selectElement) {
        selectElement.value = nomeResponsavel;
        selectElement.dispatchEvent(new Event('change'));
    } else {
        console.log("Elemento do responsável não encontrado.");
    }
}

// Preenche o responsável como "Caio Araújo"
preencherResponsavel("Caio Araújo");

// Envia o formulário
const submitButton = document.querySelector('#ticketForm input[type="submit"]');
if (submitButton) {
    submitButton.click();
} else {
    console.log("Botão de envio não encontrado.");
}
