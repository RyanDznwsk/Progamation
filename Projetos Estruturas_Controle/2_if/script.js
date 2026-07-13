function apresentar() {
  let idade = prompt("Qual a sua idade?");
  if (idade == 25) {
    alert("A idade é 25");
  }
  let nome = "Matheus";
  if (nome == "Matheus" && idade > 10) {
    alert("Liberado");
  }
  let passaporte = true;
  if ((nome == "Matheus" && idade > 10) || passaporte == true) {
    alert("Liberado 2");
  }
}