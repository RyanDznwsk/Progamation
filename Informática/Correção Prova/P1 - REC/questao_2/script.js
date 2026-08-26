function calcular() {
    let paginasTotal = parseInt(prompt("Quantas páginas serão digitadas?"));
    let digitadoresIniciais = parseInt(prompt("Quantos digitadores estão trabalhando atualmente?"));
    let horasTotal = parseInt(prompt("Em quantas horas é estimado que o trabalho seja concluido?"));
    let digitadoresAdicionados = parseInt(prompt("Quantos digitadores serão adicionados?"));
    let paginasHora = paginasTotal / horasTotal;
    let digitadoresFinais = digitadoresIniciais + digitadoresAdicionados;
    let paginasDigitador = paginasHora / digitadoresIniciais;
    let horasFinal = paginasTotal / (digitadoresFinais * paginasDigitador);
    alert(`São digitadas em média ${paginasHora} páginas por hora pela equipe atual.\nO número final de digitadores é ${digitadoresFinais}. \nO novo tempo estimado para concluir o trabalho é de ${horasFinal.toFixed(2)} horas.`);
}