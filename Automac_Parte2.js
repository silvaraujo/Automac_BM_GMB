// Função para esperar um determinado tempo e realizar uma ação
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
        }
    }
} else {
    console.error("Primeira nota não encontrada.");
    return;
}

    });
  
}

// Chamada da função principal para iniciar a automação das interações
automatizarInteracoes();
