function apresentar() {
  let caixa = parseFloat(prompt("Quanto dinheiro tem no caixa?"));
  let produtos = parseInt(prompt("Quantos produtos serão comprados?"));
  let precoProduto = parseFloat(prompt("Qual é o preço de cada produto?"));
  let valorTotal = produtos * precoProduto;
  let valorPrazo = valorTotal + (valorTotal * 0.1)
  let valorVista = valorTotal - (valorTotal * 0.05)
  let pagamento;
  if (valorTotal >= (caixa * 0.8)) {
    pagamento = "a prazo";
    alert(`Você pagará ${pagamento} em 3 vezes com 10% de juros R$:${valorPrazo.toFixed(2)}`)
  } else {
    pagamento = "a vista"
    alert(`Você pagará ${pagamento} com 5% de desconto R$:${valorVista.toFixed(2)} `)
  }
}