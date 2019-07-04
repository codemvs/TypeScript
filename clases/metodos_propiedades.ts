class Xmen2 {
    static nombre:string = 'Wolverine';
    constructor() {

    }

    static crearXmen() {
        console.log('Se creo usando un metodo estatico');
        
        return new Xmen2();
    }
}

let wolverine = new Xmen2();

//console.log( Xmen2.nombre );

let wolverine2 = Xmen2.crearXmen();
console.log(wolverine2);

