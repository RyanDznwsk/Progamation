function troco() {
    let preco = prompt("Quanto custa o seu produto")
    let dinheiro = prompt("Quanto você da para pagar?");
    let troco = dinheiro - preco
    if (dinheiro >= preco) {
        alert(`Parabéns! Você comprou o produto por R$:${preco}! Deu R$:${dinheiro} e vai receber R$:${troco} de troco. Volte sempre!`);
    }
    else {
        alert(`Desculpe, você não tem dinheiro suficiente para comprar o produto.`);
    }
}