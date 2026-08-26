function apresentar() {
  let peso;
  let excesso;
  let multa;
  do {
    peso = parseFloat(prompt("Digite o peso do peixe:"));
    if (peso <= 0 || peso >= 150) {
      alert("O peso deverá ser positivo e inferior a 150 quilos.");
    }
  }
  while (peso <= 0 || peso >= 150);
  if (peso > 50) {
    excesso = peso - 50;
    multa = excesso * 8;
  } else {
    excesso = 0;
    multa = 0
  }
  alert(`O excesso de peso foi de ${excesso.toFixed(2)}kg. \nA multa foi de R${multa.toFixed(2)}.`);
}