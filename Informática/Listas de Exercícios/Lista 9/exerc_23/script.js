function apresentar() {
  let nome = prompt("Digite seu nome:");
  let horasTrabalhadas;
  let horasExtras;
  let salarioBase;
  let salarioExtra;
  do {
    horasTrabalhadas = parseFloat(prompt("Digite a quantidade de horas trabalhadas:"));
    if (horasTrabalhadas <= 0 || horasTrabalhadas > 400 || isNaN(horasTrabalhadas)) {
      alert("Resposta inválida. O número de horas deverá ser positivo e inferior a 400 horas");
    }
  } while (horasTrabalhadas <= 0 || horasTrabalhadas > 400 || isNaN(horasTrabalhadas));
  if (horasTrabalhadas > 160) {
    horasExtras = horasTrabalhadas - 160;
    salarioBase = 160 * 10;
    salarioExtra = horasExtras * 15;
  } else {
    horasExtras = 0;
    salarioBase = horasTrabalhadas * 10;
    salarioExtra = horasExtras * 15;
  }
  let salarioFinal = salarioBase + salarioExtra;
  alert(`Olá, ${nome}! \nForam trabalhadas ${horasExtras} horas extras. \nO salário final foi de R$:${salarioFinal.toFixed(2)}.`);
}