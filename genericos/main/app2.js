"use strict";
var herores = ['Flash', 'Batman', 'Superman'];
herores.push("123");
// Clases genericas
// Declarar una clase que sea capas de obtener cadenas o numeros
var Cuadrado = /** @class */ (function () {
    function Cuadrado(base, altura) {
        this.base = base;
        this.altura = altura;
    }
    Cuadrado.prototype.area = function () {
        return +this.base * +this.altura;
    };
    return Cuadrado;
}());
var cuadrado = new Cuadrado(10, "10");
console.log(cuadrado.area());
