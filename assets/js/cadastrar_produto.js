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

document.getElementById("cadastroForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Resgata os valores dos campos do formulário
    var tipoProduto = document.getElementById("tipoProduto").value;
    var nome = document.getElementById("nome").value;
    var descricao = document.getElementById("descricao").value;
    var fabricante = document.getElementById("fabricante").value;
    var preco = parseFloat(document.getElementById("preco").value);
    var dataFabricacao = document.getElementById("dataFabricacao").value;
    var prateleira = document.getElementById("prateleira").value;

    var produto = {
        tipoProduto: tipoProduto,
        nome: nome,
        descricao: descricao,
        fabricante: fabricante,
        preco: preco,
        dataFabricacao: dataFabricacao,
        prateleira: prateleira
    };

    if (tipoProduto === "quimico") {
        var formulaQuimica = document.getElementById("formulaQuimica").value;
        var concentracao = parseFloat(document.getElementById("concentracao").value);
        var classeRisco = document.getElementById("classeRisco").value;
        var volume = parseFloat(document.getElementById("volume").value);
        var dataValidade = document.getElementById("dataValidade").value;
        var quantidadeQuimico = parseFloat(document.getElementById("quantidadeQuimico").value);

        produto = {
            ...produto,
            formulaQuimica: formulaQuimica,
            concentracao: concentracao,
            classeRisco: classeRisco,
            volume: volume,
            dataValidade: dataValidade,
            quantidadeQuimico: quantidadeQuimico
        };
    } else if (tipoProduto === "equipamento") {
        var tipoEquipamento = document.getElementById("tipoEquipamento").value;
        var capacidade = parseFloat(document.getElementById("capacidade").value);
        var condicoesOperacao = document.getElementById("condicoesOperacao").value;
        var calibracao = document.getElementById("calibracao").value;

        produto = {
            ...produto,
            tipoEquipamento: tipoEquipamento,
            capacidade: capacidade,
            condicoesOperacao: condicoesOperacao,
            calibracao: calibracao
        };
    }

    // Envia o objeto produto para a API em formato JSON
    var produtoJSON = JSON.stringify(produto);
    console.log(produtoJSON);

    // Aqui você pode fazer a chamada para a API e enviar o produtoJSON
});
