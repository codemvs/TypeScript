"use strict";
// parametros obligatorios 
function nombreCompleto(nombre, apellido) {
    return nombre + " " + apellido;
}
var nombre = nombreCompleto("clark", "kent");
console.log(nombre);
/**
 * Parametros opcionales
 * */
function nombreCompleto2(nombre, app) {
    if (app) {
        return nombre + " " + app;
    }
    return nombre;
}
var nomCompleto = nombreCompleto2('Chava');
/**
 * Parametrso por defecto
 */
function parametroPorDefecto(nom, app, capitalizado) {
    if (capitalizado === void 0) { capitalizado = false; }
    if (capitalizado) {
        return capitalizar(nom) + " " + capitalizar(app);
    }
    return nom + " " + app;
}
function capitalizar(palabra) {
    return "" + palabra.charAt(0).toUpperCase() + palabra.substring(1).toLowerCase();
}
console.log(parametroPorDefecto('clark', 'kent', true));
/**
 * PARAMETROS REST
 */
function parametrosRest(nombre) {
    var losDemasParametros = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        losDemasParametros[_i - 1] = arguments[_i];
    }
    return nombre + " " + losDemasParametros.join(' ');
}
var param1 = parametrosRest('Paramentro1');
var params = parametrosRest('Paramentro1', 'Parametro2', 'Parametro 3');
console.log(param1);
console.log(params);
/**
 * TIPO FUNCION */
var miFuncion;
function salvar() {
    return 'sa';
}
miFuncion = salvar;
