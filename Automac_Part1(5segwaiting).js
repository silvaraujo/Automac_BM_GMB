// Armazena a marca
setTimeout(() => {
    const brandSpan = document.querySelector('span[data-ng-bind="::brandInitials(post)"]');
    const brandValue = brandSpan ? brandSpan.textContent : '';
    //mostra no console qual é a marca
    if (brandValue === 'C') {
        console.log("esse ticket é casas bahia");
    } else {
        console.log("esse ticket é ponto");
    }
    // Clica em "Abrir Ticket"
    setTimeout(() => {
        const newTicketButton = document.querySelector('a.new-ticket[data-ng-if="displayNewTicketButton(post)"]');
        if (newTicketButton) {
            newTicketButton.click();
            console.log("Ticket aberto")
        } else {
            console.log("Botão para abrir novo ticket não encontrado com o seletor.");
        }
        // Função para preencher a marca
        setTimeout(() => {
            function preencherMarca(marca) {
                const selectElement = document.getElementById("ticket-brand");
                if (selectElement) {
                    selectElement.value = marca;
                    selectElement.dispatchEvent(new Event('change'));
                } else {
                    console.log("Elemento da marca não encontrado com o ID.");
                }
            }
            // Preenche a marca com base no valor da variável valorSpan
            setTimeout(() => {
                if (brandValue === 'C') {
                    preencherMarca("616038478607cd31975c4006_casas_bahia");
                    console.log("Marca preenchida com sucesso CB");
                } else {
                    preencherMarca("616038478607cd31975c4006_ponto");
                    console.log("Marca preenchida com sucesso PIN");
                }
                // Função para preencher o responsável
                setTimeout(() => {
                    function preencherResponsavel(nomeResponsavel) {
                        const selectElement = document.querySelector("select.responsible-select");
                        if (selectElement) {
                            selectElement.value = nomeResponsavel;
                            selectElement.dispatchEvent(new Event('change'));
                        } else {
                            console.log("Elemento do responsável não encontrado com o selector.");
                        }
                    }
                    // Preenche o responsável como "Caio Araújo"
                    setTimeout(() => {
                        preencherResponsavel("Caio Araújo");
                        console.log("Responsável preenchido - Caio");

                        // Envia o formulário
                        setTimeout(() => {
                            // Encontra o primeiro elemento usando XPath
                            var element1 = document.evaluate('//*[@id="ticketForm"]/div[2]/input', document, null,
                                XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
                            // Verifica se o elemento foi encontrado
                            if (element1) {
                                // Clica nele
                                element1.click();
                                console.log("Json enviado!")
                            } else {
                                console.log("Elemento não encontrado com o XPath fornecido.");
                            }
                        }, 5000); // Espera 5 segundos antes de enviar o formulário
                    }, 5000); // Espera 5 segundos antes de preencher o responsável
                }, 5000); // Espera 5 segundos antes de preencher a marca
            }, 5000); // Espera 5 segundos antes de clicar em "Abrir Ticket"
        }, 5000); // Espera 5 segundos antes de armazenar a marca
    }, 5000); // Espera 5 segundos antes de clicar em "Abrir Ticket"
}, 5000); // Espera 5 segundos antes de armazenar a marca
