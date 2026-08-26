function salario() {
    let sb = Number(prompt("informe seu salário base."));
    let sr = (sb + (sb/10)) + 50
    alert (`Seu salário a receber é de R$:${sr}`);
}