function apresentar() {
  let tarefas = parseInt(prompt("Quantas tarefas foram concluídas?"));
  let bugs = parseInt(prompt("Quantos bugs foram encontrados?"));
  let nota = parseFloat(prompt("Qual foi a nota da avaliação técnica?"));
  let desempenho;
  indice = (tarefas * 2) + (nota * 10) - (bugs * 5);
  if (indice < 50) {
    desempenho = "Desempenho insatisfatório.";
  } else if (indice < 100) {
    desempenho = "Desempenho bom.";
  } else {
    desempenho = "Desempenho excelente.";
  }
  alert(`${desempenho}`);
}