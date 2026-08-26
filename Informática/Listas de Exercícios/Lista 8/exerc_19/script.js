function apresentar() {
  let codigo = prompt("Informe o código da moeda: (D / E / L / P)").toUpperCase();
  let reais = parseFloat(prompt("Informe o valor em reais:"));
  let moeda;
  let cotacao;
  switch (codigo) {
    case "D":
      moeda = "Dólar";
      cotacao = 5.60;
      break
    case "E":
      moeda = "Euro";
      cotacao = 6.45;
      break
    case "L":
      moeda = "Libra";
      cotacao = 7.55;
      break
    case "P":
      setor = "Peso Argentino";
      cotacao = 0.005;
      break
    default:
      alert("Código de moeda inválido");
  }
  let valorConvertido = reais / cotacao;
  alert(`${moeda}. \nCotação de R$:${cotacao}. \nR$:${valorConvertido.toFixed(2)} convertido.`);
}