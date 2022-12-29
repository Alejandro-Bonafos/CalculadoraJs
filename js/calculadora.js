const botonNumero = document.getElementsByName('numero');
const botonOperacion = document.getElementsByName('operacion');
const botonIgual = document.getElementsByName('igual') [0];
const botonBorrar = document.getElementsByName('borrar')[0];
var resultado = document.getElementById ('result');
var operacionActual = '';
var operacionAnterior = '';
var operacionFinal = undefined;

botonNumero.forEach(function(boton){
    boton.addEventListener('click',function(){
        agregarNumero(boton.innerText);
    })
});

botonOperacion.forEach( function(boton){
    boton.addEventListener('click', function(){
        selectOperacion(boton.innerText);
    })   
});

botonIgual.addEventListener('click', function(){
    calcular();
    actualizarDisplay();
});

botonBorrar.addEventListener('click', function(){
    limpiar();
    actualizarDisplay();
});

function agregarNumero(num){
    operacionActual = operacionActual.toString() + num.toString();
    actualizarDisplay();
}

function selectOperacion(op){
    if( operacionActual === '')return;
    if(operacionAnterior !== ''){
        calcular()
    }
    operacionFinal =op.toString();
    operacionAnterior = operacionActual;
    operacionActual='';
}

function calcular(){
    var calculo;
    const anterior = parseFloat(operacionAnterior);
    const actual = parseFloat(operacionActual);
    if(isNaN (anterior) || isNaN(actual)) return;
    switch(operacionFinal){
        case '+':
            calculo = anterior + actual;
            break
        case '-':
            calculo = anterior - actual;
            break
        case 'x':
            calculo = anterior * actual;
            break
        case '/':
         calculo = anterior / actual;
            break
    }
    operacionActual= calculo;
    operacionFinal= undefined;
    operacionAnterior = '';
}

function limpiar(){
  operacionActual = '';
  operacionAnterior = '';
  operacionFinal = undefined;
}

function actualizarDisplay(){
    result.value = operacionActual;
}
limpiar();