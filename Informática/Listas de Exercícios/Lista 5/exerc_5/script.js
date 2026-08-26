function apresentar() {
  let usuario = prompt("Cadastre seu usuário:");
  let senha = prompt("Cadastre sua senha:");
  alert("Você se cadastrou. Agora faça login.");
  let usuarioEntrar = prompt("Informe seu usuário:");
  let senhaEntrar = prompt("Informe sua senha:");
  let acesso;
  if (usuario != usuarioEntrar && senha != senhaEntrar) {
    acesso = "Acesso negado. Usuário e senha inválidos."
  } else if (usuario != usuarioEntrar && senha === senhaEntrar) {
    acesso = "Acesso negado. Usuário inválido."
  } else if (usuario === usuarioEntrar && senha != senhaEntrar) {
    acesso = "Acesso negado. Senha inválida."
  } else {
    acesso = "Você entrou!"
  }
  alert(`${acesso}`)
}