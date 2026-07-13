function apresentar() {
  let gasolina = prompt("Você vai encher o tanque com gasolina ou etanol? Responda com G ou E.").toUpperCase();
  let tanque = parseFloat(prompt("Quantos litros tem o tanque do seu carro?"));
  const precoGasolina = 5.65;
  const precoEtanol = 4.38;
  let gasto;
  if (gasolina == "G") {
    gasto = tanque * precoGasolina;
    alert(`Você vai gastar R$:${gasto.toFixed(2)}.`);
  } else if (gasolina == "E") {
    gasto = tanque * precoEtanol;
    alert(`Você vai gastar R$:${gasto.toFixed(2)}.`)
  } else {
    alert('Valor inválido. Por favor digite "G" para gasolina ou "E" para etanol');
  }
}