//parte 01 ---------------------------------------------------------------------------------------------------------------
//contagem direcionadora de página
let contador = 0;

function AbrirTicket() {    contador++;

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
            setTimeout(() => {
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
            }, 5000); // Espera 2 segundos antes de selecionar a marca
        }, 5000); // Espera 2 segundos antes de clicar em "Abrir Ticket"
    }, 5000); // Espera 1 segundo antes de armazenar a marca e a nota
}

//coletor generalizado dos comentários com ou sem texto
//p.content.noiframe.ng-binding.ng-scope.ng-isolate-scope[data-ng-if="::post.hasNoMedia && !post.isLinkedInPostShare"][id^="content-bm-posts-saas"]

const comentario = document.querySelector("p.content.noiframe.ng-binding.ng-scope.ng-isolate-scope[data-ng-if=\"::post.hasNoMedia && !post.isLinkedInPostShare\"][id^=\"content-bm-posts-saas\"]").textContent;

if (comentario === "") {
    console.log("comentário sem avaliação - apto para 1° fase");
    setTimeout(() => {
    // Chamando a função AbrirTicket
    AbrirTicket();    
    }, 5000); // Espera 5 segundos antes de chamar a função
} else {
    console.log("comentário contém texto:", comentario);
    //adicionamos +1 no contador
    contador++;
    //passamos para a próxima lista no final do código
}

//parte 2 --------------------------------------------------------------------------------------------------------------------------

// Função para esperar o tempo determinado e realizar uma ação
function esperarEExecutar(tempo, acao) {
    setTimeout(acao, tempo);
}

