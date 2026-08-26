function apresentar() {
  let alunos = parseInt(prompt("Digite a quantidade de alunos:"));
  let contador = 1;
  let soma = 0;
  do {
    let nota = parseFloat(prompt(`Digite a nota do aluno ${contador}:`))
    soma += nota;
    contador++;
  }
  while (contador <= alunos)
  alert(`Soma = ${soma}`)
}