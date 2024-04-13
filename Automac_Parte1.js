function AbrirTicket() {
    setTimeout(() => {
        // Procura o elemento HTML que contém as iniciais da marca
        const brandSpan = document.querySelector('span[data-ng-bind="::brandInitials(post)"]');
        const brandValue = brandSpan ? brandSpan.textContent : ''; // Obtém o texto das iniciais da marca

        if (brandValue) {
            // Verifica se as iniciais da marca correspondem a "C" (Casas Bahia) ou não
            if (brandValue === 'C') {
                console.log("Esse ticket é das Casas Bahia"); // Marca é Casas Bahia
            } else {
                console.log("Esse ticket é do Ponto"); // Marca não é Casas Bahia
            }
        } else {
            console.error("Marca não encontrada"); // Iniciais da marca não encontradas            
        }

        // Clica no botão "Abrir Ticket"
        setTimeout(() => {
            const newTicketButton = document.querySelector('a.new-ticket[data-ng-if="displayNewTicketButton(post)"]');
            if (newTicketButton) {
                newTicketButton.click(); // Simula um clique no botão "Abrir Ticket"
                console.log("Ticket aberto"); // Confirmação de que o ticket foi aberto
            } else {
                console.error("Botão para abrir novo ticket não encontrado com o seletor.");
            }

            // Função para preencher a marca do ticket
                function preencherMarca(marca) {
                    const selectElement = document.getElementById("ticket-brand"); // Encontra o elemento select para a marca
                    if (selectElement) {
                        selectElement.value = marca; // Define o valor da marca no select
                        selectElement.dispatchEvent(new Event('change')); // Simula um evento de mudança para o select
                    } else {
                        console.log("Elemento da marca não encontrado com o ID.");
                    }
                }

                // Preenche a marca do ticket com base nas iniciais da marca
                setTimeout(() => {
                    if (brandValue === 'C') {
                        preencherMarca("616038478607cd31975c4006_casas_bahia"); // Preenche a marca como Casas Bahia
                        console.log("Marca preenchida como CB"); // Confirmação de que a marca foi preenchida como Casas Bahia
                    } else {
                        preencherMarca("616038478607cd31975c4006_ponto"); // Preenche a marca como Ponto
                        console.log("Marca preenchida como PIN"); // Confirmação de que a marca foi preenchida como Ponto
                    }

                    // Função para preencher o responsável do ticket
                    setTimeout(() => {
                        function preencherResponsavel(nomeResponsavel) {
                            const selectElement = document.querySelector("select.responsible-select"); // Encontra o select para o responsável
                            if (selectElement) {
                                selectElement.value = nomeResponsavel; // Define o valor do responsável no select
                                selectElement.dispatchEvent(new Event('change')); // Simula um evento de mudança para o select
                            } else {
                                console.error("Elemento do responsável não encontrado.");
                            }
                        }

                        // Preenche o responsável do ticket como "Caio Araújo"
                        preencherResponsavel("Caio Araújo"); // Preenche o responsável como "Caio Araújo"
                        console.log("Responsável preenchido - Caio"); // Confirmação de que o responsável foi preenchido como "Caio"

                        // Envia o formulário do ticket
                        setTimeout(() => {
                            // Encontra o primeiro elemento usando XPath para enviar o formulário
                            var element1 = document.evaluate('//*[@id="ticketForm"]/div[2]/input', document, null,
                                XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
                            // Verifica se o elemento foi encontrado
                            if (element1) {
                                element1.click(); // Simula um clique no elemento para enviar o formulário
                                console.log("Json enviado!"); // Confirmação de que o JSON foi enviado
                            } else {
                                console.error("Elemento não encontrado pelo XPath fornecido."); // Elemento não encontrado com o XPath fornecido
                            }
                        }, 5000); // Espera 3 segundos antes de enviar o formulário

                    }, 5000); // Espera 2 segundos antes de selecionar o responsável
                }, 5000); // Espera 2 segundos antes de preencher
        }, 5000); // Espera 2 segundos antes de clicar em "Abrir Ticket"
    }, 5000); // Espera 1 segundo antes de armazenar a marca e a nota
}

//coletor generalizado dos comentários com ou sem texto
//p.content.noiframe.ng-binding.ng-scope.ng-isolate-scope[data-ng-if="::post.hasNoMedia && !post.isLinkedInPostShare"][id^="content-bm-posts-saas"]

const comentario = document.querySelector("p.content.noiframe.ng-binding.ng-scope.ng-isolate-scope[data-ng-if=\"::post.hasNoMedia && !post.isLinkedInPostShare\"][id^=\"content-bm-posts-saas\"]").textContent;

if (comentario === "") {
    console.log("comentário, realmente, sem avaliação");
    //executa o script padrão
    // Chamando a função AbrirTicket
    AbrirTicket();
} else {
    console.log("comentário contém texto:", comentario);
    //não abrimos o ticket
    //adicionamos +1 no contador
    //passamos para a próxima lista
}
