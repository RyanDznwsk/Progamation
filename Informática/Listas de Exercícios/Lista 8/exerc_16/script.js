function apresentar() {
  let codigo = prompt("Informe o código do plano: (B / P / E)").toUpperCase();
  let meses = parseInt(prompt("Informe a quantidade de meses contratados:"));
  let plano;
  let mensalidade;
  switch (codigo) {
    case "B":
      plano = "Básico";
      mensalidade = 39.90;
      break
    case "P":
      plano = "Profissional";
      mensalidade = 69.90;
      break
    case "E":
      plano = "Empresarial";
      mensalidade = 119.90;
      break
    default:
      alert("Código de plano inválido");
  }
  let valorTotal = mensalidade * meses;
  alert(`Plano ${plano}. \nMensalidade de R$:${mensalidade}. \n${meses} meses. \nValor total de R$:${valorTotal.toFixed(2)}.`)
}