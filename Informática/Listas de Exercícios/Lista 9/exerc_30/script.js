function apresentar() {
  let horaInicio;
  let horaFim;
  do {
    horaInicio = parseInt(prompt("Digite o horário de início da atividade:"));
    horaFim = parseInt(prompt("Digite o horário de término da atividade:"));
    if (horaInicio < 0 || horaInicio > 23 || horaFim < 0 || horaFim > 23 || isNaN(horaInicio) || isNaN(horaFim)) {
      alert("Resposta inválida. Os horários de início e término das atividades não podem ser negativos ou maiores que 23.");
    }
  } while (horaInicio < 0 || horaInicio > 23 || horaFim < 0 || horaFim > 23 || isNaN(horaInicio) || isNaN(horaFim));
  let duracao;
  if (horaFim >= horaInicio) {
    duracao = horaFim - horaInicio;
  } else {
    duracao = (24 - horaInicio) + horaFim;
  }
  alert(`A duração da atividade foi de ${duracao} horas.`);
}