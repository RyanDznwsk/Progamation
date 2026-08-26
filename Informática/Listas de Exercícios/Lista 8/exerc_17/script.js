function apresentar() {
  let codigo = prompt("Informe o código da categoria: (R / C / I)").toUpperCase();
  let consumo = parseFloat(prompt("Informe o consumo de kWh:"));
  let categoria;
  let tarifa;
  switch (codigo) {
    case "R":
      categoria = "Residencial";
      tarifa = 0.82;
      break
    case "C":
      categoria = "Comercial";
      tarifa = 0.95;
      break
    case "I":
      categoria = "Industrial";
      tarifa = 0.73;
      break
    default:
      alert("Código de categoria inválido");
  }
  let conta = consumo * tarifa;
  alert(`Categoria ${categoria}. \nTarifa de R$:${tarifa}. \nConta de R$:${conta.toFixed(2)}.`);
}