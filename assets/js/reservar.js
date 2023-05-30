document.getElementById("formReserva").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Obter os valores dos campos
    var horarioReserva = document.getElementById("horarioReserva").value;
    var dataReserva = document.getElementById("dataReserva").value;
    var cpfProfessor = document.getElementById("cpfProfessor").value;

    // Criar objeto JSON com os dados
    var jsonData = {
        "horarioReserva": horarioReserva,
        "dataReserva": dataReserva,
        "cpfProfessor": cpfProfessor
    };

    console.log(JSON.stringify(jsonData));
    // Enviar o objeto JSON para a API usando uma requisição AJAX
    // Substitua a URL_API pelo endpoint correto da sua API
   
});
