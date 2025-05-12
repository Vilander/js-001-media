

/*function mediaNota(n1,n2,n3,n4){
    let media = (n1+n2+n3+n4)/4
    console.log("A média é: " + media.toFixed(2))
}

mediaNota(5,4,2,3.5)

let n1=5,n2=7,n3=4,n4=3
let media = (n1+n2+n3+n4)/4
console.log("A média é: " + media.toFixed(2))


if (media >= 5){
    alert("Sua nota foi " + media +" Parabéns, você está aprovado(a)!" )
}else{
    alert("Sua nota foi " + media +" Você não atingiu a nota necessária. Está de recuperação!")
}
/*
Vamos criar uma calculadora de média e aprender o que são variáveis e como realizar operações!
Neste programa, focamos nas primeiras ferramentas principais de qualquer linguagem de programação: variáveis, operadores, arredondamento e console.
Conteúdo DETALHADO
Entender as diferenças entre HTML, CSS e JavaScript;
Variáveis, manipulação dos valores armazenados e a memória do computador;
Tipos de variáveis, como texto e inteiro;
Fixando a quantidade de casas decimais com a função toFixed();

Desafios
Dependendo da nota, mostrar se a aluna ou aluno foi aprovada(o) ou não
Alterar o fundo da tela da maneira que achar mais legal
Imprimir na própria página o resultado, ao invés do console
Criar um conversor de temperaturas entre farenheit e celcius
Colocar a conta inteira da média em apenas uma linha
Este capítulo trata sobre a sintaxe básica do JavaScript, declarações de variáveis, tipos de dados e literais.
01-media.zip*/
 
const form = document.getElementById('formNotas');
    const resultado = document.getElementById('resultado');

    form.addEventListener('submit', function(event) {
      event.preventDefault();

      
      let n1 = parseFloat(form.nota1.value);
      let n2 = parseFloat(form.nota2.value);
      let n3 = parseFloat(form.nota3.value);
      let n4 = parseFloat(form.nota4.value);

      
      let media = ((n1 + n2 + n3 + n4) / 4).toFixed(2);

      
      let mensagem;
        if (media >= 5) {
         mensagem = `Sua nota foi ${media}. Parabéns, você está aprovado(a)!`;
        } else {
         mensagem = `Sua nota foi ${media}. Você não atingiu a nota necessária. Está de recuperação.`;
        }

      
      resultado.textContent = mensagem;
    });

    const btnResetar = document.getElementById('btnResetar');

    btnResetar.addEventListener('click', function () {
  form.reset();               
  resultado.textContent = ''; 
});

/*---------------*/

function celsiusToFahrenheit(valNum) {
  valNum = parseFloat(valNum);
  if (!isNaN(valNum)) {
    const fahrenheit = (valNum * 1.8) + 32;
    document.getElementById("outputFahrenheit").innerHTML = fahrenheit.toFixed(2);
  } else {
    document.getElementById("outputFahrenheit").innerHTML = "";
  }
}

function fahrenheitToCelsius(valNum) {
  valNum = parseFloat(valNum);
  if (!isNaN(valNum)) {
    const celsius = (valNum - 32) / 1.8;
    document.getElementById("outputCelsius").innerHTML = celsius.toFixed(2);
  } else {
    document.getElementById("outputCelsius").innerHTML = "";
  }
}

