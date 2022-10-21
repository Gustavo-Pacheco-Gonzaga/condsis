const inputSuporte = {
    'nome': document.getElementById('suporte-nome'),
    'sobrenome': document.getElementById('suporte-sobrenome'),
    'email': document.getElementById('suporte-email'),
    'telefone': document.getElementById('suporte-telefone'),
    'papel': document.getElementById('suporte-papel'),
    'condominio': document.getElementById('suporte-condominio'),
    'mensagem': document.getElementById('suporte-mensagem'),
}

const button = document.getElementById('suporte-button');

// Todos os valores para usar para enviar no email
const jsonEmail = {
    'nome': document.getElementById('suporte-nome').value,
    'sobrenome': document.getElementById('suporte-sobrenome').value,
    'email': document.getElementById('suporte-email').value,
    'telefone': document.getElementById('suporte-telefone').value,
    'papel': document.getElementById('suporte-papel').value,
    'condominio': document.getElementById('suporte-condominio').value,
    'mensagem': document.getElementById('suporte-mensagem').value,
}

button.addEventListener('click', () => {
    suporteValidacao();
});

function suporteValidacao() {
    inputSuporte.nome.classList.remove('inputRequired');
    inputSuporte.sobrenome.classList.remove('inputRequired');
    inputSuporte.email.classList.remove('inputRequired');
    inputSuporte.telefone.classList.remove('inputRequired');
    inputSuporte.condominio.classList.remove('inputRequired');
    inputSuporte.mensagem.classList.remove('inputRequired');
    if (inputSuporte.mensagem.value == "" || inputSuporte.sobrenome.value == "" || inputSuporte.email.value == "" || inputSuporte.nome.value == "" || inputSuporte.telefone.value == "" || inputSuporte.condominio.value == "") {
        if (inputSuporte.email.value == "") {
            inputSuporte.email.classList.add('inputRequired');
        }
        if (inputSuporte.nome.value == "") {
            inputSuporte.nome.classList.add('inputRequired');
        }
        if (inputSuporte.sobrenome.value == "") {
            inputSuporte.sobrenome.classList.add('inputRequired');
        }
        if (inputSuporte.telefone.value == "") {
            inputSuporte.telefone.classList.add('inputRequired');
        }
        if (inputSuporte.condominio.value == "") {
            inputSuporte.condominio.classList.add('inputRequired');
        }
        if (inputSuporte.mensagem.value == "") {
            inputSuporte.mensagem.classList.add('inputRequired');
        }
    } else {
        sendEmail();
    }
}

function sendEmail() {

}
