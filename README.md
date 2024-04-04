# Automação_BM_GMB
>Esse código foi projetado para ser usado diretamente no console de qualquer navegador. Através da interação do Javascript "puro" com o Código-Fonte do aplicativo web.

O viés do projeto é automatizar a criação e o preenchimento de tickets repetitivos específicos de um dado relatório. Observando que as interações dentro desse relatório se repetem exaustivamente e não se faz necessária a análise criteriosa de um humano.

Link do relatório: https://app.buzzmonitor.com.br/reports/65a57e838607cd490c6d76cc
## 1.0 - AUTOMAÇÃO NA CRIAÇÃO DO TICKET 
>lembrar de adicionar o caso onde o ticket já foi aberto anteriormente, no final do código.

### 1.1 - PRIMEIRA TELA

Coleta o primeiro span que sinaliza "C" ou "P".
```JavaScript
	var valorSpan = document.querySelector('span[data-ng-bind="::brandInitials(post)"]').textContent;
```
Coleta a nota
```JavaScript
// Seleciona o icone azul de nota no BMG
var Primeiranota = document.querySelector('span.review-rating.ng-binding.ng-scope');

// armazena a nota
var Notaticket = Primeiranota.textContent;
var NotaDoTicket = "Nota " + Notaticket;
console.log(NotaDoTicket);
```
Clique para abrir o ticket.
```JavaScript
	document.querySelector('a.new-ticket[data-ng-if="displayNewTicketButton(post)"][data-ng-click="showNewTicket(post)"]').click();
```
### 1.2 - SEGUNDA TELA

Essa parte preenche a marca.
```JavaScript
 if (valorSpan === 'C'); //selecione Casas Bahia
	{                     
	// selecionar o elemento pelo ID
	var selectElement = document.getElementById("ticket-brand");

	// verificar se o elemento foi encontrado

	if (selectElement) {
  	// Definir o valor "Casas Bahia"
  	selectElement.value = "616038478607cd31975c4006_casas_bahia";
  
  	// Disparar um evento de mudança
  	var event = new Event('change');
  	selectElement.dispatchEvent(event);
	} else {
  	console.log("Elemento não encontrado.");
	}

                     }
       else //selecione Ponto
        { 
        var selectElement = document.getElementById("ticket-brand");

	// Verificar se o elemento foi encontrado
	if (selectElement) {
  	// Definir o valor selecionado como "Ponto"
  	selectElement.value = "616038478607cd31975c4006_ponto";
  
  	// Disparar um evento de mudança
  	var event = new Event('change');
  	selectElement.dispatchEvent(event);
	} else {
  	console.log("Elemento não encontrado.");
	}
        }
```

E essa parte procura o responsável.
```JavaScript
// Selecionar o elemento pelo ID
var selectElement = document.querySelector("select.responsible-select");

// Verificar se o elemento foi encontrado
if (selectElement) {
  // Definir o valor selecionado como "Caio Araújo"
  selectElement.value = "Caio Araújo";
  
  // Disparar um evento de mudança
  var event = new Event('change');
  selectElement.dispatchEvent(event);
} else {
  console.log("Elemento não encontrado.");
}
```

Por último, enviamos os dados preenchidos.
```JavaScript
// Encontra o botão pelo XPath
var element = document.evaluate('//*[@id="ticketForm"]/div[2]/input', document, null, 
                                XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

// Verifica se o elemento foi encontrado
if (element) {
  // Clica nele
  element.click();
} else {
  console.log("Elemento não encontrado com o XPath fornecido.");
}
```
## 2.0 - AUTOMAÇÃO NO PREENCHIMENTO DO TICKET(Em andamento)
>lembrar de adicionar o caso onde o ticket já foi aberto anteriormente, antes de começar o código.

### 2.1 - CONEXÃO COM O "Automac_Part1" E ABERTURA DO TICKET
Após o envio do Json, usamos esse comando para abrir o ticket

