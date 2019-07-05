"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var numeros_1 = __importDefault(require("./validaciones/numeros")); // modulo default
var texto = __importStar(require("./validaciones/textos"));
// import * from "./validaciones/textos"; // Importar todos los exports
console.log(numeros_1.default(10, 3));
console.log(texto.obtenerError(1));
console.log("sa");
