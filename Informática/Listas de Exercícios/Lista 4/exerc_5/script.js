function apresentar() {
  let a = parseFloat(prompt("Digite o valor de A:"));
  let b = parseFloat(prompt("Digite o valor de B:"));
  let resultado;
  if (a > b) {
    resultado = "É maior";
  } else {
    resultado = "É menor";
  }
  alert(resultado);
}