function apresentar() {
  let lado1 = parseFloat(prompt("Informe o primeiro lado do triângulo:"));
  let lado2 = parseFloat(prompt("Informe o segundo lado do triângulo:"));
  let lado3 = parseFloat(prompt("Informe o terceiro lado do triângulo:"));
  let triangulo;
  if ((lado1 + lado2) > lado3 && (lado1 + lado3) > lado2 && (lado2 + lado3) > lado1) {
    triangulo = "É um triângulo."
  } else {
    triangulo = "Não é um triângulo."
  }
  alert(`${triangulo}`)
}