// Função principal que contém todas as ações a serem executadas
function automatizarInteracoes() {
    esperarEExecutar(4000, () => {
        var ticketopen = document.querySelector('a.open-ticket.ng-scope');
        if (ticketopen) {
            ticketopen.click();
            console.log("Ticket aberto para preencher.");
        } else {
            console.error("Ticket não encontrado.");
            return;
        }
    });

    esperarEExecutar(10000, () => {
        var button = document.querySelector("#tags-list-container");
        if (button) {
            button.click();
        } else {
            console.error("Botão não encontrado.");
            return;
        }
    });

    esperarEExecutar(12000, () => {
        var input = document.querySelector("#modal-show-ticket > div.ticket-container > div > div.ticket-options > div.input-container.relative > div.ticket-tags.actions-item.ng-scope > ul > input");
        var valorAtual = input.value;
        input.value = valorAtual.slice(0, -6);
        var event = new Event('input', { bubbles: true });
        input.dispatchEvent(event);
    });

    esperarEExecutar(16000, () => {
        var Primeiranota = document.querySelector('span.review-rating.ng-binding.ng-scope');
        if (Primeiranota) {
            var Notaticket = Primeiranota.textContent;
            console.log("A nota da avaliação é:", Notaticket);
            var NotaDoTicket = "Nota " + Notaticket;
        } else {
            console.error("Nota não encontrada");
            return;
        }

        var labels = document.querySelectorAll("label[data-ng-class='tag.selection'].ng-binding.blank");
        labels.forEach(function(label) {
            var content = label.textContent.trim();
            if (content === NotaDoTicket) {
                var input = document.querySelector("#modal-show-ticket > div.ticket-container > div > div.ticket-options > div.input-container.relative > div.ticket-tags.actions-item.ng-scope > ul > input");
                input.value = NotaDoTicket;
                console.log("Preenchendo com a", NotaDoTicket);
                label.click();
            }
        });
    });

    esperarEExecutar(17000, () => {
        const itens = document.querySelectorAll(".item-list-container");
        let antepenultimoElemento = null;
        let penultimoElemento = null;
        let ultimoElemento = null;

        let Ava = null;

        itens.forEach(item => {
            const labelElement = item.querySelector('label.blank');
            if (labelElement && labelElement.innerText.trim() === '00. Avaliação Sem Comentário') {
                Ava = antepenultimoElemento;
                antepenultimoElemento = penultimoElemento;
                penultimoElemento = ultimoElemento;
                ultimoElemento = labelElement;
            }
        });

        if (Ava) {
            esperarEExecutar(5000, () => {
                Ava.click();
                console.log('Tag - Avaliação Sem Comentário - preenchida');
            });
        } else {
            console.error('Último elemento não encontrado');
            return;
        }
    });

    esperarEExecutar(25000, () => {
        const elemento = document.querySelector("a.apply[data-ng-click='applyTags({post: ticket, tags: tags});notifyTagChanges(ticket)']");
        if (elemento) {
            elemento.click();
            console.log("Tags aplicadas")
        } else {
            console.error("Elemento não encontrado.");
            return;
        }
    });

    esperarEExecutar(30000, () => {
        
    // Sentimentos da avaliação
var Primeiranota = document.querySelector('span.review-rating.ng-binding.ng-scope');

// Verifica se a Primeiranota foi encontrada
if (Primeiranota) {
    // Obtém o valor da nota convertendo para um número
    var nota = parseInt(Primeiranota.textContent.trim());

    // Caso positivo (nota maior ou igual a 4)
    if (nota >= 4) {
        // Sentimentos positivos
        var sentimentos = document.querySelectorAll("div.bts-actions > div.sentiments.ng-scope > a.positive.on");

        // Verifica se há algum elemento retornado
        if (sentimentos.length > 0) {
            // Acessa o último elemento do array usando o índice -1 e simula um clique nele
            sentimentos[sentimentos.length - 1].click();
            console.log("Sentimento da avaliação preenchido - positivo.");
        } else {
            console.error("Nenhum elemento positivo encontrado.");
            return;
        }
    }
    // Caso neutro (nota igual a 3)
    else if (nota === 3) {
        // Sentimento neutro
        var sentimentos = document.querySelectorAll("div.bts-actions > div.sentiments.ng-scope > a.neutral");

        // Verifica se há algum elemento retornado
        if (sentimentos.length > 0) {
            // Acessa o último elemento do array usando o índice -1 e simula um clique nele
            sentimentos[sentimentos.length - 1].click();
            console.log("Sentimento da avaliação preenchido - neutro.");
        } else {
            console.error("Nenhum elemento neutro encontrado.");
            return;
        }
    }
    // Caso negativo (nota menor ou igual a 2)
    else {
        // Sentimentos negativos
        var sentimentos = document.querySelectorAll("div.bts-actions > div.sentiments.ng-scope > a.negative");

        // Verifica se há algum elemento retornado
        if (sentimentos.length > 0) {
            // Acessa o último elemento do array usando o índice -1 e simula um clique nele
            sentimentos[sentimentos.length - 1].click();
            console.log("Sentimento da avaliação preenchido - negativo.");
        } else {
            console.error("Nenhum elemento negativo encontrado.");
            return;
        }
    }
} else {
    console.error("Primeira nota não encontrada.");
    return;
}

    });

   esperarEExecutar(35000, () => {
      var Primeiranota = document.querySelector('span.review-rating.ng-binding.ng-scope');

if (Primeiranota) {
    var nota = parseInt(Primeiranota.textContent.trim());
    processarSentimento(nota);
} else {
    console.error("Primeira nota não encontrada.");
}

function processarSentimento(nota) {
    var sentimentoElemento;
    var xpathElemento;

    switch (nota) {
        case 4:
        case 5:
            xpathElemento = '//*[@id="modal-show-ticket"]/div[1]/div/div[1]/fieldset[5]/div/a[1]';
            sentimentoElemento = document.querySelector("fieldset.ticket-sentiment.ng-scope > div > a.positive.tooltipstered") ||
                document.querySelector("fieldset.ticket-sentiment.ng-scope > div > a.positive.on.tooltipstered");
            break;
        case 3:
            xpathElemento = '//*[@id="modal-show-ticket"]/div[1]/div/div[1]/fieldset[5]/div/a[2]';
            sentimentoElemento = document.querySelector("fieldset.ticket-sentiment.ng-scope > div > a.neutral.on.tooltipstered") ||
                document.querySelector("fieldset.ticket-sentiment.ng-scope > div > a.neutral.tooltipstered");
            break;
        default:
            xpathElemento = '//*[@id="modal-show-ticket"]/div[1]/div/div[1]/fieldset[5]/div/a[3]';
            sentimentoElemento = document.querySelector("fieldset.ticket-sentiment.ng-scope > div > a.negative.tooltipstered") ||
                document.querySelector("fieldset.ticket-sentiment.ng-scope > div > a.negative.on.tooltipstered");
    }

    if (sentimentoElemento) {
        sentimentoElemento.click();
        console.log("Sentimento do ticket preenchido - " + (nota >= 4 ? "positivo" : nota === 3 ? "neutro" : "negativo"));
    } else {
        var xpathResult = document.evaluate(xpathElemento, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
        var elementoXPath = xpathResult.singleNodeValue;
        
        if (elementoXPath) {
            elementoXPath.click();
            console.log("Sentimento do ticket preenchido - " + (nota >= 4 ? "positivo" : nota === 3 ? "neutro" : "negativo"));
        } else {
            console.error("Botão de sentimento não encontrado");
        }
    }
}

});

     esperarEExecutar(40000, () => {  
    // Resolve o ticket
// Seleciona o elemento <select> pelo ID
var selectElement = document.getElementById("ticket-status");

// Verifica se o elemento foi encontrado
if (selectElement) {
    // Define o índice da opção "Resolvido" como selecionado
    selectElement.selectedIndex = 3;
    
    // Dispara o evento de mudança para notificar a seleção da opção
    var changeEvent = new Event("change", { bubbles: true });
    selectElement.dispatchEvent(changeEvent);
    
    console.log("Opção 'Resolvido' selecionada.");
} else {
    console.error("Elemento <select> não encontrado.");
}
         });

     esperarEExecutar(45000, () => { 

         var apertavoltar = document.querySelector("#modal-show-ticket > div.ticket-container > div > div.ticket-options > a");

    if (apertavoltar) {
    apertavoltar.click();
    console.log("Voltando para a posição inicial.");
    } else {
    console.error("Botão de voltar não encontrado.");
    }


         });
}

//localiza a aba de alerta e seu botão
const alerta = document.querySelector("body > div.sweet-alert.showSweetAlert.visible")
const alerta_ok = document.querySelector("body > div.sweet-alert.showSweetAlert.visible > div.sa-button-container > div > button")

if (alerta) { //não executamos a parte 2. Ou seja, não abre para preencher o ticket. Caso seja uma nova avaliação do cliente, o ticket ficará como "novo"
  console.log("Ticket já foi aberto anteriormente");
   //clica no botão ok
   alerta_ok.click();
    //adicionamos +1 no contador
    contador++;
    //passamos para a próxima lista no final do código
} else {
    setTimeout(() => {
    // Chamada da função principal para iniciar a automação das interações
    automatizarInteracoes();
    }, 40000); // Espera 40 segundos antes de chamar a função
    //passamos para a próxima lista no final do código
}
//vamos estar na posição inicial e com o ticket devidamente observado pelo algoritmo. Logo, passamos para a próxima lista usando a lógica do contador
