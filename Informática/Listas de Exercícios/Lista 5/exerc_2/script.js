function apresentar() {
  let nota1 = parseFloat(prompt("Qual foi a sua primeira nota?"));
  let nota2 = parseFloat(prompt("Qual foi a sua segunda nota?"));
  let media = (nota1 + nota2) / 2;
  let situacao;
  if (media >= 7) {
    situacao = "aprovado";
  } else {
    situacao = "reprovado";
  }
  alert(`Você foi ${situacao}!`)
}