function apresentar() {
  let opcao = parseInt(prompt("Escolha uma opção: \n1 - Quilômetros (km) → Metros (m) \n2 - Metros (m) → Quilômetros (km)"));
  let distancia;
  let conversao;
  let msg;
  switch (opcao) {
    case 1:
      distancia = parseFloat(prompt("Informe a distância em quilômetros:"));
      conversao = distancia * 1000;
      msg = `${distancia}km são ${conversao}m.`;
      break
    case 2:
      distancia = prompt("Informe a distância em metros:");
      conversao = distancia / 1000;
      msg = `${distancia}m são ${conversao}km.`;
      break
    default:
      msg = "Código de conversão inválido.";
  }
  alert(`${msg}`);
}