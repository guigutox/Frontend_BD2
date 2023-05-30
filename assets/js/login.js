document.addEventListener('DOMContentLoaded', function() {
    var loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Impede o envio do formulário

        // Obter os valores dos campos do formulário
        var login = document.getElementById('login').value;
        var senha = document.getElementById('senha').value;

        // Formatar os valores para envio à API
        var dadosFormatados = {
            login: login,
            senha: senha
        };

        console.log(dadosFormatados);
    });
});