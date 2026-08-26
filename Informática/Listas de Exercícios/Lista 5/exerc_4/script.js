function apresentar() {
  let lado1 = parseFloat(prompt("Informe o primeiro lado do triângulo:"));
  let lado2 = parseFloat(prompt("Informe o segundo lado do triângulo:"));
  let lado3 = parseFloat(prompt("Informe o terceiro lado do triângulo:"));
  let triangulo;
  if (lado1 == lado2 && lado1 == lado3) {
    triangulo = "equilátero";
  } else if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3) {
    triangulo = "isóceles";
  } else {
    triangulo = "escaleno";
  }
  alert(`O seu triângulo é ${triangulo}.`)
}