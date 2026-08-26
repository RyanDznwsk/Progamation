function apresentar() {
  let T = parseFloat(prompt("Qual a temperatura do termômetro?"));
  let temp;
  if (T < 100) {
    temp = "muito baixa";
  } else if (T <= 200) {
    temp = "baixa";
  } else if (T < 500) {
    temp = "normal";
  } else {
    temp = "muito alta";
  }
  alert(`A temperatura está ${temp}!`)
}