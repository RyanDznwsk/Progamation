function calcular() {
    let largura = parseFloat(prompt("Qual a largura do piso?"));
    let comprimento = parseFloat(prompt("Qual o comprimento do piso?"));
    let areaPecas = prompt("Qual é a área de cada peça?");
    let perda = prompt("Qual o percentual de perda?");
    let precoPecas = parseFloat(prompt("Quanto custa cada peça?"));
    let areaPiso = largura * comprimento;
    let areaPerda = (areaPiso * perda) / 100;
    let pecas = Math.ceil(areaPiso / areaPecas);
    let custo = pecas * precoPecas;
    alert(`A área total do piso é ${areaPiso.toFixed(1)} m². \nA área com perda é ${areaPerda.toFixed(1)} m². \nA quantidade de peças necessárias é ${pecas} peças. \nO custo total é de R$:${custo.toFixed(2)}.`);
}