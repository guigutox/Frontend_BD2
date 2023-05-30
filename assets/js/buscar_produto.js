document.getElementById("tipoProduto").addEventListener("change", function() {
    var tipoProduto = this.value;

    if (tipoProduto === "quimico") {
        document.getElementById("quimicoFields").style.display = "block";
        document.getElementById("equipamentoFields").style.display = "none";
    } else if (tipoProduto === "equipamento") {
        document.getElementById("quimicoFields").style.display = "none";
        document.getElementById("equipamentoFields").style.display = "block";
    }
});

    //CAMPOS GERAIS
    var tipoProduto = document.getElementById("tipoProduto").value;
    var nome = document.getElementById("nome").value;
    var descricao = document.getElementById("descricao").value;
    var fabricante = document.getElementById("fabricante").value;
    var preco = parseFloat(document.getElementById("preco").value);
    var dataFabricacao = document.getElementById("dataFabricacao").value;
    var prateleira = document.getElementById("prateleira").value;

    //CAMPOS ESPECIFICOS DE QUIMICO
    var formulaQuimica = document.getElementById("formulaQuimica").value;
    var concentracao = parseFloat(document.getElementById("concentracao").value);
    var classeRisco = document.getElementById("classeRisco").value;
    var volume = parseFloat(document.getElementById("volume").value);
    var dataValidade = document.getElementById("dataValidade").value;
    var quantidadeQuimico = parseFloat(document.getElementById("quantidadeQuimico").value);

    //CAMPOS ESPECIFICOS DE EQUIPAMENTO
    var tipoEquipamento = document.getElementById("tipoEquipamento").value;
    var capacidade = parseFloat(document.getElementById("capacidade").value);
    var condicoesOperacao = document.getElementById("condicoesOperacao").value;
    var calibracao = document.getElementById("calibracao").value;


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