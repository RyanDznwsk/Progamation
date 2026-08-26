function calcular() {
    let alturaTijolo = Number(prompt("Qual é a altura dos tijolos?"));
    let larguraTijolo = Number(prompt("Qual é a largura dos tijolos?"));
    let alturaParede = Number(prompt("Qual é a altura da parede?"));
    let larguraParede = Number(prompt("Qual é a largura da parede?"));
    let areaTijolo = (alturaTijolo / 100) * (larguraTijolo / 100);
    let areaParede = (alturaParede * larguraParede) * 0.97;
    let quantidadeTijolos = parseFloat(areaParede / areaTijolo);
    alert(`A quantidade de tijolos necessários para construir a parede é: ${quantidadeTijolos.toFixed(0)}`);
}