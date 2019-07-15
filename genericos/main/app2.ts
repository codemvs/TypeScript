let herores: Array<string> = ['Flash','Batman','Superman'];

herores.push("123");

// Clases genericas
// Declarar una clase que sea capas de obtener cadenas o numeros
class Cuadrado<T extends number | string> {
    base:T;
    altura:T;
    area():number{
        return +this.base * +this.altura;
    }
    constructor( base: T, altura: T ){
        this.base= base;
        this.altura = altura;
    }
}
let cuadrado = new Cuadrado<string | number>(10,"10");


console.log(cuadrado.area());
