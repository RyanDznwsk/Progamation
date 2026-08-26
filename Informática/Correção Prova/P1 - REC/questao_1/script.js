function calcular() {
    let areaTotal = parseFloat(prompt("Qual a área total irrigada?"));
    let aguaTotal = ParseFloat(prompt("Quantos litros de água foram utilizados?"));
    let areaSetor = ParseFloat(prompt("Qual a área de cada setor?"));
    let aguaMetro = aguaTotal / areaTotal;
    let aguaSetor = aguaMetro * areaSetor;
    let diferenca = Math.abs(aguaSetor - 500);
    alert(`O consumo de água por metro quadrado foi de ${aguaMetro.toFixed(2)} litros. \nA quantidade de água utilizada no setor foi de ${aguaSetor.toFixed(2)} litros. \nA diferença entre o consumo do setor e 500 litros é de ${diferenca.toFixed(2)}.`);
}