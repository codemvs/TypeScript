var Validaciones;
(function (Validaciones) {
    function validarFecha(fecha) {
        if (isNaN(fecha.valueOf())) {
            return false;
        }
        else {
            return true;
        }
    }
    Validaciones.validarFecha = validarFecha;
})(Validaciones || (Validaciones = {}));
/**
 * Namespaces: Es una agrupacion de funciones y propiedades que esta de manera global
 */
var Validaciones;
(function (Validaciones) {
    function validarTexto(texto) {
        return texto.length > 3;
    }
    Validaciones.validarTexto = validarTexto;
})(Validaciones || (Validaciones = {}));
/// <reference path="../validaciones/fecha.ts"/>
/// <reference path="../validaciones/textos.ts"/>
if (Validaciones.validarTexto('Barry Allen')) {
    console.log(' Text valido ');
}
else {
    console.log('Texto no valido');
}
