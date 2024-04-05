## 2.0 - AUTOMAÇÃO NO PREENCHIMENTO DO TICKET(Em andamento)
>lembrar de adicionar o caso onde o ticket já foi aberto anteriormente, antes de começar o código.
>O código com o botão OK está no VSCODE
>O botão de sentimentalização desse comentário vira o penúltimo, antepenúltimo, n, n-1, ... do selector

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
