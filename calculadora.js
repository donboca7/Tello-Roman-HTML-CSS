// Variables globales
let operandoA;
let operandoB;
let operacion;

function init() {
    // Variables locales de botones y display
    let display = document.getElementById('display');
    let boton0 = document.getElementById('0');
    let boton1 = document.getElementById('1');
    let boton2 = document.getElementById('2');
    let boton3 = document.getElementById('3');
    let boton4 = document.getElementById('4');
    let boton5 = document.getElementById('5');
    let boton6 = document.getElementById('6');
    let boton7 = document.getElementById('7');
    let boton8 = document.getElementById('8');
    let boton9 = document.getElementById('9');
    let botonC = document.getElementById('C');
    let botonSuma = document.getElementById('suma');
    let botonResta = document.getElementById('resta');
    let botonMultiplicacion = document.getElementById('multiplicacion');
    let botonDivision = document.getElementById('division');
    let botonIgual = document.getElementById('igual');

    // Eventos para cada botón
    boton0.onclick = function() { display.value += '0'; };
    boton1.onclick = function() { display.value += '1'; };
    boton2.onclick = function() { display.value += '2'; };
    boton3.onclick = function() { display.value += '3'; };
    boton4.onclick = function() { display.value += '4'; };
    boton5.onclick = function() { display.value += '5'; };
    boton6.onclick = function() { display.value += '6'; };
    boton7.onclick = function() { display.value += '7'; };
    boton8.onclick = function() { display.value += '8'; };
    boton9.onclick = function() { display.value += '9'; };

    // Funcionalidades de operaciones
    botonSuma.onclick = function() { seleccionarOperacion('+'); };
    botonResta.onclick = function() { seleccionarOperacion('-'); };
    botonMultiplicacion.onclick = function() { seleccionarOperacion('*'); };
    botonDivision.onclick = function() { seleccionarOperacion('/'); };

    // Igual y limpiar
    botonIgual.onclick = function() { resolver(); };
    botonC.onclick = function() { resetear(); };

    function seleccionarOperacion(oper) {
        operandoA = parseFloat(display.value);
        operacion = oper;
        limpiar();
    }

    function limpiar() {
        display.value = '';
    }

    function resetear() {
        display.value = '';
        operandoA = 0;
        operandoB = 0;
        operacion = '';
    }

    function resolver() {
        operandoB = parseFloat(display.value);
        let resultado = 0;
        switch(operacion) {
            case '+':
                resultado = operandoA + operandoB;
                break;
            case '-':
                resultado = operandoA - operandoB;
                break;
            case '*':
                resultado = operandoA * operandoB;
                break;
            case '/':
                resultado = operandoA / operandoB;
                break;
        }
        resetear();
        display.value = resultado;
    }
}

