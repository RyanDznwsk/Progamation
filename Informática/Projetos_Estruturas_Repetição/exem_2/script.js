function apresentar() {
  let numero = parseInt(prompt("Digite um número:"));
  let contador = 1;
  let soma = 0;
  do {
    soma += contador;
    contador++;
  }
  while (contador <= numero)
  alert(`Soma = ${soma}`)
}