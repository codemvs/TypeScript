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
var batimovil = {
    carroceria: "Negra",
    modelo: "6x6",
    antibalas: true,
    pasajeros: 4
};
var bumblebee = {
    carroceria: "Amarillo con negro",
    modelo: "4x2",
    antibalas: true,
    pasajeros: 4,
    disparar: function () {
        console.log("Disparando");
    }
};
var villanos = [{
        nombre: "Lex Luthor",
        edad: 54,
        mutante: false
    }, {
        nombre: "Erik Magnus Lehnsherr",
        edad: 49,
        mutante: true
    }, {
        nombre: "James Logan",
        edad: undefined,
        mutante: true
    }];
var charles = {
    poder: "psiquico",
    estatura: 1.78
};
var apocalipsis = {
    lider: true,
    miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"]
};
// Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
var mystique;
mystique = charles;
mystique = apocalipsis;
