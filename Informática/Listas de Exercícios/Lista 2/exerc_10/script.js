function calcular() {
    let peso = Number(prompt("Qual é o seu peso?"));
    let engordou = (peso * 15) / 100;
    let emagreceu = (peso * 20) / 100;
    let pesoFinalEngordado = peso + engordou;
    let pesoFinalEmagrecido = peso - emagreceu;
    alert(`Se você engordar 15% você ficará com ${pesoFinalEngordado}kg \nSe você emagrecer 20% você ficará com ${pesoFinalEmagrecido}kg`);
}