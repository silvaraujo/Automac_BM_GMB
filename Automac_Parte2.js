function esperarEExecutar(tempo, acao) { // Função geral de intervalo p/ realizar uma ação
    setTimeout(acao, tempo);
}

function automatizarInteracoes() { // Função principal
    
    esperarEExecutar(5000, () => { // Abre o ticket
        var ticketopen = document.querySelector('a.open-ticket.ng-scope');
        if (ticketopen) {
            ticketopen.click();
            console.log("Ticket aberto para preencher.");
        } else {
            console.error("Ticket não encontrado.");
        }
    });

    esperarEExecutar(10000, () => { // Abre a caixa lateral de tags do ticket
        var button = document.querySelector("#tags-list-container");
        if (button) {
            button.click();
        } else {
            console.error("Botão não encontrado.");
        }
    });

    esperarEExecutar(15000, () => { //Preenche a nota do ticket
        var Primeiranota = document.querySelector('span.review-rating.ng-binding.ng-scope');
        if (Primeiranota) {
            var Notaticket = Primeiranota.textContent;
            console.log("A nota da avaliação é:", Notaticket);
            var NotaDoTicket = "Nota " + Notaticket;
        } else {
            console.error("Nota não encontrada");            
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

     esperarEExecutar(16000, () => { //Devido a limitações do AngularJS e Javascript, foi necessário adicioná-lo
        var input = document.querySelector("#modal-show-ticket > div.ticket-container > div > div.ticket-options > div.input-container.relative > div.ticket-tags.actions-item.ng-scope > ul > input");
        var valorAtual = input.value;
        input.value = valorAtual.slice(0, -6);
        var event = new Event('input', { bubbles: true });
        input.dispatchEvent(event);
    });

    esperarEExecutar(20000, () => { //Preenche a tag Avaliação Sem Comentário
        const itens = document.querySelectorAll(".item-list-container");
        let antepenultimoElemento = null;
        let penultimoElemento = null;
        let ultimoElemento = null;

        let Ava = null;

        itens.forEach(item => { //contador de seletores
            const labelElement = item.querySelector('label.blank');
            if (labelElement && labelElement.innerText.trim() === '00. Avaliação Sem Comentário') {
                Ava = antepenultimoElemento;
                antepenultimoElemento = penultimoElemento;
                penultimoElemento = ultimoElemento;
                ultimoElemento = labelElement;
            }
        });

        if (Ava) {
            esperarEExecutar(5000, () => { //preenchimento do seletor indicado na página - O 4° de trás para frente
                Ava.click();
                console.log('Tag - Avaliação Sem Comentário - preenchida');
            });
        } else {
            console.error('Último elemento não encontrado');            
        }
    });

    esperarEExecutar(25000, () => { //aplica as tags
        const elemento = document.querySelector("a.apply[data-ng-click='applyTags({post: ticket, tags: tags});notifyTagChanges(ticket)']");
        if (elemento) {
            elemento.click();
            console.log("Tags aplicadas!")
        } else {
            console.error("Elemento não encontrado.");          
        }
    });

    esperarEExecutar(30000, () => {   //Aplica o sentimento da avaliação 
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

   esperarEExecutar(35000, () => { //Aplica o sentimento no ticket
      var Primeiranota = document.querySelector('span.review-rating.ng-binding.ng-scope');

if (Primeiranota) {  
    var nota = parseInt(Primeiranota.textContent.trim());
    processarSentimento(nota);
} else {
    console.error("Primeira nota não encontrada.");
}

function processarSentimento(nota) { //O desafio foi fazer o código encontrar o seletor correto visto que ele muda de endereço dependendo do ticket
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
// Chamada da função principal para iniciar a automação das interações
automatizarInteracoes();
