function apresentar() {
  let velocidade = parseInt(prompt("Qual a velocidade do carro?"));
  if (velocidade <= 80) {
    alert("Não foi multado");
  } else {
    alert("Foi multado");
  }
}