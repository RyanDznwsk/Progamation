function apresentar() {
  let salario = parseFloat(prompt("Qual é o seu salário?"));
  let prestacao = parseFloat(prompt("Qual é o valor da prestação?"));
  let tempoEmprego = parseInt(prompt("Há quantos anos você trabalha?"));
  let rendaComprometida = Math.round((prestacao * 100) / salario);
  let situacao;
  if (rendaComprometida <= 30 && tempoEmprego > 2) {
    situacao = "aprovado";
  } else {
    situacao = "reprovado";
  }
  alert(`O percentual da renda comprometida é ${rendaComprometida}%. \nVocê foi ${situacao}.`)
}