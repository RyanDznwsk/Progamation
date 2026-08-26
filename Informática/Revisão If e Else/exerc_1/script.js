function apresentar() {
  let espacoContratado = parseFloat(prompt("Quantos Gbs foram contratados?"));
  let espacoUsado = parseFloat(prompt("Quantos Gbs estão sendo utilizados?"));
  let mensagem;
  if (espacoUsado <= (espacoContratado * 0.5)) {
    mensagem = "Uso normal.";
  } else if (espacoUsado <= (espacoContratado * 0.8)) {
    mensagem = "Atenção: armazenamento se aproximando do limite.";
  } else {
    mensagem = "Espaço crítico. Considere ampliar o plano.";
  }
  alert(`${mensagem}`)
}