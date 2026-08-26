function apresentar() {
  let media = parseFloat(prompt("Qual foi a sua média final?"));
  let renda = parseFloat(prompt("Qual é a sua renda mensal?"));
  let bolsa;
  if (media >= 9 && renda <= 2000) {
    bolsa = 100;
  } else if (media >= 8 && renda <= 3500) {
    bolsa = 50;
  } else if (media >= 7 && renda <= 5000) {
    bolsa = 25;
  } else {
    bolsa = 0;
  }
  alert(`Você vai receber ${bolsa}% de bolsa.`)
}