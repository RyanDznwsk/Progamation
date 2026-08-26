function apresentar() {
  let valorTotal = parseFloat(prompt("Qual o valor total da sua compra?"));
  let nivelFidelidade = prompt("Qual o seu nível de fidelidade? (Bronze/Prata/Ouro)").toLowerCase();
  let validadeCupom = confirm("Você tem cupom de desconto?");
  let valorFinal;
  let desconto;
  let frete;
  let valorTotalFinal;
  if (nivelFidelidade === "ouro") {
    desconto = valorTotal * 0.15;
    valorFinal = valorTotal - desconto;
    if (valorFinal >= 150) {
      frete = 0;
    } else {
      frete = 10;
    }
    valorTotalFinal = valorFinal + frete;
  } else if (nivelFidelidade === "prata") {
    if (validadeCupom == true) {
      desconto = valorTotal * 0.1;
    } else {
      desconto = valorTotal * 0.05;
    }
    if (valorTotal > 250) {
      frete = 0
    } else {
      frete = 20
    }
    valorFinal = valorTotal - desconto;
    valorTotalFinal = valorFinal + frete;
  } else {
    if (validadeCupom == true) {
      desconto = valorTotal * 0.05;
    } else {
      desconto = 0;
    }
    frete = 30;
    valorFinal = valorTotal - desconto;
    valorTotalFinal = valorFinal + frete;
  }
  alert(`O desconto foi de R$:${desconto.toFixed(2)}. \nO valor do frete foi de R$:${frete.toFixed(2)}. \nO valor total final é de R$:${valorTotalFinal.toFixed(2)}.`)
}