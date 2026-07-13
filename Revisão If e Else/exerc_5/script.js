function apresentar() {
  let horas = parseFloat(prompt("Quantas horas são previstas para concluir o projeto?"));
  let valorHora = parseFloat(prompt("Qual é o valor da hora?"));
  let complexidade = parseInt(prompt("Qual é o percentual de complexidade do projeto? (10% / 20% / 30%)"));
  let custoBase = horas * valorHora;
  let acrescimo = custoBase * complexidade / 100;
  let valorFinal = custoBase + acrescimo;
  let tamanho;
  if (valorFinal <= 8000) {
    tamanho = "Projeto pequeno.";
  } else if (valorFinal <= 20000) {
    tamanho = "Projeto médio.";
  } else {
    tamanho = "Projeto grande.";
  }
  alert(`${tamanho}`);
}