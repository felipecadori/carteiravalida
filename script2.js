function validarCarteira() {
    var numeroCarteira = document.getElementById("numeroCarteira").value;
  
    // Aqui você pode adicionar a lógica de validação do número da carteira
  
    // Exemplo de verificação simples
    if (numeroCarteira === "") {
      var mensagem = "Aluno: Felipe Pedrotti Cadori<br>Curso: Animação Digital<br>Validade: 31/12/2025.";
      document.getElementById("mensagemValidacao").innerHTML = mensagem;
    } else {
      document.getElementById("mensagemValidacao").textContent = "Número de carteira inválido.";
    }
  }
  