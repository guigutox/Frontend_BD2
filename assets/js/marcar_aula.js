document.getElementById('formAula').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário

    // Captura os valores dos campos do formulário
    var cpf = document.getElementById('cpf').value;
    var topico = document.getElementById('topico').value;
    var nome = document.getElementById('nome').value;
    var temas = document.getElementById('temas').value;

    // Cria o objeto com os valores capturados
    var aula = {
        cpfProfessor: cpf,
        topicoPrincipal: topico,
        nomeAula: nome,
        temasAbordados: temas
    };

    // Converte o objeto em JSON
    var jsonAula = JSON.stringify(aula);

    // Aqui você pode prosseguir com o envio dos dados para a API

    // Exemplo de exibição do JSON no console
    console.log(jsonAula);
});
