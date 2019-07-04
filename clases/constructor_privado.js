"use strict";
/**
 * Validar que exista solo una instancia de la clase
 */
var Apocalipsis = /** @class */ (function () {
    // Constructor solo puede llamarse dentro de la clase
    function Apocalipsis(nombre) {
        this.nombre = nombre;
    }
    Apocalipsis.llamarApocalipsis = function () {
        if (!Apocalipsis.instancia) {
            Apocalipsis.instancia = new Apocalipsis('Soy apocalipsis unico');
        }
        return Apocalipsis.instancia;
    };
    return Apocalipsis;
}());
var real = Apocalipsis.llamarApocalipsis();
console.log(real);
