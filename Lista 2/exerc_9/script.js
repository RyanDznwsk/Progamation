function calcular() {
    let preco = parseFloat(prompt("Quanto você pagou no produto?"));
    let desconto = ((preco * 5) / 100)
    if (isNaN(preco)) {
        alert("Por favor, insira um valor válido para o preço.");
        return;
    }
    else {
    alert(`O valor do desconto é R$:${desconto.toFixed(2)}`)
    }
}