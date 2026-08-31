function apresentar() {
    let custoTotal = 0;
    let servidores = 0;
    let servidoresFaixa3 = 0;
    let ultimoCusto;
    let continuar;
    do {
        let nome;
        let consumo;
        // Controle de Entrada - Questão 1
        do {
            nome = prompt("Digite o nome do administrador:");
            consumo = parseFloat(prompt("Digite quantos m³ de água o servidor consumiu:"));
            if (consumo < 0 || consumo >= 200 || isNaN(consumo)) {
                alert("Consumo Inválido!");
            }
        } while (consumo < 0 || consumo >= 200 || isNaN(consumo));
        servidores++;
        // If e Else, Somadores, e Contadores - Questões 2 e 3
        let faixa;
        let custo;
        if (consumo <= 20) {
            faixa = "Faixa 1";
            custo = consumo * 5;
        } else if (consumo <= 50) {
            faixa = "Faixa 2";
            custo = ((consumo - 20) * 9) + 100;
        } else {
            faixa = "Faixa 3";
            custo = ((consumo - 50) * 15) + 370;
        }
        alert(`Administradorr ${nome}. \n${faixa}. \nConsumo de ${consumo}m³ de água. \nCusto de R$:${custo.toFixed(2)}.`);
        if (faixa == "Faixa 3") {
            servidoresFaixa3++;
        }
        custoTotal += custo;
        ultimoCusto = custo;
        // Controle de Encerramento - Questão 4
        do {
            continuar = prompt("Deseja continuar? Digite s ou n").toLowerCase();
            if (continuar != "s" && continuar != "n") {
                alert("Resposta inválida!");
            }
        } while (continuar != "s" && continuar != "n");
    } while (continuar == "s");
    // Apresentação dos Resultados - Questão 5
    let media = custoTotal / servidores;
    let percentualServidoresFaixa3 = (servidoresFaixa3 / servidores) * 100;
    alert(`O custo do último servidor processado é de R$:${ultimoCusto.toFixed(2)}. \nA média dos custo dos servidores é de R$:${media.toFixed(2)}. \nO percentual de servidores na faixa 3 é de ${percentualServidoresFaixa3.toFixed(2)}%.`);
}