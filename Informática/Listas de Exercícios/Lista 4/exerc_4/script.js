function apresentar() {
  let idade = parseInt(prompt("Qual a sua idade?"));
  let habilitacao = confirm("Você tem habilitação?");
  if (idade  >= 18 && habilitacao === false) {
    alert("Você não pode dirigir!");
  } else if (idade >= 18 && habilitacao === true) {
    alert("Você pode dirigir!");
  } else {
    alert("Você é menor de idade, não pode dirigir!");
  }
}