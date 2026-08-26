function apresentar() {
  let salario;
  let reajuste;
  do {
    salario = parseFloat(prompt("Digite o seu salário:"));
    if (salario <= 0 || salario >= 50000 || isNaN(salario)) {
      alert("Salário inválido. O salário de entrada deverá ser positivo e menor ou igual a R$ 50 mil.")
    }
  } while (salario <= 0 || salario >= 50000 || isNaN(salario));
  if (salario <= 2000) {
    reajuste = 15;
  } else if (salario <= 4000) {
    reajuste = 10;
  } else {
    reajuste = 5;
  }
  let valorReajuste = (salario * reajuste) / 100;
  let salarioFinal = salario + valorReajuste;
  alert(`O reajuste foi de ${reajuste}%. \nO valor do reajuste foi de R$:${valorReajuste.toFixed(2)}. \nO salário final é de R$:${salarioFinal.toFixed(2)}.`)
}