document.getElementById("formExperimento").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o envio do formulário
  
    // Obtém os valores dos campos do formulário
    var objetivo = document.getElementById("objetivo").value;
    var nome = document.getElementById("nome").value;
    var numeroExperimento = document.getElementById("numeroExperimento").value;
    var pdfFile = document.getElementById("pdf").files[0];
    var discussao = document.getElementById("discussao").value;
    var imagemFile = document.getElementById("imagem").files[0];
    var vezesRealizadas = document.getElementById("vezesRealizadas").value;
  
    // Cria um objeto JSON com os dados do formulário
    var jsonData = {
      objetivo: objetivo,
      nome: nome,
      numeroExperimento: numeroExperimento,
      discussao: discussao,
      vezesRealizadas: vezesRealizadas
    };
  
   
    // Converte a imagem para Base64
 /*   if (imagemFile) {
      var readerImagem = new FileReader();
      readerImagem.onloadend = function() {
        var base64Imagem = readerImagem.result;
        jsonData.imagemBase64 = base64Imagem;
  
        // Verifica se todos os campos estão preenchidos antes de enviar para a API
        if (validarCampos(jsonData)) {
          enviarDadosParaAPI(jsonData);
        }
      };
      readerImagem.readAsDataURL(imagemFile);
    }
  
    // Converte o arquivo PDF para Base64
    if (pdfFile) {
      var readerPDF = new FileReader();
      readerPDF.onloadend = function() {
        var base64PDF = readerPDF.result;
        jsonData.pdfBase64 = base64PDF;
  
        // Verifica se todos os campos estão preenchidos antes de enviar para a API
        if (validarCampos(jsonData)) {
          enviarDadosParaAPI(jsonData);
        }
      };
      readerPDF.readAsDataURL(pdfFile);
    }*/

    enviarDadosParaAPI(jsonData); //apenas para teste da função
  });
  
  //TESTE PARA VERIFICAÇÃO
  function validarCampos(jsonData) {
    // Verifica se todos os campos obrigatórios foram preenchidos
    if (jsonData.objetivo && jsonData.nome && jsonData.numeroExperimento && jsonData.discussao) {
      return true;
    } else {
      console.log("Por favor, preencha todos os campos obrigatórios.");
      return false;
    }
  }
  
  function enviarDadosParaAPI(jsonData) {

    console.log(jsonData);

  }
  