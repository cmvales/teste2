// Função para exibir os dados inseridos no formulário
function respostas() {
    // Captura os valores dos campos do formulário
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let telefone = document.getElementById("telefone").value;
    let mensagem = document.getElementById("mensagem").value;
    let motivo = document.getElementById("motivo").value;

    // Verifica se todos os campos estão preenchidos
    if (nome && email && telefone && mensagem && motivo) {
        // Atualiza o conteúdo da tag <section> com id "resultado"
        document.getElementById("resultado").innerHTML = `
            <h2>Dados Enviados:</h2>
            <p>Nome: ${nome}</p>
            <p>Email:${email}</p>
            <p>Telefone:${telefone}</p>
            <p>Mensagem:${mensagem}</p>
            <p>Motivo de Contato:${motivo}</p>
        `;
    } else {
        // Exibe um alerta se algum campo estiver vazio
        alert("Por favor, preencha todos os campos.");
    }
}

// Adiciona um evento para limpar a seção "resultado" quando o formulário for resetado
document.getElementById('contatoForm').addEventListener('reset', function() {
    document.getElementById('resultado').innerHTML = '';
});
