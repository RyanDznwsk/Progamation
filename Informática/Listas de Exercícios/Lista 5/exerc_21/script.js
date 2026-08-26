function apresentar() {
  let renda = parseFloat(prompt("Qual é a sua renda mensal?"));
  let score = parseInt(prompt("Qual é o seu Score? (0 a 1000)"));
  let rendaComprometida = parseInt(prompt("Qual a porcetagem da sua renda comprometida?"));
  let cartao;
  let aprovacao;
  let credito;
  let limite;
  let mensagem;
  if (renda >= 10000 && score >= 800 && rendaComprometida < 40) {
    cartao = "Cartão Black";
    limite = 50;
    credito = renda * 0.5;
    aprovacao = "aprovação VIP"
    mensagem = `Você receberá o ${cartao}, com ${aprovacao}, com limite de ${limite}%, ou R$:${credito.toFixed(2)} de crédito.`;
  } else if (renda < 10000 && score >= 600 && rendaComprometida < 50) {
    cartao = "Cartão Platinum";
    limite = 30;
    credito = renda * 0.3;
    aprovacao = "aprovação padrão"
    mensagem = `Você receberá o ${cartao}, com ${aprovacao}, com limite de ${limite}%, ou R$:${credito.toFixed(2)} de crédito.`;
  } else if (score >= 500 && rendaComprometida <= 30) {
    cartao = "Cartão Basic";
    limite = 1000;
    aprovacao = "crédito controlado"
    mensagem = `Você receberá o ${cartao}, com ${aprovacao}, com limite fixo de R$:${limite.toFixed(2)} de crédito.`;
  } else {
    mensagem = `Seu crédito foi negado e você não receberá cartão.`;
  }
  alert(`${mensagem}`)
}