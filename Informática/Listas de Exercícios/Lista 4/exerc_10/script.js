function apresentar() {
  let salario = parseFloat(prompt("Qual é o seu salário?"));
  let reajuste;
  if (salario < 1500 && salario > 0) {
    reajuste = 0.15;
    let salarioAjustado = salario + (salario * reajuste)
    alert(`O seu salário vai ser de R$:${salarioAjustado.toFixed(2)}.`)
  } else if (salario >= 3000 && salario > 0) {
    reajuste = 0.1;
    let salarioAjustado = salario + (salario * reajuste)
    alert(`O seu salário vai ser de R$:${salarioAjustado.toFixed(2)}.`)
  } else if (salario > 3000) {
    reajuste = 0.05;
    let salarioAjustado = salario + (salario * reajuste)
    alert(`O seu salário vai ser de R$:${salarioAjustado.toFixed(2)}.`)
  } else [
    alert("Se você não ganha dinheiro, você não vai ter o salário reajustado.")
  ]
}