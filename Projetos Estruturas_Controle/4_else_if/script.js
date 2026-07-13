function apresentar() {
  let a = 5;
  let b = 3;
  if (a + b) {
    alert("O resultado é 3");
  } else if (a == 4) {
    alert("O valor de a é 4");
  } else if (b == 3) {
    alert("O valor de b é 3");
  } else {
    alert("Nenhuma das condições acima");
  }
  let nome = "Daniel";
  if (nome != undefined && nome == "Joaquim") {
    alert("Nome está definido");
  } else if (nome == "Daniel" && nome.lenght > 5) {
    aler("O nome é Daniel");
  } else {
    alert("O nome não é Daniel");
  }
}