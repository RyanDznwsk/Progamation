function apresentar() {
  let notaProva = parseFloat(prompt("Qual foi a nota da sua prova técnica?"));
  let notaEntrevista = parseFloat(prompt("Qual foi a nota da sua entrevista?"));
  let experiencia = parseInt(prompt("Quantos anos de experiência profissional você tem?"));
  let media = (notaProva + notaEntrevista) / 2;
  let situacao;
  if (notaProva >= 8 && notaEntrevista >= 8 && experiencia >= 2) {
    situacao = "contrado imediatamente";
  } else if (media >= 7 && experiencia >= 1) {
    situacao = "para o banco de talentos";
  } else {
    situacao = "reprovado";
  }
  alert(`Sua média foi de ${media.toFixed(2)}. \nVocê foi ${situacao}.`)
}