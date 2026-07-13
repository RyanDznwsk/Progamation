function apresentar() {
  let opcao = parseInt(prompt("Escolha a opção de operação: \n1 - Consultar Saldo \n2 - Realizar Saque \n3 - Realizar Depósito"));
  let saldo = 1000;
  switch (opcao) {
    case 1:
      alert(`O saldo atual é de R$:${saldo.toFixed(2)}.`);
      break
    case 2:
      let saque = parseFloat(prompt("Informe o valor do saque:"));
      switch (saque <= saldo) {
        case true:
          saldo = saldo - saque;
          alert(`O novo saldo é de R$:${saldo.toFixed(2)}.`);
          break
        default:
          alert("Saldo insuficiente para realizar o saque.");
      }
    case 3:
      let deposito = parseFloat(prompt("Informe o valor do depósito:"));
      saldo = saldo + deposito;
      alert(`O novo saldo é de R$:${saldo.toFixed(2)}`);
  }
}