function apresentar() {
  let sigla = prompt("Informe a sigla da região de entrega: (S / N / SE / CO / NE)").toUpperCase();
  let regiao;
  let valor;
  switch (sigla) {
    case "S":
      regiao = "Sul"
      valor = 20;
      break
    case "N":
      regiao = "Norte";
      valor = 45;
      break
    case "SE":
      regiao = "Sudeste";
      valor = 25;
      break
    case "CO":
      regiao = "Centro-Oeste";
      valor = 35;
      break
    case "NE":
      regiao = "Nordeste";
      valor = 40;
      break
    default:
      alert("Região de entrega inválida.");
  }
  alert(`${regiao} R$:${valor.toFixed(2)}.`);
}