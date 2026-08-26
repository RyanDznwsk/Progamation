function apresentar() {
  let codigo = prompt("Digite o período do dia: (M / T / N)").toUpperCase();
  let periodo;
  let saudacao;
  switch (codigo) {
    case "M":
      periodo = "Manhã";
      break;
    case "T":
      periodo = "Tarde";
      break;
    case "N":
      periodo = "Noite";
      break;
    default:
      alert("Código inválido");
  }
  switch (periodo) {
    case "Manhã":
      saudacao = "Bom dia!";
      break;
    case "Tarde":
      saudacao = "Boa tarde!";
      break;
    case "Noite":
      saudacao = "Boa noite!";
      break;
    default:
      saudacao = "Período inválido"
  }
  alert(`${saudacao}`);
}