function apresentar() {
  let peso = parseFloat(prompt("Quantos kilos pesa a mercadoria?"));
  let preco;
  if (peso <= 5) {
    preco = 20;
  } else if (peso <= 20) {
    preco = 50;
  } else {
    preco = 100;
  }
  alert(`O frete vai custar R$:${preco.toFixed(2)}.`)
}