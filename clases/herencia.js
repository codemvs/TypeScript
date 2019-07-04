"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Avengers = /** @class */ (function () {
    function Avengers(nombre, nombreReal) {
        this.nombre = nombre;
        this.nombreReal = nombreReal;
        console.log('Constructor Avenger llamado');
    }
    Avengers.prototype.getNombre = function () {
        console.log('get nombre avenger (protegido)');
        return this.nombreReal;
    };
    return Avengers;
}());
var Xmen = /** @class */ (function (_super) {
    __extends(Xmen, _super);
    function Xmen(nombre, nombreReal) {
        var _this = this;
        console.log('Constructor Xmen llamdo');
        _this = _super.call(this, nombre, nombreReal) || this;
        return _this;
    }
    Xmen.prototype.getNombre = function () {
        console.log('get nombre xmen (publico)');
        return _super.prototype.getNombre.call(this);
    };
    return Xmen;
}(Avengers));
var ciclope = new Xmen('ciclope', 'codemvs');
console.log("Nombre: ", ciclope.getNombre());
console.log(ciclope);
