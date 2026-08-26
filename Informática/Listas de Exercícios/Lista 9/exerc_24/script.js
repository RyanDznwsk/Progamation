function apresentar() {
  let operacao;
  let num1 = parseInt(prompt("Digite o primeiro número:"));
  let num2 = parseInt(prompt("Digite o segundo número:"));
  let conta;
  do {
    operacao = prompt("Agora, digite a operação a ser feita: (+ | - | * | /)");
    if (operacao !== "+" && operacao !== "-" && operacao !== "*" && operacao !== "/" || operacao === null) {
      alert("Operação inválida. A operação matemática só poderá ser apenas +, -, *, /.");
    }
  } while (operacao !== "+" && operacao !== "-" && operacao !== "*" && operacao !== "/" || operacao === null);
  if (operacao == "+") {
    conta = num1 + num2;
  } else if (operacao == "-") {
    if (num1 >= num2) {
      conta = num1 - num2;
    } else {
      conta = num2 - num1;
    }
  } else if (operacao == "*") {
    conta = num1 * num2;
  } else {
    if (num1 >= num2) {
      conta = num1 / num2;
    } else {
      conta = num2 / num1;
    }
  }
  alert(`o resultado é ${conta}`);
}