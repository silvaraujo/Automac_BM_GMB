    //parte 2     
    function automatizarInteracoes() { // Função principal que contém todas as ações a serem executadas na parte 2
        setTimeout(() => {// Entramos no ticket aberto
        var ticketopen = document.querySelector('a.open-ticket.ng-scope');
        if (ticketopen) {
            ticketopen.click();
            console.log("Ticket aberto para preencher.");
        } else {
            console.error("Ticket não encontrado.");
            return;
        }
    
    
            setTimeout(() => { // Procura a lista de tags
                var list_button = document.querySelector("#tags-list-container");
                if (list_button) {
                    list_button.click();
                } else {
                    console.error("Botão de tags não encontrado.");
                    return;
                }
            
    
                setTimeout(() => { // Apaga o texto anterior para evitar bugs
                    var input = document.querySelector("#modal-show-ticket > div.ticket-container > div > div.ticket-options > div.input-container.relative > div.ticket-tags.actions-item.ng-scope > ul > input");
                    var valorAtual = input.value;
                    input.value = valorAtual.slice(0, -6); //apaga 6 caracteres
                    var event = new Event('input', { bubbles: true });
                    input.dispatchEvent(event);
                
    
                    setTimeout(() => { // Nessa parte preenchemos a nota dentro da lista de tags
                        //Observamos, novamente a nota do primeiro comentário. !!Seria bom aplicar uma variável com maior escopo já que usamos 3x no código   
                        var Primeiranota = document.querySelector('span.review-rating.ng-binding.ng-scope');
                        if (Primeiranota) {
                            var Notaticket = Primeiranota.textContent; // Retira o número inteiro
                            var NotaDoTicket = "Nota " + Notaticket; // Transforma no exato texto do input necessário
                        } else {
                            console.error("Nota do primeiro comentário não encontrada.");
                            return;
                        }
        
                        // Localizador da label que preenche as notas
                        var labels = document.querySelectorAll("label[data-ng-class='tag.selection'].ng-binding.blank");
                        if (!labels) { 
                            console.error("Labels que contém a nota não encontrada.");
                            return;
                        } else {
                        labels.forEach(function(label) { // Varre todos os seletores, visto que não há um único localizador para as tags
                            var content = label.textContent.trim(); // Retira o conteúdo de texto da tag
                            if (content === NotaDoTicket) { // Verifica se esse conteúdo é igual a nota do ticket trabalhado
                                var input = document.querySelector("#modal-show-ticket > div.ticket-container > div > div.ticket-options > div.input-container.relative > div.ticket-tags.actions-item.ng-scope > ul > input");
                                input.value = NotaDoTicket; // Preenche as notas tanto no box quanto na barra de pesquisa de tags devido a limitação do código fonte
                                console.log("Preenchendo com a", NotaDoTicket);
                                label.click(); // Seleciona a opção
                            }
                        });
                        }
    
    
                        setTimeout(() => { // Seleciona a tag avaliação sem comentário
                            const itens = document.querySelectorAll(".item-list-container"); //localiza todos os itens da lista de tags
                            let antepenultimoElemento = null; // Essa lógica guarda os 3 últimos valores encontrados
                            let penultimoElemento = null;
                            let ultimoElemento = null;
                        
                            let ava = null; // Esse let guarda o valor que queremos. Qué é onde se encontra a tag do container trabalhado
                        
                            itens.forEach(item => { //varre os itens
                                const labelElement = item.querySelector('label.blank');
                                if (labelElement && labelElement.innerText.trim() === '00. Avaliação Sem Comentário') {
                                    ava = antepenultimoElemento; 
                                    antepenultimoElemento = penultimoElemento; // Essa lógica permite que o valor que queremos seja encontrado
                                    penultimoElemento = ultimoElemento;
                                    ultimoElemento = labelElement;
                                }
                            });
                        
                            if (ava) {    
                                setTimeout(() => {    // Espera 5 segundos para dar tempo dos itens serem varridos
                                    ava.click();
                                    console.log('Tag - Avaliação Sem Comentário - preenchida');
                                }, 5000);
                            } else {
                                console.error('Último elemento não encontrado');
                                return;
                            }
                        
                        
                            setTimeout(() => {        //clica no botão de aplicar tags
                            const app_tag = document.querySelector("a.apply[data-ng-click='applyTags({post: ticket, tags: tags});notifyTagChanges(ticket)']");
                            if (app_tag) {
                                app_tag.click();
                                console.log("Tags aplicadas")
                            } else {
                                console.error("Elemento não encontrado.");
                                return;
                            }
                        
                        
                                setTimeout(() => {    // Nessa parte, aplicamos o sentimento na avaliação
                                //Observamos, novamente a nota do primeiro comentário. !!Seria bom aplicar uma variável com maior escopo já que usamos 3x no código           
                                var Primeiranota = document.querySelector('span.review-rating.ng-binding.ng-scope');
                                if (Primeiranota) {
                                var nota = parseInt(Primeiranota.textContent.trim()); // Obtém o valor da nota convertendo para um número
                                
                                if (nota >= 4) { // Caso positivo - nota igual ou maior que 4
                                    var sentimentos = document.querySelectorAll("div.bts-actions > div.sentiments.ng-scope > a.positive.on");
                                    if (sentimentos.length > 0) {     
                                        sentimentos[sentimentos.length - 1].click();     // Acessa o último elemento do array usando o índice -1 e executa um clique nele
                                        console.log("Sentimento da avaliação preenchido - positivo.");
                                    } else {
                                        console.error("Nenhum elemento positivo encontrado.");
                                        return;
                                    }
                                }
                                else if (nota === 3) {    // Caso neutro - nota igual a 3
                                    var sentimentos = document.querySelectorAll("div.bts-actions > div.sentiments.ng-scope > a.neutral");
                                    if (sentimentos.length > 0) {
                                        sentimentos[sentimentos.length - 1].click();    // Acessa o último elemento do array usando o índice -1 e executa um clique nele
                                        console.log("Sentimento da avaliação preenchido - neutro.");
                                    } else {
                                        console.error("Nenhum elemento neutro encontrado.");
                                        return;
                                    }
                                }
                                
                                else {    // Caso negativo - nota menor ou igual a 2
                                    var sentimentos = document.querySelectorAll("div.bts-actions > div.sentiments.ng-scope > a.negative");
                                    if (sentimentos.length > 0) {
                                        sentimentos[sentimentos.length - 1].click(); // Acessa o último elemento do array usando o índice -1 e simula um clique nele
                                        console.log("Sentimento da avaliação preenchido - negativo.");
                                    } else {
                                        console.error("Nenhum elemento negativo encontrado.");
                                        return;
                                    }
                                }
                                } else {
                                console.error("Nota do primeiro comentário não encontrada.");
                                return;
                                }
                                
                                
                                    setTimeout(() => { //nessa parte aplicamos o sentimento ao ticket
                                    //Observamos, novamente a nota do primeiro comentário. !!Seria bom aplicar uma variável com maior escopo já que usamos 3x no código    
                                    var Primeiranota = document.querySelector('span.review-rating.ng-binding.ng-scope');
                                    if (Primeiranota) {
                                    var nota = parseInt(Primeiranota.textContent.trim());
                                    processarSentimento(nota); //chama a função que preenche o sentimento do ticket
                                    } else {
                                    console.error("Primeira nota não encontrada.");
                                    return;
                                    }
                                    
                                    function processarSentimento(nota) {  //função responsável pelo preenchimento do ticket
                                    var sentimentoElemento;
                                    var xpathElemento;
                                    
                                    switch (nota) {  //esse algoritmo tenta encontrar a o seletor que preenche o sentimento do ticket. O endereço desse seletor muda de caso em caso.
                                        case 4:       //pode não ser necessário o uso do query selector mas mantive no código por opção
                                        case 5:
                                            xpathElemento = '//*[@id="modal-show-ticket"]/div[1]/div/div[1]/fieldset[5]/div/a[1]';    //seletores positivos
                                            sentimentoElemento = document.querySelector("fieldset.ticket-sentiment.ng-scope > div > a.positive.tooltipstered") ||
                                                document.querySelector("fieldset.ticket-sentiment.ng-scope > div > a.positive.on.tooltipstered");
                                            break;
                                        case 3:
                                            xpathElemento = '//*[@id="modal-show-ticket"]/div[1]/div/div[1]/fieldset[5]/div/a[2]';  //seletores neutros
                                            sentimentoElemento = document.querySelector("fieldset.ticket-sentiment.ng-scope > div > a.neutral.on.tooltipstered") ||
                                                document.querySelector("fieldset.ticket-sentiment.ng-scope > div > a.neutral.tooltipstered");
                                            break;
                                        default:
                                            xpathElemento = '//*[@id="modal-show-ticket"]/div[1]/div/div[1]/fieldset[5]/div/a[3]';    //seletores negativos
                                            sentimentoElemento = document.querySelector("fieldset.ticket-sentiment.ng-scope > div > a.negative.tooltipstered") ||
                                                document.querySelector("fieldset.ticket-sentiment.ng-scope > div > a.negative.on.tooltipstered");
                                    }
                                    
                                    if (sentimentoElemento) {  //clica na nota atribuida caso tenha sido achada pelo seletor
                                        sentimentoElemento.click();
                                        console.log("Sentimento do ticket preenchido - " + (nota >= 4 ? "positivo" : nota === 3 ? "neutro" : "negativo"));
                                    } else {
                                        var xpathResult = document.evaluate(xpathElemento, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
                                        var elementoXPath = xpathResult.singleNodeValue;
                                        
                                        if (elementoXPath) { //clica na nota atribuida caso tenha sido achada pelo xpath
                                            elementoXPath.click();
                                            console.log("Sentimento do ticket preenchido - " + (nota >= 4 ? "positivo" : nota === 3 ? "neutro" : "negativo"));
                                        } else {
                                            console.error("Botão de sentimento não encontrado");
                                            return;
                                        }
                                    }
                                        }
                                    
                                    
                                        setTimeout(() => { // Resolve o ticket
                                            var selectElement = document.getElementById("ticket-status");    // Seleciona o elemento <select> pelo ID
                                            if (selectElement) {    
                                            selectElement.selectedIndex = 3;    // Define como índice 3 
                                            
                                            var changeEvent = new Event("change", { bubbles: true });    // Dispara o evento de mudança
                                            selectElement.dispatchEvent(changeEvent);
                                            
                                            console.log("Opção 'Resolvido' selecionada.");
                                            } else {
                                            console.error("Não foi possível resolver o ticket");
                                            return;
                                            }
                                        
                                    
                                            setTimeout(() => {  //volta a posição inicial
                                                var apertavoltar = document.querySelector("#modal-show-ticket > div.ticket-container > div > div.ticket-options > a");
                                                if (apertavoltar) {
                                                apertavoltar.click();
                                                console.log("Voltando para a posição inicial.");
                                                } else {
                                                console.error("Botão de voltar não encontrado.");
                                                return;
                                                }
                                                
                                            }, 5000);           
                                        }, 5000);            
                                    }, 5000);                
                                }, 5000);                    
                            }, 8000);                         
                        }, 1000);                             
                    }, 4000);                                 
                }, 2000);                                  
            }, 6000);                                        
        }, 4000);
                                                
}    //fim da função da parte 2
