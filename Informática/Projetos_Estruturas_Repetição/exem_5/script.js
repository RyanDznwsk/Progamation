function apresentar() {
  let alunos = parseInt(prompt("Digite a quantidade de alunos:"));
  let i = 1;
  let somaAlturas = 0;
  do {
    let altura = parseFloat(prompt(`Digite a altura do aluno ${i} em metros:`));
    somaAlturas += altura;
    i++;
  }
  while (i <= alunos);
  let media = somaAlturas / alunos;
  alert(`A soma das alturas dos alunos é de ${somaAlturas.toFixed(2)}m. \nA média da altura dos alunos é de ${media.toFixed(2)}m.`);
}