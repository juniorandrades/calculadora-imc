//Carne - 400gr por pessoa, porém se for + de 6 horas de festa - 650
//Cerveja = 1200 ml por pessoa, porém se for + de 6 horas de festa - 2000ml
//Refrigerante/agua - 1000ml por pessoa, porém se for + de 6 horas de festa - 1500ml
//Crianças valem por 0,5 ou 1/2

let inputNome = document.getElementById("nome");

let inputAltura = document.getElementById("altura");

let inputPeso = document.getElementById("peso");

let resultado = document.getElementById("resultado")

function calcular () {

    console.log("calculando...")

    let nome = inputNome.value
    let altura = inputAltura.value
    let peso = inputPeso.value

    if (nome !== '' && altura !== '' && peso !== '') {

    let imc = (peso / (altura * altura) * 10000).toFixed(2);
   
    let classificacao = '';
    
    if (imc < 18.5) {
        classificacao = 'Magreza'
    }else if (imc < 24.9){
        classificacao = 'Normal'
    }else if (imc < 29.9){
        classificacao = 'Sobrepeso'
    }else if (imc < 34.9){
        classificacao = 'Obesidade grau l'
    }else if (imc < 39.9){
        classificacao = 'Obesidade grau ll'
    }else if (imc > 40.0){
        classificacao = 'Obesidade grau III'
    }


    resultado.innerHTML = `${(nome)} Seu IMC é: ${(imc)} e sua classificação é: ${(classificacao)}`

    }else {
        alert('Preencha todos os campos!')
    }
}

