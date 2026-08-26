function calcular() {
    let disciplinas = parseInt(prompt("Quantas disciplinas você estuda por dia?"));
    let horasDisciplinas = parseFloat(prompt("Quantas horas você estuda cada disciplina por dia?"));
    let dias = parseInt(prompt("Quantos dias você estuda?"));
    let horasEstudadasDia = Math.round(horasDisciplinas * disciplinas);
    let horasEstudadas = Math.round(horasEstudadasDia * dias);
    alert(`Você estuda ${horasEstudadasDia} horas por dia. \nVocê estuda ${horasEstudadas} horas no total.`);
}