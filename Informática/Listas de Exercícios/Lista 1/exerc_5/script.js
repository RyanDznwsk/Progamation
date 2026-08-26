function calcular() {
    alert("Vamos calcular o custo da sua reforma!")
    let horasPedreiro = Number(prompt("Primeiro, informe a quantidade de horas que o pedreiro irá trabalhar:"));
    let horasPintor = Number(prompt("Agora, informe a quantidade de horas que o pintor irá trabalhar:"));
    let custoPedreiro = 20
    let custoPintor = 16
    let totalPedreiro = horasPedreiro * custoPedreiro
    let totalPintor = horasPintor * custoPintor
    let totalReforma = totalPedreiro + totalPintor
    alert(`O custo total com o pedreiro é: R$ ${totalPedreiro.toFixed(2)}\nO custo total com o pintor é: R$ ${totalPintor.toFixed(2)}\nO custo total com os dois profissionais é: R$ ${totalReforma.toFixed(2)}`)
}