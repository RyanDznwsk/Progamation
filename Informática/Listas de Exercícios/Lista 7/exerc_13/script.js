function apresentar() {
  let codigo = parseInt(prompt("Informe o código de origem do produto: (1 / 2 / 3 / 4 / 5)"));
  let procedencia;
  switch (codigo) {
    case 1:
      procedencia = "A região de procedência do produto é Norte.";
      break
    case 2:
      procedencia = "A região de procedência do produto é Nordeste.";
      break
    case 3:
      procedencia = "A região de procedência do produto é Centro-Oeste.";
      break
    case 4:
      procedencia = "A região de procedência do produto é sudeste.";
      break
    case 5:
      procedencia = "A região de procedência do produto é Sul.";
      break
    default:
      alert("Código de origem inválido.");
  }
  alert(`${procedencia}`);
}