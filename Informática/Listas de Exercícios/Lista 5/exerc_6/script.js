function apresentar() {
  let media = 6;
  let frequencia = 75;
  let nota = parseFloat(prompt("Informe sua nota:"));
  let presencas = parseInt(prompt("Quantos dias você foi para a aula?"));
  let situacao;
  if (nota < media && presencas < frequencia) {
    situacao = "Reprovado.";
  } else if (nota > media && presencas < frequencia) {
    situacao = "Reprovado por faltas.";
  } else if (nota < media && presencas > frequencia) {
    situacao = "Reprovado por nota."
  } else {
    situacao = "Aprovado!"
  }
  alert(`${situacao}`)
}