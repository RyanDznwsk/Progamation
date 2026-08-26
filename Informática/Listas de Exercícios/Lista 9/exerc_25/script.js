function apresentar() {
  let inss;
  do {
    salario = parseFloat(prompt("Digite o seu salário:"));
    if (salario <= 0 || salario > 10000 || isNaN(salario)) {
      alert("Resposta inválida. O salário bruto deverá ser positivo e inferior a 10 mil reais.");
    }
  } while (salario <= 0 || salario > 10000 || isNaN(salario));
  if (salario <= 1500) {
    inss = 8;
  } else if (salario <= 3500) {
    inss = 10;
  } else {
    inss = 12;
  }
  let desconto = (salario * inss) / 100;
  let salarioFinal = salario - desconto;
  alert(`A alíquota de INSS foi de ${inss}%. \nO desconto foi de R$:${desconto.toFixed(2)}. \nO salário final é de R$:${salarioFinal.toFixed(2)}.`);
}