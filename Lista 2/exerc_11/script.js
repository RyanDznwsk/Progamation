function calcular() {
    let gado = prompt("Quantas cabeças de gado o fazendeiro possui?");
    let herdeiros = prompt("Quantos herdeiros o fazendeiro possui?");
    let doacao = gado * 0.15;
    let gadoDisponivel = gado - doacao;
    let gadoPorHerdeiro = Math.floor(gadoDisponivel / herdeiros);
    let sobra = gadoDisponivel % herdeiros;
    alert(`O fazendeiro doou ${doacao.toFixed(0)} cabeças de gado para a caridade.\nCada herdeiro receberá ${gadoPorHerdeiro} cabeças de gado. \nE sobraram ${sobra} cabeças de gado.`);
}