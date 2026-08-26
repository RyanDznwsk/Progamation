function calcular() {
    alert("Seja bem vindo ao Resataurante Bem-Bão! Vamos calcular o preço do seu prato")
    let peso = parseFloat(prompt("Quantos quilos pesa o seu prato"))
    let preco = parseFloat(28 * peso)
    alert(`O preço total do seu prato é de R$:${preco.toFixed(2)}`)
}