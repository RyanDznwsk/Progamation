function apresentar() {
  let consumo = parseFloat(prompt("Quantos m³ de água são consumidos mensalmente?"));
  let cobranca;
  if (consumo <= 10) {
    cobranca = 30;
  } else if (consumo <= 25) {
    cobranca = 50;
  } else {
    cobranca = 80;
  }
  alert(`O valor da cobrança será de R$:${cobranca.toFixed(2)}.`)
}