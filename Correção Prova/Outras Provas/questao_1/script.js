function calcular() {
    let volumeInicial = Number(prompt("Quantos litros de água há no reservatório?"));
    let litros = ParseInt(prompt("Quantos litros são adicionados por hora?"));
    let tempo = ParseInt(prompt("Durante quantas horas o reservatório será abastecido?"));
    let volumeFinal = (litros * tempo) + volumeInicial;
    alert(`O volume final de água no reservatório será de ${volumeFinal}l.`);
}