function apresentar() {
  let ipi;
  let valorPeca1;
  let valorPeca2;
  let quantidadePeca1;
  let quantidadePeca2;
  do {
    ipi = parseFloat(prompt("Digite o percentual do IPI a ser acrescido no valor das peças:"));
    valorPeca1 = parseFloat(prompt("Digite o valor da peça 1:"));
    valorPeca2 = parseFloat(prompt("Digite o valor da peça 2:"));
    quantidadePeca1 = parseInt(prompt("Digite a quantidade de peças 1:"));
    quantidadePeca2 = parseInt(prompt("Digite a quantidade de peças 2:"));
    if (ipi <= 0 || ipi > 100 || valorPeca1 <= 1 || valorPeca1 >= 50 || valorPeca2 <= 1 || valorPeca2 >= 50 || quantidadePeca1 <= 1 || quantidadePeca1 >= 500 || quantidadePeca2 <= 1 || quantidadePeca2 >= 500 || isNaN(ipi) || isNaN(valorPeca1) || isNaN(valorPeca2) || isNaN(quantidadePeca1) || isNaN(quantidadePeca2)) {
      alert("Resposta inválida. \nIPI deverá ser positivo e menor que 100. \nValores devem estar entre 1 e 50 reais \nQuantidades devem estar entre 1 e 500.");
    }
  } while (ipi <= 0 || ipi > 100 || valorPeca1 <= 1 || valorPeca1 >= 50 || valorPeca2 <= 1 || valorPeca2 >= 50 || quantidadePeca1 <= 1 || quantidadePeca1 >= 500 || quantidadePeca2 <= 1 || quantidadePeca2 >= 500 || isNaN(ipi) || isNaN(valorPeca1) || isNaN(valorPeca2) || isNaN(quantidadePeca1) || isNaN(quantidadePeca2));
  let codigo1 = prompt("Digite o código da peça 1:");
  let codigo2 = prompt("Digite o código da peça 2:");
  let valorTotal1 = valorPeca1 * quantidadePeca1;
  let valorTotal2 = valorPeca2 * quantidadePeca2;
  let valorFinal = valorTotal1 + valorTotal2;
  let imposto = (valorFinal * ipi) / 100;
  let valorTotalFinal = valorFinal + imposto;
  alert(`${quantidadePeca1} peças ${codigo1}. \n${quantidadePeca2} peças ${codigo2}. \nValor total final de R$:${valorTotalFinal.toFixed(2)}`);
}