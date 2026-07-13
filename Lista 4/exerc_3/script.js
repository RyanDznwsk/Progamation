function apresentar() {
  let velocidade = parseInt(prompt("Qual a velocidade do carro?"));
  const velocidadeMaxima = 80;
  if (velocidade <= velocidadeMaxima) {
    alert("Você está dentro do limite.");
  } else {
    alert("Você ultrapassou o limite de velocidade e foi multado!");
  }
}