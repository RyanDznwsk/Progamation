function apresentar() {
  let totalSalarios = 0;
  let funcionarios = 0;
  let acima5K = 0;
  let continuar;
  do {
    let nome = prompt("Digite o nome do funcionário:")
    let horasTrabalhadas;
    do {
      horasTrabalhadas = parseFloat(prompt("Digite a quantidade de horas trabalhadas:"));
      if (horasTrabalhadas <= 0 || horasTrabalhadas > 400 || isNaN(horasTrabalhadas)) {
      alert("Resposta inválida. O número de horas deverá ser positivo e inferior a 400 horas");
      }
    } while (horasTrabalhadas <= 0 || horasTrabalhadas > 400 || isNaN(horasTrabalhadas));
    funcionarios++;
    let horasExtras = 0;
    let salarioBase = 0;
    let salarioExtra = 0;
    if (horasTrabalhadas > 160) {
      horasExtras = horasTrabalhadas - 160;
      salarioBase = 160 * 20;
      salarioExtra = horasExtras * 25;
    } else {
      horasExtras = 0;
      salarioBase = horasTrabalhadas * 20;
      salarioExtra = horasExtras * 25;
    }
    let salarioFinal = salarioBase + salarioExtra;
    alert(`Olá, ${nome}! \nForam trabalhadas ${horasExtras} horas extras. \nO salário final foi de R$:${salarioFinal.toFixed(2)}.`);
    totalSalarios += salarioFinal;
    if (salarioFinal > 5000) {
      acima5K++;
    }
    continuar = confirm("Deseja informar outro funcionário?");
  } while (continuar == true);
  let media = totalSalarios / funcionarios;
  let percentualAcima5K = (acima5K / funcionarios) * 100;
  alert(`A média dos salários finais é de R$:${media.toFixed(2)}. \nO percentual de salárioa acima de R$:5000 é de ${percentualAcima5K.toFixed(2)}%.`);
}