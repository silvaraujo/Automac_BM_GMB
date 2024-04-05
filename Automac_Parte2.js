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
        } else {
            console.error("Elemento não encontrado.");
            return;
        }
    });
}

// Chamada da função principal para iniciar a automação das interações
automatizarInteracoes();
