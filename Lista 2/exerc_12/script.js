function calcular() {
    alert("Vamos calcular quanto sua viagem custou!");
    let tempo = Number(prompt("Quantas horas sua viagem demorou?"));
    let velocidade = Number(prompt("Qual foi a velocidade média da sua viagem?"));
    let consumo = Number(prompt("Quantos km seu carro faz por litro?"));
    let preco = Number(prompt("Qual é o preço do litro de combustível?"));
    let distancia = tempo * velocidade
    let litros = distancia / consumo
    let custo = litros * preco
    alert(`Você viajou por ${distancia} km. \nGastou ${litros.toFixed(2)} litros de combustível. \nE o custo foi de R$:${custo.toFixed(2)}`);
}