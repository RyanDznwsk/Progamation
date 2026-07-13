// Aulas
console.log("hello World");
console.log(5);
console.log(12.7);
console.log(-123);
console.log(typeof 5);
console.log(typeof 12.7);
console.log(typeof -123);
console.log(2 + 3);
console.log(5 - 12);
console.log(4 * 4);
console.log(5 / 3);
console.log(20 % 2);
console.log(21 % 2);
console.log(Infinity);
console.log(-Infinity);
console.log(NaN);
console.log(typeof Infinity);
console.log(typeof -Infinity);
console.log(typeof NaN);
console.log("Oi, meu nome é Ryan");
console.log("Eu Queria comprar um carro");
console.log(`Teste`);
console.log(typeof "Oi, meu nome é Ryan");
console.log(typeof "Eu Queria comprar um carro");
console.log(typeof `Teste`);
console.log("Primeira linha \n Segunda linha");
console.log("O meu nome é 'Ryan'");
console.log('O nome dela é "Priscila"');
console.log(`A multiplicação de 5 por 3 é ${5 * 3}`);
console.log("O " + "meu " + "nome " + "é " + "Ryan.");
console.log(true);
console.log(false);
console.log(10 > 2);
console.log(5 > 200);
console.log(typeof true);
console.log(typeof false);
console.log(typeof (10 > 2));
console.log(typeof (5 > 200));
console.log(1 > 2);
console.log(5 > 10);
console.log(3 >= 3);
console.log(5 <= 4);
console.log(5 == 4);
console.log('Eva' != 'Eva');
console.log(3 === '3');
console.log(3 === '4');
console.log(true && true);
console.log(true && false);
console.log(false || false);
console.log(!true);
console.log(5 > 3 && 3 == 2);
console.log(5 > 3 || 3 == 1);
console.log(3 == 3 && "matheus" == "matheus");
console.log("felipe" == "joao" || false);
console.log(true ? 1 : 2);
console.log(false ? 'falso' : 'verdadeiro');
console.log(5 > 2 ? 'É sim' : 'É nao');
console.log("mathew" == "mathew" ? "ola, mathew!" : "nao é o mathew");
console.log(null);
console.log(undefined);
console.log(5 * null);
console.log("5" - 3);
console.log("5" + 1);
console.log("dois" * "três");
console.log(typeof "123" + 4);
console.log(typeof "30" + 4);
alert("Olá, seja bem-vindo ao JavaScript!");
let nome = "Ryan";
console.log(nome);
console.log(`O meu nome é ${nome}`);
let laranjas = 5;
console.log(laranjas * laranjas);
nome = "João";
console.log(nome);
laranja = 83284;
console.log(laranja);
laranja = "Laranja";
console.log(laranja);
var nome1 = "Ryan";
const ip = "127.0.0.1";
console.log(nome1);
console.log(ip);
// ip = "353.0.0.1"; - Constante não pode ser alterada
// console.log(ip);
// let 3nome = 'Teste';
/*
let nome = prompt("Qual é o seu nome?");
let idade = prompt(`Olá, ${nome}! Quantos anos você tem?`);
alert(`Olá, ${nome}! Você tem ${idade} anos.`);
console.log(`Olá, ${nome}! Você tem ${idade} anos.`);
alert("Se inscreva no meu canal!");
alert("Tem certeza que já se inscreveu?");
let maior = Math.max(6, 12, 28, 55, 8)
console.log(maior)
let menor = Math.min(6, 12, 28, 55, 8)
console.log(menor)
let arredondar = Math.round(5.2654286)
console.log(arredondar)
let arredondarParaCima = Math.ceil(5.2654286)
console.log(arredondarParaCima)
let arredondarParaBaixo = Math.floor(5.2654286)
console.log(arredondarParaBaixo)
let nome = "Ryan";
let idade = 15;
console.log(nome);
console.log(idade);
console.log(`Meu nome é ${nome}, tenho ${idade} anos.`);
*/

