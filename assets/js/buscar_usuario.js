//atributos de usuarios
var cpf = document.getElementById("cpf");
var email = document.getElementById("email");
var nome = document.getElementById("nome");
var telefone = document.getElementById("telefone");
cpf.disabled = true;
/////////
var tipoUsuarioSelect = document.getElementById("tipo"); //seletor tipo de usuario
var tecnicoFields = document.getElementById("tecnico-fields"); //bloco de campos de tecnico
var certificado = document.getElementById("certificado");//campo de tecnico
var crq = document.getElementById("crq");//campo de tecnico
var cargaHoraria = document.getElementById("carga_horaria"); //campo de tecnico
/////////
var professorFields = document.getElementById("professor-fields"); //bloco de campos de professor
var cursosMinistrados = document.getElementById("curso_ministrados"); //campo de professor
var experienciaEnsino = document.getElementById("experiencia_ensino"); //campo de professor
var areaEspecializacao = document.getElementById("area_especializacao");//campo de professor


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


//Função de busca:
document.getElementById("btnBuscar").addEventListener("click", function(){

    const cpfBusca = document.getElementById("inputCpf").value;
    console.log(cpfBusca);
    
    //Fazer busca na API e carregar os campos do formulario com os valores retornados

});

//Função de deletar
document.getElementById("btnDeletar").addEventListener("click", function(){
    event.preventDefault();
    console.log("Deletou");
    
    //Função que manda o delete para a API

});

//Função de alterar:
document.getElementById("btnAlterar").addEventListener("click", function(){
    event.preventDefault();
    console.log("Alterou");
   
    //Função que manda alteração para a API pegando infos que foram colocadas nos campos
});
