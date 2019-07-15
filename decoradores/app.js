"use strict";
// Decoradores de clases
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function consola(constructor) {
    console.log(constructor);
}
function imprimirConsola(imprimir) {
    if (imprimir) {
        return consola;
    }
    return function () { };
}
var Villano = /** @class */ (function () {
    function Villano(nombre) {
        this.nombre = nombre;
    }
    Villano.prototype.plan = function () {
        console.log('El plan de ' + this.nombre + ' es dominar el mundo');
    };
    __decorate([
        editable(true)
    ], Villano.prototype, "plan", null);
    Villano = __decorate([
        imprimirConsola(true),
        planVillano
    ], Villano);
    return Villano;
}());
function editable(esEditable) {
    return function (target, nombrePropiedad, descriptor) {
        descriptor.writable = esEditable;
    };
}
function planVillano(constructor) {
    constructor.prototype.imprimirPlan = function () {
        console.log('El plan de ' + this.nombre + 'Es dominar el mundo');
    };
}
var lex = new Villano('Lex');
lex.plan = function () {
    console.log('Comer sopa');
};
lex.plan();
