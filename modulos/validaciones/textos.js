"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MENSAJES = [
    "EL texto es muy corto",
    "El texto es muy largo"
];
function obtenerError(numError) {
    if (numError > MENSAJES.length) {
        return "El numero de error no existe";
    }
    return MENSAJES[numError];
}
exports.obtenerError = obtenerError;
