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
/**
 * No sre puede crear instancias con una clase de tipo abstract,
 * puede ser utilizado para un molde que puede ser usado al heredar de una clase
 */
var Mutantes = /** @class */ (function () {
    function Mutantes(nombre, nombreReal) {
        this.nombre = nombre;
        this.nombreReal = nombreReal;
    }
    return Mutantes;
}());
var XmenAbs = /** @class */ (function (_super) {
    __extends(XmenAbs, _super);
    function XmenAbs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return XmenAbs;
}(Mutantes));
