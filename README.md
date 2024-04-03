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

### 2.1 - CONEXÃO COM O "Automac_Part1" E ABERTURA DO TICKET(Em andamento)

