        var tipoUsuarioSelect = document.getElementById("tipo");
        var tecnicoFields = document.getElementById("tecnico-fields");
        var professorFields = document.getElementById("professor-fields");

        tipoUsuarioSelect.addEventListener("change", function () {
            if (this.value === "tecnico") {
                tecnicoFields.style.display = "block";
                professorFields.style.display = "none";
            } else if (this.value === "professor") {
                tecnicoFields.style.display = "none";
                professorFields.style.display = "block";
            } else {
                tecnicoFields.style.display = "none";
                professorFields.style.display = "none";
            }
        });

        document.getElementById("userForm").addEventListener("submit", function(event) {
            event.preventDefault(); // Impede o envio do formulário
        
            // Obtém os valores dos campos do formulário
            var cpf = document.getElementById("cpf").value;
            var email = document.getElementById("email").value;
            var nome = document.getElementById("nome").value;
            var telefone = document.getElementById("telefone").value;
            var tipo = document.getElementById("tipo").value;
        
            var usuario = {

            };
        
            if (tipo === "tecnico") {
                var certificado = document.getElementById("certificado").value;
                var crq = document.getElementById("crq").value;
                var cargaHoraria = document.getElementById("carga_horaria").value;
        
                usuario = {
                    cpf: cpf,
                    email: email,
                    nome: nome,
                    telefone: telefone,
                    certificado: certificado,
                    crq: crq,
                    cargaHoraria: cargaHoraria
                };
            } else if (tipo === "professor") {
                var cursosMinistrados = document.getElementById("curso_ministrados").value;
                var experienciaEnsino = document.getElementById("experiencia_ensino").value;
                var areaEspecializacao = document.getElementById("area_especializacao").value;
        
                usuario = {
                    cpf: cpf,
                    email: email,
                    nome: nome,
                    telefone: telefone,
                    cursosMinistrados: cursosMinistrados,
                    experienciaEnsino: experienciaEnsino,
                    areaEspecializacao: areaEspecializacao
                };
            }
        
            // Exibe o objeto JSON no console
            console.log(JSON.stringify(usuario));
        
            // Envie o objeto JSON para a API aqui

            //Mostrar mensagem de sucesso ou erro ao cadastrar
        });
        