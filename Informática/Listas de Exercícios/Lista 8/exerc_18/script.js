function apresentar() {
  let codigo = prompt("Informe o código: (A / B / C / D)").toUpperCase();
  let ingressos = parseInt(prompt("Informe a quantidade de ingressos:"));
  let setor;
  let valor;
  switch (codigo) {
    case "A":
      setor = "Plateia";
      valor = 90;
      break
    case "B":
      setor = "Camarote";
      valor = 150;
      break
    case "C":
      setor = "VIP";
      valor = 250;
      break
    case "D":
      setor = "Premium";
      valor = 400;
      break
    default:
      alert("Código inválido");
  }
  let valorTotal = ingressos * valor;
  alert(`Setor ${setor}. \nR$:${valor}. \nValor total de R$:${valorTotal.toFixed(2)}.`);
}