"use strict";
// OBjetos
var flash = {
    nombre: 'Barry Allen',
    edad: 24,
    poderes: ['Puede correr myy rapido', 'Viaja por el tiempo'],
    getNombre: function () {
        return this.nombre;
    }
};
var superman = {
    nombre: 'Clark Kent',
    edad: 500,
    poderes: ['Puede correr myy rapido', 'Super velocidad'],
    getNombre: function () {
        return this.nombre;
    }
};
var loquesea = 'Salvador';
loquesea = {
    nombre: '',
    edad: 2
};
// Revisar tipo de variable
var cosa = 123;
if (typeof cosa === "number") {
    console.log('Is number');
}
