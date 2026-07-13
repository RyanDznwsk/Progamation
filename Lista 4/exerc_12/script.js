document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formulario");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const dados = new FormData(form);
    let preco = parseFloat(dados.get("preco"));
    let codigo = parseInt(dados.get("codigo"));
    apresentar(preco, codigo);
  });
});
function apresentar(preco, codigo) {
  let procedencia;
  if (codigo === 1) {
    procedencia = "Sul";
  }
  else if (codigo === 2) {
    procedencia = "Sudeste";
  }
  else if (codigo === 3) {
    procedencia = "Centro-Oeste";
  }
  else if (codigo === 4) {
    procedencia = "Norte";
  }
  else {
    procedencia = "Nordeste";
  }
  let sol = document.getElementById("sol");
  sol.innerHTML = `<p>O preço do produto é de R$: ${preco.toFixed(2)}.<br>O produto vem do ${procedencia}.</p>`;
}