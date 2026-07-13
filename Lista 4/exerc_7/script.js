function audio() {
    let som = document.getElementById("som");
    som.currentTime = 0;
    som.play();
}
function calcular() {
  let relogioInicial = parseInt(prompt("Qual o valor inicial do relógio?"));
  let relogioFinal = parseInt(prompt("Qual o valor final do relógio?"));
  let valorKWH = parseFloat(prompt("Qual o valor do kWh?"));
  let kwh = relogioFinal - relogioInicial;
  let custo;
  let extra;
  if (kwh <= 150) {
    custo = kwh * valorKWH;
  } else {
    extra = kwh - 150;
    custo = 150 * valorKWH + extra * (valorKWH * 1.2);
  }
  alert(`O custo total é de R$:${custo.toFixed(2)}.`);
}