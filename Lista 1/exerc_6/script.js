function calcular() {
    let dol = parseFloat(prompt("Quantos dólares você tem no seu cofre?"))
    let cotDol = parseFloat(prompt("Qual a cotação do dólar hoje?"))
    let reais = dol * cotDol
    alert("Você tem R$:" + reais.toFixed(2))
}