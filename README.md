# Automa-o_BM_GMB                                
 
 	1.PARTE DE AUTOMAÇÃO NA CRIAÇÃO DO TICKET "lembrar de adicionar o caso onde o ticket já foi aberto anteriormente"

	1.1.PRIMEIRA TELA

//Coleta se é "C" ou "P". //Preciso ter certeza que vai obter o do primeiro caso dentro do conteiner

	var valorSpan = document.querySelector('span[data-ng-bind="::brandInitials(post)"]').textContent;
	//para visualizar o valor: console.log(valorSpan);

//Clique para abrir o ticket. //qual orientação segue o comando? Primeiro elemento dessa classe mostrada no webcódigo? precisa testar.
	document.querySelector('a.new-ticket[data-ng-if="displayNewTicketButton(post)"][data-ng-click="showNewTicket(post)"]').click();

	1.2.SEGUNDA TELA //Condicionais e preenchimento dos seletores

 //Primeira caixa - Projeto
 if (valorSpan === 'C'); //selecione Casas Bahia
                     {
                     
	// Selecionar o elemento pelo ID
	var selectElement = document.getElementById("ticket-brand");

	// Verificar se o elemento foi encontrado
	if (selectElement) {
  	// Definir o valor selecionado como "Casas Bahia"
  	selectElement.value = "616038478607cd31975c4006_casas_bahia";
  
  	// Disparar um evento de mudança
  	var event = new Event('change');
  	selectElement.dispatchEvent(event);
	} else {
  	console.log("Elemento <select> não encontrado.");
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
  	console.log("Elemento <select> não encontrado.");
	}
        }

 //Segunda caixa - Responsável

// Selecionar o elemento <select> pelo ID
var selectElement = document.querySelector("select.responsible-select");

// Verificar se o elemento foi encontrado
if (selectElement) {
  // Definir o valor selecionado como "Caio Araújo"
  selectElement.value = "Caio Araújo";
  
  // Disparar um evento de mudança (isso é importante para notificar qualquer manipulador de eventos associado ao elemento)
  var event = new Event('change');
  selectElement.dispatchEvent(event);
} else {
  console.log("Elemento <select> não encontrado.");
}

 //Último passo - enviar

// Encontrar o elemento pelo XPath
var element = document.evaluate('//*[@id="ticketForm"]/div[2]/input', document, null, 
                                XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

// Verificar se o elemento foi encontrado
if (element) {
  // Simular o clique no elemento
  element.click();
} else {
  console.log("Elemento não encontrado com o XPath fornecido.");
}

    
----------------

// Selecionar o elemento pelo ID
var selectElement = document.getElementById("s2id_autogen67");

// Verificar se o elemento foi encontrado
if (selectElement) {
  // Definir o valor selecionado como "Ponto"
  selectElement.value = "616038478607cd31975c4006_ponto";
  
  // Disparar um evento de mudança
  var event = new Event('change');
  selectElement.dispatchEvent(event);
} else {
  console.log("Elemento <select> não encontrado.");
}
