document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formulario");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const dados = new FormData(form);
    let quant = parseInt(dados.get("quant"));
    let codigo = parseInt(dados.get("codigo"));
    apresentar(quant, codigo);
  });
});
function apresentar(quant, codigo) {
  let descricao;
  let preco;
  let gasto;
  if (codigo === 1) {
    descricao = "Informática para Concursos";
    preco = 125.48;
    gasto = quant * preco;
  }
  else if (codigo === 2) {
    descricao = "Java como Programar";
    preco = 108.36;
    gasto = quant * preco;
  }
  else if (codigo === 3) {
    descricao = "Lógica de Programação";
    preco = 99.99;
    gasto = quant * preco;
  }
  else {
    descricao = "Fundamentos de Programação";
    preco = 215.67;
    gasto = quant * preco;
  }
  let sol = document.getElementById("sol");
  sol.innerHTML = `<p>É um produto de ${descricao}.<br>O preço é de R$:${gasto.toFixed(2)}.</p>`;
}