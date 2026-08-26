function calcular() {
    let aulas = prompt("Quantas aulas você da por dia?");
    let duracao = prompt("Quantos minutos dura cada aula?");
    let dias = prompt("Quantos dias você trabalha por mês?");
    let minutos = aulas * duracao * dias;
    let horas = Math.ceil(minutos / 60);
    alert(`Sua carga horária em minutos é de ${minutos}. \nSua carga horária em horas é de ${horas}.`);
}