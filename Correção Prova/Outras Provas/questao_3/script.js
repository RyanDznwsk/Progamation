function calcular() {
    let entregas = parseInt(prompt("Quantas entregas você realizou?"));
    let tempoEntrega = parseFloat(prompt("Qual foi a média de minutos por entrega?"));
    let Consumo = parseFloat(prompt("Quantos litros você gasta de combustível por entrega?"));
    let preco = parseFloat(prompt("Qual é o preço do combustível?"));
    let horasEntrega = Math.ceil(tempoEntrega / 60);
    let tempoTotal = Math.ceil(horasEntrega * entregas);
    let consumoTotal = Consumo * entregas;
    let custoTotal = consumoTotal * preco;
    let custoMedio = custoTotal / entregas;
    alert(`O tempo total foi de ${tempoTotal}. \nO consumo total foi de ${consumoTotal}l. \nO custo total foi de R$:${custoTotal.toFixed(2)}. \nO custo medio por entrega foi de R$:${custoMedio.toFixed(2)}.`);
}