function apresentar() {
  let nota1 = parseFloat(prompt("Qual foi a sua primeira nota?"));
  let nota2 = parseFloat(prompt("Qual foi a sua segunda nota?"));
  let media = (nota1 + nota2) / 2;
  let situacao;
  if (media < 5) {
    situacao = "reprovado";
  } else if (media < 7) {
    situacao = "em recuperação";
  } else {
    situacao = "aprovado";
  }
  alert(`Você ficou ${situacao} com media ${media}`)
}