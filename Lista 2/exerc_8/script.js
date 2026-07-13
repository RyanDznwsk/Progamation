function calcular() {
    let preco = parseFloat(prompt("Qual era o preço do produto?"))
    let precoDesconto = parseFloat(prompt("Quanto você pagou no produto?"))
    let desconto = Math.round(100 - ((precoDesconto * 100)/preco))
    alert(`O desconto foi de ${desconto}%`)
}