function onclick() {
    let Vf = parseFloat(prompt("Quanto você pagou no seu almoço?"));
    let Pq = parseFloat(prompt("Digite o preço do quilo."));
    let Peso = Vf / Pq;
    alert("O peso de comida consumido foi: " + Peso.toFixed(2) + " kg");
}