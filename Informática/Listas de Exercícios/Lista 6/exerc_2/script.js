function apresentar() {
  let num1 = parseFloat(prompt("Digite o primeiro número:"));
  let num2 = parseFloat(prompt("Digite o segundo número:"));
  let operacao = prompt("Digite a operação (+, -, *, /):");
  let res;
  switch (operacao) {
    case "+":
      res = num1 + num2;
      break;
    case "-":
      res = num1 - num2;
      break;
    case "*":
    res = num1 * num2;
      break;
    case "/":
      res = num1 / num2;
      break;
    default:
      res = "Operação inválida!";
      break;
  }
  alert(`${res}`);
}