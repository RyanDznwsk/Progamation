function calcular() {
    let n1 = parseFloat(prompt("Digite sua primeira nota:"));
    let n2 = parseFloat(prompt("Digite sua segunda nota:"));
    let n3 = parseFloat(prompt("Digite sua terceira nota:"));
    let media = (n1 * 2 + n2 * 3 + n3 * 5) / 10;
    alert("Sua média final é: " + media.toFixed(1));
}