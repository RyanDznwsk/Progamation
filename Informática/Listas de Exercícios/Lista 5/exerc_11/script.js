function apresentar() {
  let idade = parseInt(prompt("Qual a sua idade?"));
  let categoria;
  if (idade <= 12) {
    categoria = "infantil";
  } else if (idade <= 17) {
    categoria = "juvenil";
  } else {
    categoria = "adulto";
  }
  alert(`Sua categoria é ${categoria}.`)
}