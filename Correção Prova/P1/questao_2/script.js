function calcular() {
    let valorTotal = parseFloat(prompt("Qual o valor total da compra?"));
    let parcelas = prompt("Em quantas vezes você parcelou?");
    let juros = prompt("Qual foi a porcentagem de juros?");
    let valorParcelas = valorTotal / parcelas;
    let valorTotalParcelas = ((valorParcelas * juros) / 100 + valorParcelas);
    let ValorFinal = valorTotalParcelas * parcelas;
    let acrescimo = ValorFinal - valorTotal;
    alert(`O valor final da compra foi de R$:${valorFinal.toFixed(2)}. \nO valor de cada parcela foi de R$:${valorTotalParcelas.toFixed(2)}. \nO valor do acréscimo doi de R$:${acrescimo.toFixed(2)}.`);
}