//Esse código usa Javascript puro

//armazena a marca
var valorSpan = document.querySelector('span[data-ng-bind="::brandInitials(post)"]').textContent;

//clica em abrir o ticket
document.querySelector('a.new-ticket[data-ng-if="displayNewTicketButton(post)"][data-ng-click="showNewTicket(post)"]').click();

//condicional para o preenchimento da marca
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

//condicional para o preenchimento do responsável
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

//Último passo - enviar 
var element = document.evaluate('//*[@id="ticketForm"]/div[2]/input', document, null, 
                                XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
// Verifica se o elemento foi encontrado
if (element) {
  // Clica nele
  element.click();
} else {
  console.log("Elemento não encontrado com o XPath fornecido.");
}
