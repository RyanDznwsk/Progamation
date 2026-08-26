function apresentar() {
  let numDia = parseFloat(prompt("Digite o número do dia da semana (1 a 7):"));
  let dia;
  switch (numDia) {
    case 1:
      dia = "Domingo";
      break;
    case 2:
      dia = "Segunda-feira";
      break;
    case 3:
      dia = "Terça-feira";
      break;
    case 4:
      dia = "Quarta-feira";
      break;
    case 5:
      dia = "Quinta-feira";
      break;
    case 6:
      dia = "Sexta-feira";
      break;
    case 7:
      dia = "Sábado";
      break;
    default:
      dia = "Número inválido. Por favor, digite um número entre 1 e 7.";
  }
  alert(`${dia}`);
}