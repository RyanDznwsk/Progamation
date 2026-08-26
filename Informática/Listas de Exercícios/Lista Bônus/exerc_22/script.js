function apresentar() {
  let opcao = parseInt(prompt("Escolha uma opção: \n1 - Média de 2 notas \n2 - Média de 3 notas \nMédia de 4 notas"));
  let tipo;
  let notas;
  let media;
  switch (opcao) {
    case 1:
      tipo = "Média de 2 notas";
      let n1 = parseFloat(prompt("Informe a primeira nota:"));
      let n2 = parseFloat(prompt("Informe a segunda nota:"));
      notas = `${n1} e ${n2}`;
      media = (n1 + n2) / 2;
      break
    case 2:
      tipo = "Média de 3 notas";
      let n1 = parseFloat(prompt("Informe a primeira nota:"));
      let n2 = parseFloat(prompt("Informe a segunda nota:"));
      let n3 = parseFloat(prompt("Informe a terceira nota:"));
      notas = `${n1}, ${n2} e ${n3}`;
      media = (n1 + n2 + n3) / 3;
      break
    case 3:
      tipo = "Média de 4 notas";
      let n1 = parseFloat(prompt("Informe a primeira nota:"));
      let n2 = parseFloat(prompt("Informe a segunda nota:"));
      let n3 = parseFloat(prompt("Informe a terceira nota:"));
      let n4 = parseFloat(prompt("Informe a quarta nota:"));
      notas = `${n1}, ${n2}, ${n3} e ${n4}`;
      media = (n1 + n2 + n3 + n4) / 4;
      break
    default:
      alert("Opção inválida");
  }
  alert(`${tipo}. \nNotas: ${notas}. \nMédia de ${media.toFixed(2)}.`);
}