// Pessoal
function clicou() {
    alert("Você clicou no botão!");
}
function inicio() {
    let nome = prompt("Qual é o seu nome?");
    let idade = prompt(`Olá, ${nome}! Quantos anos você tem?`);
    if (idade >= 18) {
        alert(`${nome}, você é um adulto!`);
    }
    else {
    alert(`${nome}, você é uma criança!`);
    }
    let res = document.getElementById("resposta");
    res.innerHTML = `Olá, ${nome}!`;
}
console.log(Math.PI);
console.log(Math.abs(-200));
console.log(Math.sqrt(81));
console.log(Math.cbrt(27));
console.log(Math.ceil(12.2));
console.log(Math.floor(15.7));
console.log(Math.round(18.5));
console.log(Math.trunc(22.2095687));
console.log(Math.min(5, 10, 3));
console.log(Math.max(5, 10, 3));
console.log(Math.random());
function sequencia() {
    var n1, n2, n3;
    n1 = Number(prompt("Digite um número inteiro qualquer"));
    n2 = n1 - 1;
    n3 = n1 + 1;
    alert(`O antecessor de ${n1} é ${n2} e o sucessor é ${n3}.`);
}
function comprar() {
    let produto = prompt("Qual produto você deseja comprar?");
    let preço = prompt(`Quanto ${produto} custa?`);
    let dinheiro = prompt(`Quanto você da para pagar?`);
    if (dinheiro >= preço) {
        alert(`Parabéns! Você comprou o ${produto} por R$:${preço}! Deu R$:${dinheiro} e vai receber R$:${dinheiro - preço} de troco. Volte sempre!`);
    }
    else {
        alert(`Desculpe, você não tem dinheiro suficiente para comprar o ${produto}.`);
    }
}
function medidas() {
    let metros = prompt("Digite uma distância em metros (m):");
    let med = document.getElementById("medidas");
    med.innerHTML = `<h3> A distância de ${metros}, corresponde a: </h3> <p>${metros / 1000} kilômetros (km) <br> ${metros / 100} hectômetros (hm) <br> ${metros / 10} decâmetros (dam) <br> ${metros * 10} decímetros (dm) <br> ${metros * 100} centímetros (cm) <br> ${metros * 1000} milímetros (mm)</p>`;
}
function temperatura() {
    let celsius = Number(prompt("Digite a temperatura em graus celsius (°C):"));
    let fahrenheit = (celsius * 9/5) + 32;
    let kelvin = (celsius + 273.15);
    let temp = document.getElementById("temperatura");
    temp.innerHTML = `<h3> A temperatura de ${celsius}°C corresponde a: </h3> <p>${fahrenheit}°F <br> ${kelvin}K</p>`;
}
function dinheiro() {
    let cotdol = Number(prompt("Digite a cotação do dólar hoje?"));
    let reais = Number(prompt("Digite um valor em reais (R$):"));
    let dolar = reais / cotdol;
    let dinheiro = document.getElementById("dinheiro");
    dinheiro.innerHTML = `<h3> O valor de R$:${reais} corresponde a: </h3> <p>US$:${dolar}</p>`;
}
function desconto() {
    let produto = prompt("Qual é o nome do produto?");
    let valor = Number(prompt("Digite o valor do produto:"));
    let porcentagem = Number(prompt("Digite a porcentagem de desconto:"));
    let desconto = valor * (porcentagem / 100);
    let valorfinal = valor - desconto;
    let desc = document.getElementById("desconto");
    desc.innerHTML = `<h3> O valor do produto com desconto é: </h3> <p>R$:${valorfinal}</p>`;
}
function aumento() {
    let salario = Number(prompt("Digite o salário:"));
    let porcentagem = Number(prompt("Digite a porcentagem de aumento:"));
    let aumento = salario * (porcentagem / 100);
    let valorfinal = salario + aumento;
    let aument = document.getElementById("aumento");
    aument.innerHTML = `<h3> O valor do produto com aumento é: </h3> <p>R$:${valorfinal}</p>`;
}
function acao1() {
    let resp = window.document.getElementById("saida");
    resp.innerHTML += "<p>Clicou no botão 1</p>";
}
function acao2() {
    let resp = window.document.getElementById("saida");
    resp.innerHTML += "<p>Clicou no botão 2</p>";
}
function acao3() {
    let resp = window.document.getElementById("saida");
    resp.innerHTML += "<p>Clicou no botão 3</p>";
}
function acao4() {
    let resp = window.document.getElementById("saida");
    resp.innerHTML += "<p>Clicou no botão 4</p>";
}
function bhaskara() {
    let a = Number(prompt("Digite o valor de a:"));
    let b = Number(prompt("Digite o valor de b:"));
    let c = Number(prompt("Digite o valor de c:"));
    let delta = (b * b) - (4 * a * c);
    if (delta < 0) {
        let sol = window.document.getElementById("bhaskara");
        sol.innerHTML = "<p>A equação não possui raízes reais.</p>";
    }
    else if (delta === 0) {
        let x = -b / (2 * a);
        let sol = window.document.getElementById("bhaskara");
        sol.innerHTML = `<p>A equação possui uma raiz real: x = ${x}</p>`;
    }
    else {
        let x1 = (-b + Math.sqrt(delta)) / (2 * a);
        let x2 = (-b - Math.sqrt(delta)) / (2 * a);
        let sol = window.document.getElementById("bhaskara");
        sol.innerHTML = `<h3>A equação possui duas raízes reais:</h3> <p>x1 = ${x1} e x2 = ${x2}</p>`;
    }
}
function area() {
    let base = prompt("Primeiro, informe a base do triângulo que quer calcular.");
    let altura = prompt("Agora, informe a altura desse triângulo.")
    let area = ((base * altura)/2)
    let ar = document.getElementById("area");
    ar.innerHTML = `<h3> A área do triângulo é: </h3> <p>${area}</p>`;
}
function hipotenusa() {
    if (window.confirm("O seu triângulo é retângulo?") === false) {
        alert("Desculpe, essa função só pode ser usada para triângulos retângulos.");
    } else {
        if (window.confirm("Você tem certeza?") === false) {
            alert("Desculpe, essa função só pode ser usada para triângulos retângulos.");
        } else {
            let cateto1 = parseInt(prompt("Então tá. Digite o valor do primeiro cateto:"));
            let cateto2 = parseInt(prompt("Agora, digite o valor do segundo cateto:"));
            let hipotenusa = Math.sqrt((cateto1 ** 2) + (cateto2 ** 2));
            let hip = document.getElementById("hipotenusa");
            hip.innerHTML = `<h3> A hipotenusa do triângulo é:</h3> <p>${hipotenusa}</p>`;
        }
    }
}
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const btnLimpar = document.querySelector("button[type='reset']");

  // --- 1. Validação de campos obrigatórios ---
  form.addEventListener("submit", async function (event) {
    event.preventDefault();

    const nome = document.querySelector("input[name='nome']").value.trim();
    const email = document.querySelector("input[name='email']").value.trim();
    const celular = document.querySelector("input[name='celular']").value.trim();
    const nascimento = document.querySelector("input[name='nascimento']").value.trim();

    if (!nome || !email || !celular || !nascimento) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    // --- 3. Envio assíncrono (AJAX) ---
    try {
      const formData = new FormData(form);

      const response = await fetch("/enviar-formulario", {
        method: "POST",
        body: formData
      });

      if (response.ok) {
        alert("Mensagem enviada com sucesso!");
        form.reset();
      } else {
        alert("Erro ao enviar. Tente novamente.");
      }
    } catch (error) {
      console.error("Erro:", error);
      alert("Ocorreu um problema na conexão.");
    }
  });

  // --- 4. Interação com a newsletter ---
  const newsletterOptions = document.querySelectorAll("input[name='newsletter']");
  newsletterOptions.forEach(option => {
    option.addEventListener("change", function () {
      if (this.value.toLowerCase() === "sim") {
        alert("Você será inscrito na nossa newsletter!");
      } else {
        alert("Você optou por não receber nossa newsletter.");
      }
    });
  });

  // --- 5. Limpar formulário ---
  if (btnLimpar) {
    btnLimpar.addEventListener("click", function () {
      form.reset();
    });
  }
});
function play() {
    let som = document.getElementById("som");
    som.currentTime = 0;
    som.play();
}
function calculo1() {
    let letra = prompt("Digite uma letra:").toLowerCase();
    if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
        let sol1 = document.getElementById("calculo1");
        sol1.innerHTML = `<p>A letra "${letra}" é uma vogal!</p>`;
    } else {
        let sol1 = document.getElementById("calculo1");
        sol1.innerHTML = `<p>A letra "${letra}" é uma consoante!</p>`;
    }
}
function calculo2() {
    let nota1 = parseFloat(prompt("Digite sua primeira nota:"));
    let nota2 = parseFloat(prompt("Digite  sua segunda nota:"));
    let media = (nota1 + nota2) / 2;
    if (media === 10) {
        let sol2 = document.getElementById("calculo2");
        sol2.innerHTML = "<p>Aprovado com distinção!</p>";
    } else if (media >= 6) {
        let sol2 = document.getElementById("calculo2");
        sol2.innerHTML = "<p>Aprovado!</p>";
    } else {
        let sol2 = document.getElementById("calculo2");
        sol2.innerHTML = "<p>Reprovado.</p>";
    }
}
function calculo3() {
    let n1 = parseInt(prompt("Digite o primeiro número:"));
    let n2 = parseInt(prompt("Digite o segundo número:"));
    let n3 = parseInt(prompt("Digite o terceiro número:"));
    if (n1 > n2 && n1 > n3) {
        let sol3 = document.getElementById("calculo3");
        sol3.innerHTML = `<p>O maior número é: ${n1}</p>`;
    } else if (n2 > n1 && n2 > n3) {
        let sol3 = document.getElementById("calculo3");
        sol3.innerHTML = `<p>O maior número é: ${n2}</p>`;
    } else {
        let sol3 = document.getElementById("calculo3");
        sol3.innerHTML = `<p>O maior número é ${n3}</p>`;
    }
}
function calculo4() {
    let turno = prompt("Em qual turno você estuda? (M / V / N / I)").toUpperCase();
    if (turno === "M") {
        let sol4 = document.getElementById("calculo4");
        sol4.innerHTML = "<p>Bom dia!</p>";
    } else if (turno === "V") {
        let sol4 = document.getElementById("calculo4");
        sol4.innerHTML = "<p>Boa tarde!</p>";
    } else if (turno === "N") {
        let sol4 = document.getElementById("calculo4");
        sol4.innerHTML = "<p>Boa noite!</p>";
    } else if (turno === "I") {
        let sol4 = document.getElementById("calculo4");
        sol4.innerHTML = "<p>Você sofre :(</p>";
    } else {
        alert("Valor inválido")
    }
}
function calculo5() {
    let salario = parseFloat(prompt("Qual é o seu salário?"));
    let reajuste;
    let salarioFinal;
    if (salario <= 280) {
        reajuste = salario * 0.20;
        salarioFinal = salario + reajuste;
        let sol5 = document.getElementById("calculo5");
        sol5.innerHTML = `<p>O salário inicial é de R$:${salario.toFixed(2)}. <br> A porcentagem de reajuste é de 20%. <br> O valor do reajuste é de R$:${reajuste.toFixed(2)}. <br> O salário final é de R$:${salarioFinal.toFixed(2)}.</p>`;
    } else if (salario <= 700) {
        reajuste = salario * 0.15;
        salarioFinal = salario + reajuste;
        let sol5 = document.getElementById("calculo5");
        sol5.innerHTML = `<p>O salário inicial é de R$:${salario.toFixed(2)}. <br> A porcentagem de reajuste é de 15%. <br> O valor do reajuste é de R$:${reajuste.toFixed(2)}. <br> O salário final é de R$:${salarioFinal.toFixed(2)}.</p>`;
    } else if (salario <= 1500) {
        reajuste = salario * 0.10;
        salarioFinal = salario + reajuste;
        let sol5 = document.getElementById("calculo5");
        sol5.innerHTML = `<p>O salário inicial é de R$:${salario.toFixed(2)}. <br> A porcentagem de reajuste é de 10%. <br> O valor do reajuste é de R$:${reajuste.toFixed(2)}. <br> O salário final é de R$:${salarioFinal.toFixed(2)}.</p>`;
    } else {
        reajuste = salario * 0.05;
        salarioFinal = salario + reajuste;
        let sol5 = document.getElementById("calculo5");
        sol5.innerHTML = `<p>O salário inicial é de R$:${salario.toFixed(2)}. <br> A porcentagem de reajuste é de 5%. <br> O valor do reajuste é de R$:${reajuste.toFixed(2)}. <br> O salário final é de R$:${salarioFinal.toFixed(2)}.</p>`;
    }
}
function calculo6() {
    let salHora = parseFloat(prompt("Quanto você ganha por hora?"));
    let cargaHoraria = parseInt(prompt("Quantas horas você trabalha por mês?"));
    let salBruto = salHora * cargaHoraria;
    let IR;
    let INSS = salBruto * 0.1;
    let FGTS = salBruto * 0.11;
    if (salBruto <= 900 && salBruto > 0) {
        IR = salBruto * 0;
        let desconto = INSS + IR;
        let salLiquido = salBruto - desconto;
        let sol6 = document.getElementById("calculo6")
        sol6.innerHTML = `<p>Seu salário bruto é de R$:${salBruto.toFixed(2)}. Você está isento de imposto de renda! O valor do INSS é de R$:${INSS.toFixed(2)}. O valor do FGTS é de R$:${FGTS.toFixed(2)}. O desconto total é de R$:${desconto.toFixed(2)}. O seu salário líquido então é de R$:${salLiquido.toFixed(2)}.</p>`;
    } else if (salBruto <= 1500 && salBruto > 900) {
        IR = salBruto * 0.05;
        let desconto = INSS + IR;
        let salLiquido = salBruto - desconto;
        let sol6 = document.getElementById("calculo6")
        sol6.innerHTML = `<p>Seu salário bruto é de R$:${salBruto.toFixed(2)}. O valor do imposto de renda é de R$:${IR.toFixed(2)} O valor do INSS é de R$:${INSS.toFixed(2)}. O valor do FGTS é de R$:${FGTS.toFixed(2)}. O desconto total é de R$:${desconto.toFixed(2)}. O seu salário líquido então é de R$:${salLiquido.toFixed(2)}.</p>`;
    } else if (salBruto <= 2500 && salBruto > 2500) {
        IR = salBruto * 0.1;
        let desconto = INSS + IR;
        let salLiquido = salBruto - desconto;
        let sol6 = document.getElementById("calculo6")
        sol6.innerHTML = `<p>Seu salário bruto é de R$:${salBruto.toFixed(2)}. O valor do imposto de renda é de R$:${IR.toFixed(2)} O valor do INSS é de R$:${INSS.toFixed(2)}. O valor do FGTS é de R$:${FGTS.toFixed(2)}. O desconto total é de R$:${desconto.toFixed(2)}. O seu salário líquido então é de R$:${salLiquido.toFixed(2)}.</p>`;
    } else if (salBruto > 2500) {
        IR = salBruto * 0.2;
        let desconto = INSS + IR;
        let salLiquido = salBruto - desconto;
        let sol6 = document.getElementById("calculo6")
        sol6.innerHTML = `<p>Seu salário bruto é de R$:${salBruto.toFixed(2)}. O valor do imposto de renda é de R$:${IR.toFixed(2)} O valor do INSS é de R$:${INSS.toFixed(2)}. O valor do FGTS é de R$:${FGTS.toFixed(2)}. O desconto total é de R$:${desconto.toFixed(2)}. O seu salário líquido então é de R$:${salLiquido.toFixed(2)}.</p>`;
    } else {
        let sol6 = document.getElementById("calculo6")
        sol6.innerHTML = `<p>Valores inválidos</p>`;
    }
}
function calculo7() {
    let ladoA = parseFloat(prompt("Informe o primeiro lado do triângulo"))
    let ladoB = parseFloat(prompt("Informe o segundo lado do triângulo"))
    let ladoC =parseFloat(prompt("Informe o terceiro lado do triângulo"))
    if (ladoA == ladoB == ladoC) {
        let sol7 = document.getElementById("calculo7")
        sol7.innerHTML = `<p>O triângulo é equilátero.</p>`
    } else if ((ladoA + ladoB) > ladoC && (ladoA == ladoB || ladoA == ladoC || ladoB == ladoC)) {
        let sol7 = document.getElementById("calculo7")
        sol7.innerHTML = `<p>O triângulo é isósceles.</p>`
    } else if (ladoA != ladoB != ladoC) {
        let sol7 = document.getElementById("calculo7")
        sol7.innerHTML = `<p>O triângulo é escaleno.</p>`
    } else {
        let sol7 = document.getElementById("calculo7")
        sol7.innerHTML = `<p>Os lados não formam um triângulo.</p>`
    }
}