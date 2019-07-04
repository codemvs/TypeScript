"use strict";
function enviarMision(xmen) {
    console.log('Enviando mision a ' + xmen.nombre);
}
function enviarCuartel(xmen) {
    console.log('Enviando al cuartel ' + xmen.nombre);
}
var wolverine = {
    nombre: 'Wolverine',
    poder: 'garras'
};
enviarMision(wolverine);
enviarCuartel(wolverine);
