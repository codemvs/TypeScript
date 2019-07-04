"use strict";
var Avenger2 = /** @class */ (function () {
    function Avenger2(nombre) {
        this._nombre = nombre;
    }
    Object.defineProperty(Avenger2.prototype, "nombre", {
        get: function () {
            if (this._nombre) {
                return this._nombre;
            }
            return 'No tiene un nombre avenger';
        },
        set: function (nombre) {
            console.log('Se llamo set nombre');
            if (nombre.length <= 3) {
                throw new Error('Auxilio!! Esto no debe pasar');
            }
            this._nombre = nombre;
        },
        enumerable: true,
        configurable: true
    });
    return Avenger2;
}());
var spider = new Avenger2('Wolverine');
console.log(spider.nombre);
console.log('Set nombre');
spider.nombre = 'Lee22';
console.log(spider.nombre);
