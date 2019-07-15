"use strict";
/**
 * Funciones genericas | por convención <T> una funcoin generica se declara por la variable T,
 * @param args
 */
function regresar(args) {
    return args;
}
console.log(regresar(123.12321).toFixed(2));
console.log(regresar('Cadena de texto').concat('sa'));
console.log(regresar(new Date()).getTime());
function funcionGenerica(arg) {
    return arg;
}
var deadpool = {
    nombre: 'deadpool',
    nombreReal: 'Wade wi w',
    poder: 'Regreneracion'
};
console.log(funcionGenerica(deadpool).nombre);
