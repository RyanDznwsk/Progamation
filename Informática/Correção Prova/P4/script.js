function apresentar() {
    let bonusTotal = 0;
    let operadores = 0;
    let operadoresEficientes = 0;
    let continuar;
    do {
        let nome;
        let desperdicio;
        // Controle de Entrada - Questão 1
        do {
            nome = prompt("Digite o nome do operador:");
            desperdicio = parseFloat(prompt("Digite quantos quilos o operador desperdiçou no mês:"));
            if (desperdicio <= 0 || desperdicio > 60 || isNaN(desperdicio)) {
                alert("Quantidade Inválida!");
            }
        } while (desperdicio <= 0 || desperdicio > 60 || isNaN(desperdicio));
        operadores++;
        // If e Else, Somadores, e Contadores - Questões 2 e 3
        let faixa;
        let desconto;
        if (desperdicio <= 10) {
            faixa = "eficiente";
            desconto = desperdicio * 15;
        } else if (desperdicio <= 25) {
            faixa = "alerta";
            desconto = desperdicio * 25;
        } else {
            faixa = "crítica";
            desconto = (desperdicio * 40) + 200;
        }
        let bonusLiquido = 1200 - desconto;
        alert(`Operador ${nome}. \nFaixa ${faixa}. \nDesperdício de ${desperdicio}kg. \nDesconto de R$:${desconto.toFixed(2)}. \nBônus Líquido de R$:${bonusLiquido.toFixed(2)}.`);
        if (faixa == "eficiente") {
            operadoresEficientes++;
        }
        bonusTotal += bonusLiquido;
        // Controle de Encerramento - Questão 4
        do {
            continuar = prompt("Deseja continuar? Digite s ou n").toLowerCase();
            if (continuar != "s" && continuar != "n") {
                alert("Resposta inválida!");
            }
        } while (continuar != "s" && continuar != "n");
    } while (continuar == "s");
    // Apresentação dos Resultados - Questão 5
    let media = bonusTotal / operadores;
    let percentualOperadoresEficientes = (operadoresEficientes / operadores) * 100;
    alert(`A média dos bônus dos operadores é de R$:${media.toFixed(2)}. \nO percentual de operadores eficientes é de ${percentualOperadoresEficientes.toFixed(2)}%.`);
}