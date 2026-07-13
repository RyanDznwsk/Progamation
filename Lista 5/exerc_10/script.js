function apresentar() {
  let salario = parseFloat(prompt("Qual é o seu salário?"))
  let imposto;
  if (salario <= 2500) {
    imposto = 0;
  } else if (salario <= 5000) {
    imposto = salario * 0.15;
  } else {
    imposto = salario * 0.27;
  }
  alert(`Você vai pagar R$:${imposto.toFixed(2)} de imposto.`)
}