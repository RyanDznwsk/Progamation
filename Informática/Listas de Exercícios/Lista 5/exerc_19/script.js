function apresentar() {
  let idade = parseInt(prompt("Qual a sua idade?"));
  let acidentes = parseInt(prompt("Quantos acidentes ocorreram nos últimos 3 anos?"));
  let seguranca = confirm("Possui freios ABS e airbag?");
  let risco;
  let valorMensal;
  if ((idade >= 25 && (acidentes == 1 || acidentes == 2)) || (idade < 25 && acidentes == 0)) {
    risco = "Perfil de risco moderado.";
    valorMensal = 300;
    if (seguranca == true) {
      valorMensal = 300 - 30;
    }
  } else if (idade < 25 || acidentes > 2) {
    risco = "Perfil de risco alto.";
    valorMensal = 450;
    if (seguranca == false) {
      valorMensal = 450 + 100;
    }
  } else {
    risco = "Perfil de risco baixo (Excelente condutor).";
    valorMensal = 180;
  }
  alert(`${risco} \nO valor mesal é de ${valorMensal.toFixed(2)}.`);
}