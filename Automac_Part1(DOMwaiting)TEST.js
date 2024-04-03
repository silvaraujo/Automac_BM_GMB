document.addEventListener("DOMContentLoaded", function() {
    // Armazena a marca
    const brandSpan = document.querySelector('span[data-ng-bind="::brandInitials(post)"]');
    const brandValue = brandSpan ? brandSpan.textContent : '';

    //mostra no console qual é a marca
    if (brandValue === 'C') {
        console.log("casas bahia");
    } else {
        console.log("ponto");
    }
    // Clica em "Abrir Ticket"
    const newTicketButton = document.querySelector('a.new-ticket[data-ng-if="displayNewTicketButton(post)"]');
    if (newTicketButton) {
        newTicketButton.click();
        console.log("Ticket aberto")
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
        console.log("Marca preenchida CB");
    } else {
        preencherMarca("616038478607cd31975c4006_ponto");
        console.log("Marca preenchida Pin");
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
    console.log("Responsável - Caio");

    // Envia o formulário
    setTimeout(() => {
        // Encontra o primeiro elemento usando XPath
        var element1 = document.evaluate('//*[@id="ticketForm"]/div[2]/input', document, null,
            XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        // Verifica se o elemento foi encontrado
        if (element1) {
            // Clica nele
            element1.click();
            // Encontra o segundo elemento usando o seletor de CSS
            //Foi adicionado quando pedi para o gpt organizar o código. Achei redundante e não consegui entender porque foi adicionado. Mas não parece afetar nada.
            const submitButton = document.querySelector('#ticketForm input[type="submit"]');
            if (submitButton) {
                // Clica no botão de envio
                submitButton.click();
            } else {
                console.log("Botão de envio não encontrado.");
            }
        } else {
            console.log("Elemento não encontrado com o XPath fornecido.");
        }
    }, 5000); // Espera 5 segundos antes de enviar o formulário
});
