function apresentar() {
  let altura = parseFloat(prompt("Qual a sua altura? (m)"));
  let sexo = prompt("Qual o seu sexo? (M/F)").toUpperCase();
  let peso;
  if (sexo === "M") {
    peso = (72.7 * altura) - 58;
  } else if (sexo === "F") {
    peso = (62.1 * altura) - 44.7;
  } else {
    alert("Você é burro, eu falei pra botar F ou M");
  }
  alert(`Seu peso ideal é ${peso.toFixed(2)} kg.`);
}