function apresentar() {
  let media1;
  let media2;
  let media3;
  do {
    media1 = parseFloat(prompt("Digite a média do 1º trimestre:"));
    media2 = parseFloat(prompt("Digite a média do 2º trimestre:"));
    media3 = parseFloat(prompt("Digite a média do 3º trimestre:"));
    if (media1 <= 0 || media2 <= 0 || media3 <= 0 || media1 >= 10 || media2 >= 10 || media3 >= 10 || isNaN(media1) || isNaN(media2) || isNaN(media3)) {
      alert("Resposta inválida. As três médias trimestrais deverão ser valores entre 0 e 10.");
    }
  } while (media1 <= 0 || media2 <= 0 || media3 <= 0 || media1 >= 10 || media2 >= 10 || media3 >= 10 || isNaN(media1) || isNaN(media2) || isNaN(media3));
  let mediaAnual = (media1 + media2 + media3) / 3;
  let situacao;
  if (mediaAnual >= 6) {
    situacao = "Aprovado";
  } else {
    situacao = "Reprovado";
  }
  alert(`${situacao}`);
}