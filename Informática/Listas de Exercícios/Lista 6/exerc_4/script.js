function apresentar() {
  let codigo = prompt("Digite o código da bebida: (1 / 2 / 3)");
  let bebida;
  switch (codigo) {
    case 1:
      bebida = "Água";
      break;
    case 2:
      bebida = "Refrigerante";
      break
    case 3:
      bebida = "Suco";
      break;
    default:
      bebida = "Código de bebida inválido";
  }
  alert(`${bebida}`);
}