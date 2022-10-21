const inputdemonstracao = {
    'nome': document.getElementById('demonstracao-nome'),
    'sobrenome': document.getElementById('demonstracao-sobrenome'),
    'email': document.getElementById('demonstracao-email'),
    'telefone': document.getElementById('demonstracao-telefone'),
    'cidade': document.getElementById('demonstracao-cidade'),
    'estado': document.getElementById('demonstracao-estado'),
    'papel': document.getElementById('demonstracao-papel'),
    'condominio': document.getElementById('demonstracao-condominio'),
}

const secao12Email = document.getElementById('secao12-email-button');
const secao12Whatsapp = document.getElementById('secao12-whatsapp-button');
const button = document.getElementById('demonstracao-button');
const popup = document.getElementById('secao12-popup-div');
const closePopup = document.getElementById('secao12-close-popup');

// Todos os valores para usar para enviar no email
const jsonEmail = {
    'nome': document.getElementById('demonstracao-nome').value,
    'sobrenome': document.getElementById('demonstracao-sobrenome').value,
    'email': document.getElementById('demonstracao-email').value,
    'telefone': document.getElementById('demonstracao-telefone').value,
    'cidade': document.getElementById('demonstracao-cidade').value,
    'estado': document.getElementById('demonstracao-estado').value,
    'papel': document.getElementById('demonstracao-papel').value,
    'condominio': document.getElementById('demonstracao-condominio').value,
}

button.addEventListener('click', () => {
    demonstracaoValidacao();
});

closePopup.addEventListener('click', () => {
    popup.classList.remove('show-popup');
});

secao12Email.addEventListener('click', sendEmail);
secao12Whatsapp.addEventListener('click', sendWhatsapp);

function demonstracaoValidacao() {
    inputdemonstracao.nome.classList.remove('inputRequired');
    inputdemonstracao.sobrenome.classList.remove('inputRequired');
    inputdemonstracao.email.classList.remove('inputRequired');
    inputdemonstracao.telefone.classList.remove('inputRequired');
    inputdemonstracao.cidade.classList.remove('inputRequired');
    inputdemonstracao.estado.classList.remove('inputRequired');
    inputdemonstracao.papel.classList.remove('inputRequired');
    inputdemonstracao.condominio.classList.remove('inputRequired');
    if (inputdemonstracao.nome.value == "" || inputdemonstracao.sobrenome.value == "" || inputdemonstracao.email.value == "" || inputdemonstracao.estado.value == "" ||
        inputdemonstracao.telefone.value == "" || inputdemonstracao.cidade.value == "" || inputdemonstracao.papel.value == "" || inputdemonstracao.condominio == "") {
        if (inputdemonstracao.email.value == "") {
            inputdemonstracao.email.classList.add('inputRequired');
        }
        if (inputdemonstracao.nome.value == "") {
            inputdemonstracao.nome.classList.add('inputRequired');
        }
        if (inputdemonstracao.sobrenome.value == "") {
            inputdemonstracao.sobrenome.classList.add('inputRequired');
        }
        if (inputdemonstracao.cidade.value == "") {
            inputdemonstracao.cidade.classList.add('inputRequired');
        }
        if (inputdemonstracao.estado.value == "") {
            inputdemonstracao.estado.classList.add('inputRequired');
        }
        if (inputdemonstracao.telefone.value == "") {
            inputdemonstracao.telefone.classList.add('inputRequired');
        }
        if (inputdemonstracao.papel.value == "") {
            inputdemonstracao.papel.classList.add('inputRequired');
        }
        if (inputdemonstracao.condominio.value == "") {
            inputdemonstracao.condominio.classList.add('inputRequired');
        }
    } else {
        popup.classList.add('show-popup');
    }
}

function sendEmail() {

}

function sendWhatsapp() {
    let telefone = inputdemonstracao.telefone.value ? inputdemonstracao.telefone.value : 'Não informado';
    let message = 'Olá, menu nome é ' + inputdemonstracao.nome.value + ', estou entrando entrando em contato para solicitar uma demonstração %0aCidade: ' + inputdemonstracao.cidade.value + ' %0aTelefone: ' + telefone
    window.open('https://api.whatsapp.com/send?phone=554836221001&text=' + message);
}