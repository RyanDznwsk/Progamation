function apresentar() {
  let codigo = parseInt(prompt("Digite o código do produto: (100 / 200 / 300)"));
  let nome;
  let preco;
  switch (codigo) {
    case 100:
      nome = "Mouse";
      preco = 50;
      break
    case 200:
      nome = "Teclado";
      preco = 80;
      break
    case 300:
      nome = "Monitor";
      preco = 900;
      break
    default:
      alert("Código de produto inválido");
  }
  alert(`${nome} R$:${preco.toFixed(2)}.`);
}