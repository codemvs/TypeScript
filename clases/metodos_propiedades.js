"use strict";
var Xmen2 = /** @class */ (function () {
    function Xmen2() {
    }
    Xmen2.crearXmen = function () {
        console.log('Se creo usando un metodo estatico');
        return new Xmen2();
    };
    Xmen2.nombre = 'Wolverine';
    return Xmen2;
}());
var wolverine = new Xmen2();
//console.log( Xmen2.nombre );
var wolverine2 = Xmen2.crearXmen();
console.log(wolverine2);
