function apresentar() {
  let vendas = parseInt(prompt("Digite a quantidade de vendas:"));
  let contador = 1;
  let total = 0;
  do {
    let valorVenda = parseFloat(prompt(`Digite o valor da venda ${contador}:`))
    total += valorVenda;
    contador++;
  }
  while (contador <= vendas);
  let media = total / vendas;
  alert(`O valor total foi de R$:${total.toFixed(2)}. \nA média do valor das vendas foi de R$:${media.toFixed(2)}.`)
}