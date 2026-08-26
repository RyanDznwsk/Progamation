function apresentar() {
  let codigo = parseInt(prompt("Informe o código do cargo: (1 / 2 / 3 / 4)"));
  let horas = parseFloat(prompt("Informe quantidade de horas:"));
  let cargo;
  let valorHora;
  switch (codigo) {
    case 1:
      cargo = "Programador Júnior";
      valorHora = 35;
      break
    case 2:
      cargo = "Programador Pleno";
      valorHora = 55;
      break
    case 3:
      cargo = "Programador Sênior";
      valorHora = 80;
      break
    case 4:
      cargo = "Analista de Sistemas";
      valorHora = 95;
      break
    case 5:
      cargo = "Arquiteto de Software";
      valorHora = 130;
      break
    default:
      alert("Código de cargo inválido");
  }
  let salario = horas * valorHora;
  alert(`${cargo}. \nvalor por hora de R$:${valorHora}. \nSalário de R$:${salario.toFixed(2)}.`);
}