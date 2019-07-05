"use strict";
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
