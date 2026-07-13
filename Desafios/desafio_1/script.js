function calcular() {
    alert ("Vamos calcular a área de um triângulo!");
    let base = prompt("Primeiro, informe a base do triângulo que quer calcular.");
    let altura = prompt("Agora, informe a altura desse triângulo.")
    let area = ((base * altura)/2)
    alert (`A área do triângulo é ${area}.`)
}