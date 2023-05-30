  // Função para exibir a tabela de aulas buscar da api e passar para a tela
function exibirTabelaInfoAulas() {
    var tabelaInfoAulas = document.getElementById("tabelaInfoAulas");
    var tabelaInfoPreparacoes = document.getElementById("tabelaInfoPreparacoes");

    tabelaInfoAulas.classList.remove("hidden");
    tabelaInfoPreparacoes.classList.add("hidden");
  }

  // Função para exibir a tabela de informações de preparações buscar da api e passar para a tela
  function exibirTabelaInfoPreparacoes() {
    var tabelaInfoAulas = document.getElementById("tabelaInfoAulas");
    var tabelaInfoPreparacoes = document.getElementById("tabelaInfoPreparacoes");

    tabelaInfoAulas.classList.add("hidden");
    tabelaInfoPreparacoes.classList.remove("hidden");
  }

 
 
  // Adicionar o evento de clique (click) no botão de busca
  var btnBuscar = document.getElementById("btnBuscar");
  btnBuscar.addEventListener("click", function(event) {
    event.preventDefault();

    var radioOption1 = document.getElementById("radioOption1");
    var radioOption2 = document.getElementById("radioOption2");

    if (radioOption1.checked) {
      exibirTabelaInfoAulas();
    } else if (radioOption2.checked) {
      exibirTabelaInfoPreparacoes();
    }
  });