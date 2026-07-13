function apresentar() {
  let categoria = prompt("Informe a categoria da unidade consumidora: (R / C / I)").toUpperCase();
  let consumo = parseFloat(prompt("Quantos kWh são consumidos?"));
  let descricao;
  let conta;
  switch (categoria) {
    case "R":
      descricao = "Unidade Residencial";
      conta = consumo * 0.75;
      break
    case "C":
      descricao = "Unidade Comercial";
      conta = consumo * 0.92;
      break
    case "I":
      descricao = "Unidade Industrial";
      conta = consumo * 0.68;
    default:
      alert("Categoria de consumidor inválida");
  }
  alert(`${descricao}: R$:${conta.toFixed(2)}.`);
}