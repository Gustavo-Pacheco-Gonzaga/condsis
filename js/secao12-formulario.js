const secao12Button = document.getElementById('secao12-button');
const popup = document.getElementById('secao12-popup-div');
const closePopup = document.getElementById('secao12-close-popup');

const secao12Email = document.getElementById('secao12-email-button');
const secao12Whatsapp = document.getElementById('secao12-whatsapp-button');

const inputSecao12 = {
	'planos': {
		'sindico': [
			document.getElementById('orcar-boletos'),
			document.getElementById('incluir-connect'),
			document.getElementById('incluir-premium'),
		],
		'administradora': [
			document.getElementById('orcar-boletos-administradora'),
			document.getElementById('incluir-connect-administradora'),
			document.getElementById('incluir-premium-administradora'),
		],
	},
	'numeroCondominios': document.getElementById('secao12-condominios'),
	'nome': document.getElementById('secao12-nome'),
	'cidade': document.getElementById('secao12-cidade'),
	'email': document.getElementById('secao12-email'),
	'telefone': document.getElementById('secao12-telefone'),
}

// Todos os valores para usar para enviar no email

let planosEscolhidos = [];
let tipoPlano = 'Síndico';

const buttonShowSindico = document.getElementById('button-show-sindico');
const buttonShowAdministradora = document.getElementById('button-show-administradora');
const divAdministradora = document.getElementById('administradora');
const divSindico = document.getElementById('sindico');

buttonShowSindico.addEventListener('click', showSindico);
buttonShowAdministradora.addEventListener('click', showAdministradora);

function showAdministradora() {
	divSindico.classList.add('hide');
	divAdministradora.classList.remove('hide');
	buttonShowSindico.classList.add('button-border-semi-blue');
	buttonShowAdministradora.classList.remove('button-border-semi-blue');
	tipoPlano = 'Administradora';
	inputSecao12.planos.sindico.forEach(opcao => {
		opcao.checked = false;
	});
}

function showSindico() {
	divAdministradora.classList.add('hide');
	divSindico.classList.remove('hide');
	buttonShowSindico.classList.remove('button-border-semi-blue');
	buttonShowAdministradora.classList.add('button-border-semi-blue');

	tipoPlano = 'Síndico';
	inputSecao12.planos.administradora.forEach(opcao => {
		opcao.checked = false;
	});
}

secao12Button.addEventListener('click', () => {
	secao12Validacao();
});

closePopup.addEventListener('click', () => {
	popup.classList.remove('show-popup')
});

secao12Email.addEventListener('click', sendEmail);
secao12Whatsapp.addEventListener('click', sendWhatsapp);

function secao12Validacao() {
	inputSecao12.nome.classList.remove('inputRequired');
	inputSecao12.cidade.classList.remove('inputRequired');
	inputSecao12.email.classList.remove('inputRequired');
	inputSecao12.numeroCondominios.classList.remove('inputRequired');
	if (inputSecao12.numeroCondominios.value == "" || inputSecao12.cidade.value == "" || inputSecao12.email.value == "" || inputSecao12.nome.value == "") {
		if (inputSecao12.numeroCondominios.value == "") {
			inputSecao12.numeroCondominios.classList.add('inputRequired');
		}
		if (inputSecao12.cidade.value == "") {
			inputSecao12.cidade.classList.add('inputRequired');
		}
		if (inputSecao12.email.value == "") {
			inputSecao12.email.classList.add('inputRequired');
		}
		if (inputSecao12.nome.value == "") {
			inputSecao12.nome.classList.add('inputRequired');
		}
	} else {
		planosEscolhidos = [];
		getPlanosEscolhidos();
		popup.classList.add('show-popup');
	}
}

function getPlanosEscolhidos() {
	planosEscolhidos.push('Avaliar Basic');
	inputSecao12.planos.sindico.forEach(opcao => {
		if (opcao.checked) {
			planosEscolhidos.push(opcao.name);
		}
	});
	inputSecao12.planos.administradora.forEach(opcao => {
		if (opcao.checked) {
			planosEscolhidos.push(opcao.name);
		}
	});
}

function sendEmail() {
	// Todos os valores para usar para enviar no email
	let planosEscolhidosMensagem = '';
	planosEscolhidos.forEach(plano => {
		planosEscolhidosMensagem += plano + '; '
	});
	const jsonEmailsecao12 = {
		'planos': planosEscolhidosMensagem,
		'numeroCondominios': document.getElementById('secao12-condominios').value,
		'nome': document.getElementById('secao12-nome').value,
		'cidade': document.getElementById('secao12-cidade').value,
		'email': document.getElementById('secao12-email').value,
		'telefone': document.getElementById('secao12-telefone').value,
	}
}

function sendWhatsapp() {
	let planosEscolhidosMensagem = '';
	planosEscolhidos.forEach(plano => {
		planosEscolhidosMensagem += '   ' + plano + ';%0a'
	});
	let telefone = inputSecao12.telefone.value ? inputSecao12.telefone.value : 'Não informado';
	let message = 'Olá, menu nome é ' + inputSecao12.nome.value + ', estou entrando entrando em contato para solicitar uma demonstração para ' + tipoPlano +
		' %0aNúmero de condomínios: ' + inputSecao12.numeroCondominios.value + ' %0aCidade: ' + inputSecao12.cidade.value + ' %0aTelefone: ' + telefone +
		'. %0aPlanos escolhidos: %0a' + planosEscolhidosMensagem;
	window.open('https://api.whatsapp.com/send?phone=554836221001&text=' + message);
}
