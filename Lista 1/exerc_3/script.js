function calcular() {
    let precoQuilo = parseFloat(prompt("Quanto custa o quilo do que você consumiu?"));
    let quilo = parseFloat(prompt("Quantos quilos você consumiu?"));
    let preco = precoQuilo * quilo;
    alert(`O valor que você deve pagar é de R$:${preco.toFixed(2)}`)
}