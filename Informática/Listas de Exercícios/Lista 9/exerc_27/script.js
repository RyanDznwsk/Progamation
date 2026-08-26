function apresentar() {
  let a;
  let b;
  let c;
  let ordem;
  do {
    a = parseFloat(prompt("Digite o primeiro número:"));
    b = parseFloat(prompt("Digite o segundo número:"));
    c = parseFloat(prompt("Digite o terceiro número:"));
    ordem = prompt("Em qual ordem deverão ser organizados? (C / D)").toUpperCase();
    if (a <= 0 || b <= 0 || c <= 0 || (ordem !== "C" && ordem !== "D") || isNaN(a) || isNaN(b) || isNaN(c) || ordem == null) {
      alert("Resposta inválida. Os números devem ser positivos e a ordem deverá ser C ou D.");
    }
  } while (a <= 0 || b <= 0 || c <= 0 || (ordem !== "C" && ordem !== "D") || isNaN(a) || isNaN(b) || isNaN(c) || ordem == null);
  let maior;
  let meio;
  let menor;
  if (a >= b && a >= c) {
    maior = a;
    if (b >= c) {
      meio = b;
      menor = c;
    } else {
      meio = c;
      menor = b;
    }
  } else if (b >= a && b >= c) {
    maior = b;
    if (a >= c) {
      meio = a;
      menor = c;
    } else {
      meio = c;
      menor = a;
    }
  } else {
    maior = c;
    if (a >= b) {
      meio = a;
      menor = b;
    } else {
      meio = b;
      menor = a;
    }
  }
  if (ordem == "C") {
    alert(`A ordem crescente é ${menor} ${meio} ${maior}.`);
  } else {
    alert(`A ordem decrescente é ${maior} ${meio} ${menor}.`);
  }
}