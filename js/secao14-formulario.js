const inputSecao14 = {
    'nome': document.getElementById('secao14-nome'),
    'sobrenome': document.getElementById('secao14-sobrenome'),
    'email': document.getElementById('secao14-email'),
    'telefone': document.getElementById('secao14-telefone'),
    'mensagem': document.getElementById('secao14-mensagem'),
}

const button = document.getElementById('secao14-button');

// Todos os valores para usar para enviar no email
const jsonEmailsecao14 = {
    'nome': document.getElementById('secao14-nome').value,
    'sobrenome': document.getElementById('secao14-sobrenome').value,
    'email': document.getElementById('secao14-email').value,
    'telefone': document.getElementById('secao14-telefone').value,
    'mensagem': document.getElementById('secao14-mensagem').value,
}

button.addEventListener('click', () => {
    secao14Validacao();
});

function secao14Validacao() {
    inputSecao14.nome.classList.remove('inputRequired');
    inputSecao14.sobrenome.classList.remove('inputRequired');
    inputSecao14.email.classList.remove('inputRequired');
    inputSecao14.mensagem.classList.remove('inputRequired');
    if (inputSecao14.mensagem.value == "" || inputSecao14.sobrenome.value == "" || inputSecao14.email.value == "" || inputSecao14.nome.value == "") {
        if (inputSecao14.email.value == "") {
            inputSecao14.email.classList.add('inputRequired');
        }
        if (inputSecao14.nome.value == "") {
            inputSecao14.nome.classList.add('inputRequired');
        }
        if (inputSecao14.sobrenome.value == "") {
            inputSecao14.sobrenome.classList.add('inputRequired');
        }
        if (inputSecao14.mensagem.value == "") {
            inputSecao14.mensagem.classList.add('inputRequired');
        }
    } else {
        sendEmail();
    }
}

function sendEmail() {
    let telefone = inputSecao12.telefone.value ? inputSecao12.telefone.value : 'Não informado';
    let message = 'Nome: ' + inputSecao12.nome.value + ', Sobrenome ' + inputSecao12.sobrenome.value + ', Telefone: ' + telefone +
        '. Mensagem: ' + inputSecao12.mensagem.value;

    Email.send({
        Host: "contato@condsis.com",
        // Username : "<sender’s email address>",
        // Password : "<email password>",
        To: 'contato@condsis.com',
        From: "inputSecao12.email.value",
        Subject: "Solicitar demonstração para " + tipoPlano,
        Body: message,
    }).then(
        message => alert("Email enviado com sucesso")
    );
}
