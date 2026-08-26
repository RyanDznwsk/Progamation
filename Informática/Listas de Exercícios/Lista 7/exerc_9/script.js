function apresentar() {
  let codigo = prompt("Informe o código do meio de transporte: (C / M / B)").toUpperCase();
  let transporte;
  switch (codigo) {
    case "C":
      transporte = "Carro";
      break
    case "M":
      transporte = "Moto";
      break
    case "B":
      transporte = "Bicicleta";
      break
    default:
      alert("Código inválido.");
  }
  alert(`${transporte}.`);
}