```JavaScript
// Localize o ticket aberto usando o seletor CSS
var ticketopen = document.querySelector('a.open-ticket.ng-scope');

// Verifica se o elemento foi encontrado
if (ticketopen) {
    // Simula um clique no elemento
    ticketopen.click();
} else {
    console.log("Ticket não encontrado.");
}
```
### 2.2 - Preenchimento dos dados do ticket.
### 2.2.1 - 00 avaliação sem comentário.

```JavaScript
// Selecionando o botão pelo seletor CSS
var button = document.querySelector("#modal-show-ticket > div.ticket-container > div > div.ticket-options > div.input-container.relative > div.ticket-tags.actions-item.ng-scope > a.button.tags.tooltipstered");

// Verificando se o botão foi encontrado
if (button) {
    // Simulando um clique no botão
    button.click();
} else {
    console.error("Botão não encontrado.");
}

// Selecionando o elemento correspondente ao item "00. Avaliação Sem Comentário"
var avaliacaoSemComentarioItem = document.querySelector(".item-list.tooltipster.ng-scope.blank:nth-of-type(1)");

// Simulando o clique no elemento
if (avaliacaoSemComentarioItem) {
    avaliacaoSemComentarioItem.click();
} else {
    console.log("O elemento '00. Avaliação Sem Comentário' não foi encontrado.");
}
```
### 2.2.2 - Escrever "Nota" na barra de pesquisa.
	>Foi a solução necessária para conseguir preencher as notas, devido a peculiaridade do AngularJS 
Simula um clique na barra
```JavaScript
// Selecionando o botão pelo seletor CSS
var button = document.querySelector("#modal-show-ticket > div.ticket-container > div > div.ticket-options > div.input-container.relative > div.ticket-tags.actions-item.ng-scope > a.button.tags.tooltipstered");

// Verificando se o botão foi encontrado
if (button) {
    // Simulando um clique no botão
    button.click();
} else {
    console.error("Botão não encontrado.");
}

```
Localiza e preenche a barra com o nome "Nota"
```JavaScript
// Selecionando o input pelo seletor CSS
var input = document.querySelector("#modal-show-ticket > div.ticket-container > div > div.ticket-options > div.input-container.relative > div.ticket-tags.actions-item.ng-scope > ul > input");

// Verificando se o input foi encontrado
if (input) {
    // Definindo o valor do input como "Nota"
    input.value = "Nota";
} else {
    console.error("Input não encontrado.");
}

```

Remove 1 caracter para ativar o script angularJS
```JavaScript
// Selecionando o input pelo seletor CSS
var input = document.querySelector("#modal-show-ticket > div.ticket-container > div > div.ticket-options > div.input-container.relative > div.ticket-tags.actions-item.ng-scope > ul > input");

// Verificando se o input foi encontrado
if (input) {
    // Simulando um clique no input
    input.click();

    // Removendo o último caractere do valor do input
    var valorAtual = input.value;
    input.value = valorAtual.slice(0, -1); // Remove o último caractere

    // Disparando um evento de input para notificar o input sobre a alteração
    var event = new Event('input', { bubbles: true });
    input.dispatchEvent(event);
} else {
    console.error("Input não encontrado.");
}


```

### 2.2.3 - Condicional do preenchimento das Notas.

```JavaScript
// Localizando todas as labels com data-ng-class="tag.selection" e classe "ng-binding blank"
var labels = document.querySelectorAll("label[data-ng-class='tag.selection'].ng-binding.blank");

// Iterando sobre todas as labels encontradas
labels.forEach(function(label) {
    // Obtendo o conteúdo da label
    var content = label.textContent.trim();
    // Verificando se o conteúdo da label é igual à variável notaticket
    if (content === NotaDoTicket) {
        // Preenchendo o input com o valor da variável notaticket
        var input = document.querySelector("#modal-show-ticket > div.ticket-container > div > div.ticket-options > div.input-container.relative > div.ticket-tags.actions-item.ng-scope > ul > input");
        input.value = NotaDoTicket;
        console.log("Preenchendo com", NotaDoTicket);
        // Simulando um clique na label
        label.click();
    }
});
```
