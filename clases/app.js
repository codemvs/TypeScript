"use strict";
var Avenger = /** @class */ (function () {
    function Avenger(nombre, equipo, nombreReal) {
        this.nombre = "Default"; // acceder a cuaquier logar
        this.equipo = ""; // Solo se puede cambiar el valor dentro de la clase o su herencia
        this.nombreReal = ""; // Solo pueden ser modifiadas los valores dentro de esta clase
        this.puedePelear = true;
        this.peleasGanadas = 0;
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
    }
    return Avenger;
}());
var antman = new Avenger('Antman', 'cap', 'Scott Lang');
antman.nombre = 'Clark kent';
