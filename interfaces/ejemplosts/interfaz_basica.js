"use strict";
function enviarMision(xmen) {
    console.log('Enviando mision a ' + xmen.nombre);
    xmen.regenerar('Logan');
}
function enviarCuartel(xmen) {
    console.log('Enviando al cuartel ' + xmen.nombre);
    xmen.regenerar('Logan2');
}
var wolverine = {
    nombre: 'Wolverine',
    regenerar: function (x) {
        console.log('Se ha regenerado ' + x);
    }
};
enviarMision(wolverine);
enviarCuartel(wolverine);
// Implements
var ClasePadre = /** @class */ (function () {
    function ClasePadre(nombre) {
        this.nombre = nombre;
    }
    ClasePadre.prototype.regenerar = function (nombreReal) {
        console.log(nombreReal);
    };
    return ClasePadre;
}());
var clase = new ClasePadre('nombre');
