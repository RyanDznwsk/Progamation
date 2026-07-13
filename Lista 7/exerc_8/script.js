function apresentar() {
  let codigo = parseInt(prompt("Informe o código do produto: (1 / 2 / 3)"));
  let cusro;
  switch (codigo) {
    case 1:
      curso = "Informática";
      break
    case 2:
      curso = "Administração";
      break
    case 3:
      curso = "Redes de Computadores";
      break
    default:
      alert("Código inválido.");
  }
  alert(`${curso}.`);
}