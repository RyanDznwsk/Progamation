function apresentar() {
  let computadores = parseInt(prompt("Quantos computadores tem?"));
  let consumoMedio = parseFloat(prompt("Qual a média de Mbps que os computadores consomem?"));
  let consumoTotal = computadores * consumoMedio;
  let plano;
  if (consumoTotal <= 100) {
    plano = "Plano básico.";
  } else if (consumoTotal <= 300) {
    plano = "Plano empresarial.";
  } else {
    plano = "Plano corporativo.";
  }
  alert(`${plano}`);
}