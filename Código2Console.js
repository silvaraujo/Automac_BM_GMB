// Armazena a marca
var valorSpan = document.querySelector('span[data-ng-bind="::brandInitials(post)"]').textContent;

// Clica em abrir o ticket
var newTicketButton = document.querySelector('a.new-ticket[data-ng-if="displayNewTicketButton(post)"]');
if (newTicketButton) {
    newTicketButton.click();
} else {
    console.log("Botão de novo ticket não encontrado.");
}

// Define a marca com base no valor de valorSpan
var brandValue = (valorSpan === 'C') ? "616038478607cd31975c4006_casas_bahia" : "616038478607cd31975c4006_ponto";
var selectElement = document.getElementById("ticket-brand");

// Preenche a marca no formulário se o elemento existir
if (selectElement) {
    selectElement.value = brandValue;
    var event = new Event('change');
    selectElement.dispatchEvent(event);
} else {
    console.log("Elemento de marca não encontrado.");
}

// Define o responsável como "Caio Araújo"
var responsibleSelect = document.querySelector("select.responsible-select");
if (responsibleSelect) {
    responsibleSelect.value = "Caio Araújo";
    var event = new Event('change');
    responsibleSelect.dispatchEvent(event);
} else {
    console.log("Elemento de responsável não encontrado.");
}

// Envia o formulário
var submitButton = document.querySelector('#ticketForm input[type="submit"]');
if (submitButton) {
    submitButton.click();
} else {
    console.log("Botão de envio não encontrado.");
}
