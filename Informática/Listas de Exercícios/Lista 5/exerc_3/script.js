function apresentar() {
  let num1 = parseFloat(prompt("Informe um número:"));
  let operacao = prompt("Informe uma operação (+; -; *; /):");
  let num2 = parseFloat(prompt("Informe outro número:"));
  let conta;
  if (operacao === "+") {
    conta = num1 + num2;
  } else if (operacao === "-") {
    conta = num1 - num2;
  } else if (operacao === "*") {
    conta = num1 * num2;
  } else if (operacao == "/") {
    conta = num1 / num2;
  } else {
    alert("Por favor informe uma operação válida.")
  }
  alert(`O resultado da sua conta é ${conta}.`)
}