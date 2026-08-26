function apresentar() {
  let salario;
  let financiamento;
  do {
    salario = parseFloat(prompt("Digite o seu salário:"));
    financiamento = parseFloat(prompt("Digite o valor do financiamento:"));
    if (salario <= 0 || salario > 20000 || financiamento <= 0 || financiamento >= (1000000) || isNaN(salario) || isNaN(financiamento)) {
      alert("Resposta inválida. O salário deverá ser positivo e inferior a 20 mil reais e o financiamento deverá ser positivo e inferior a 1 milhão de reais.");
    }
  } while (salario <= 0 || salario > 20000 || financiamento <= 0 || financiamento >= (1000000) || isNaN(salario) || isNaN(financiamento));
  if (financiamento <= (salario * 5)) {
    alert("Financiamento Concedido.");
  } else {
    alert("Financiamento Negado.");
  }
}