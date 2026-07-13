function media() {
    alert ("vamos calcular sua média!");
    let n1 = parseFloat (prompt("informe sua primeira nota."));
    let n2 = parseFloat (prompt("informe sua segunda nota."));
    let n3 = parseFloat (prompt("Informe sua terceira nota."));
    let media = (n1 + n2 + n3) / 3;
    alert (`Sua média final foi de ${media}.`);
}