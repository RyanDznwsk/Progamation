function apresentar() {
    let milhasTotal = 0;
    let clientes = 0;
    let clientesBronze = 0;
    let ultimasMilhas;
    let continuar;
    do {
        let nome;
        let gasto;
        // Controle de Entrada - Questão 1
        do {
            nome = prompt("Digite o nome do cliente:");
            gasto = parseFloat(prompt("Digite o valor gasto no cartão:"));
            if (gasto <= 0 || gasto >= 40000 || isNaN(gasto)) {
                alert("Valor de gastos incorreto!");
            }
        } while (gasto <= 0 || gasto >= 40000 || isNaN(gasto));
        clientes++;
        // If e Else, Somadores, e Contadores - Questões 2 e 3
        let faixa;
        let milhas;
        if (gasto <= 3000) {
            faixa = "Faixa Bronze";
            milhas = gasto * 1.5;
        } else if (gasto <= 8000) {
            faixa = "Faixa Prata";
            milhas = (gasto * 2.2) + 500;
        } else {
            faixa = "Faixa Ouro";
            milhas = (gasto * 3.5) + 2000;
        }
        alert(`Cliente ${nome}. \n${faixa}. \nGasto de R$:${gasto.toFixed(2)}\nSaldo de milhas de ${milhas} milhas.`);
        if (faixa == "Faixa Bronze") {
            clientesBronze++;
        }
        milhasTotal += milhas;
        ultimasMilhas = milhas;
        // Controle de Encerramento - Questão 4
        do {
            continuar = prompt("Deseja continuar? Digite s ou n").toLowerCase();
            if (continuar != "s" && continuar != "n") {
                alert("Resposta inválida!");
            }
        } while (continuar != "s" && continuar != "n");
    } while (continuar == "s");
    // Apresentação dos Resultados - Questão 5
    let media = milhasTotal / clientes;
    let percentualClientesBronze = (clientesBronze / clientes) * 100;
    alert(`O saldo de milhas do último cliente processado é de ${ultimasMilhas.toFixed(2)} milhas. \nA média de milhas dos clientes é de ${media.toFixed(2)} milhas. \nO percentual de clientes na faixa bronze é de ${percentualClientesBronze.toFixed(2)}%.`);
}