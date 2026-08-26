function apresentar() {
  let saldo = parseFloat(prompt("Informe sue saldo:"));
  let credito;
  if (saldo <= 500) {
    credito = 0;
  } else if (saldo <= 1000) {
    credito = saldo * 0.3;
  } else {
    credito = saldo * 0.5;
  }
  alert(`Você vai ganhar ${credito} de crédito.`)
}