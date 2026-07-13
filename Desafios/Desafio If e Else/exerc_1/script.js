function apresentar() {
  let areaTotal = parseFloat(prompt("Quantos metros quadrados serão pintados?"));
  let randimentoTinta = parseFloat(prompt("Quantos metros quadrados a tinta rende?"));
  let litrosTinta = parseFloat(prompt("Quantos litros de tinta tem em cada lata?"));
  let precoTinta = parseFloat(prompt("Quanto custa a tinta?"));
  let horas = parseFloat(prompt("Quantas horas são estimadas para terminar o trabalho?"));
  let pintores = parseInt(prompt("Quantos pintores tem na euquipe?"));
  let precoHora = parseFloat(prompt("Qual o valor da hora?"));
  let orcamento = parseFloat(prompt("Quanto você tem para gastar?"));
  let litrosTotal = areaTotal / rendimentoTinta;
  let latas = Math.ceil(litrosTotal / litrosTinta);
  let custoTintaTotal = precoTinta * latas;
  let custoEquipe = (precoHora * pintores) * horas;
  let custoTotal = custoTintaTotal + custoEquipe;
  let saldoFinal;
  let parcelas;
  let valorParcela;
  let decisao;
  if (orcamento >= custoTotal) {
    saldoFinal = orcamento - (custoTotal * 0.95);
    decisao = `Você deve pagar à vista com 5% de desconto e seu saldo final será de R$:${saldoFinal.toFixed(2)}.`;
  } else if (orcamento < custoTotal) {
    if (custoTotal >= (orcamento * 0.5)) {
      parcelas = 4;
      valorParcela = custoTotal / parcelas;
      decisao = `Seu orçamento estourou e você pagará parcelado em ${parcelas} vezes e cada parcela seŕa de R$:${valorParcela.toFixed(2)}`
    } else if (custoTotal < (orcamento * 0.5) && custoTotal >= (orcamento * 0.3)) {
      parcelas = 3;
      valorParcela = custoTotal / parcelas;
      decisao = `Seu orçamento estourou e você pagará parcelado em ${parcelas} vezes e cada parcela seŕa de R$:${valorParcela.toFixed(2)}`
    } else {
      parcelas = 2;
      valorParcela = custoTotal / parcelas;
      decisao = `Seu orçamento estourou e você pagará parcelado em ${parcelas} vezes e cada parcela seŕa de R$:${valorParcela.toFixed(2)}`
    }
  }
  console.log(`Você vai precisar de ${latas}. \nO custo total do material é de R$:${custoTintaTotal.toFixed(2)}. \nO custo total da mão de obra é de R$:${custoEquipe.toFixed(2)}. \nO custo total de tudo é de R$:${custoTotal.toFixed(2)}. \n${decisao}.`)
}