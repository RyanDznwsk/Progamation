function apresentar() {
  let codigo = parseInt(prompt("Qual é o código da figura geométrica a ser calculada? (1 / 2 / 3)"));
  let area;
  switch (codigo) {
    case 1:
      let lado = parseFloat(prompt("Vocẽ escolheu quadrado, informe o lado:"));
      area = lado ** 2;
      break
    case 2:
      let base = parseFloat(prompt("Você escolheu retângulo, informe a base:"));
      let altura = parseFloat(prompt("Informe a altura:"));
      area = base * altura;
      break
    case 3:
      let raio = parseFloat(prompt("Você escolheu círculo, informe o raio:"));
      area = Math.PI * (raio ** 2);
      break
    default:
      alert("Código inválido.");
  }
  alert(`A área é de ${area.toFixed(2)}`);
}