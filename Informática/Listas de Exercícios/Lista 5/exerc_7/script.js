function apresentar() {
  let idade = parseFloat(prompt("Informe sua idade:"));
  const idadeMaxima = 12;
  const entrada = 100;
  const meiaEntrada = 50;
  let opcao;
  if (idade > idadeMaxima) {
    opcao = `entrada cheia por R$:${entrada}.`;
  } else {
    opcao = `meia-entrada por R$:${meiaEntrada}.`;
  }
  alert(`Você vai pagar pela ${opcao}`)
}