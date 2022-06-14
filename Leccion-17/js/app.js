function sumar(){
    const form = document.getElementById('formulario');
    let operandoA = form['operandoA'];
    let operandoB = form['operandoB'];
    let resultado = parseInt(operandoA.value) + parseInt(operandoB.value);
    if(isNaN(resultado)) resultado = 'La operación no incluye números';
    document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`;
}

function restar(){
    const form = document.getElementById('formulario');
    let operandoA = form['operandoA'];
    let operandoB = form['operandoB'];
    let resultado = parseInt(operandoA.value) - parseInt(operandoB.value);
    if(isNaN(resultado)) resultado = 'La operación no incluye números';
    document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`;
}
function multiplicar(){
    const form = document.getElementById('formulario');
    let operandoA = form['operandoA'];
    let operandoB = form['operandoB'];
    let resultado = parseInt(operandoA.value) * parseInt(operandoB.value);
    if(isNaN(resultado)) resultado = 'La operación no incluye números';
    document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`;
}
function dividir(){
    const form = document.getElementById('formulario');
    let operandoA = form['operandoA'];
    let operandoB = form['operandoB'];
    let resultado = parseInt(operandoA.value) / parseInt(operandoB.value);
    if(isNaN(resultado)) resultado = 'La operación no incluye números';
    document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`;
}