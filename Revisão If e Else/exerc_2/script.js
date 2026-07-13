function apresentar() {
  let horas = parseFloat(prompt("Quantas horas foram utilizadas?"));
  let valorHora = parseFloat(prompt("Qual o valor da hora?"));
  let valorBruto = horas * valorHora;
  let desconto;
  if (horas <= 100) {
    desconto = 0;
  } else if (horas <= 250) {
    desconto = valorBruto * 0.08;
  } else {
    desconto = valorBruto * 0.15;
  }
  let valorFinal = valorBruto - desconto;
  alert(`O valor bruto é de R$:${valorBruto.toFixed(2)}. \nO valor do desconto foi de R$:${desconto.toFixed(2)}. \nO valor final é de R$:${valorFinal.toFixed(2)}.`);
}