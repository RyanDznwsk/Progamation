function apresentar() {
  let tipo = prompt("Informe o código de tipo de cliente: (A / B / C)").toUpperCase();
  let valor = parseFloat(prompt("Qual o valor da compra?"));
  let categoria;
  let desconto;
  let valoFinal;
  switch (tipo) {
    case "A":
      categoria = "Cliente Premium";
      desconto = valor * 0.05;
      valorFinal = valor - desconto;
      break
    case "B":
      categoria = "Cliente Ouro";
      desconto = valor * 0.1;
      valorFinal = valor - desconto;
      break
    case "C":
      categoria = "Cliente Diamante";
      desconto = valor * 0.15;
      valorFinal = valor - desconto;
      break
    default:
      alert("Tipo de cliente inválido.")
  }
  alert(`${categoria}. \nO desconto é de R$:${desconto.toFixed(2)}. \nO valor final é de R$:${valorFinal.toFixed(2)}.`);
}