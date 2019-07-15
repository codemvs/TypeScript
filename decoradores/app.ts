// Decoradores de clases

function consola( constructor: Function ) {
    console.log(constructor);    
}

@imprimirConsola(true)
class Villano {
    constructor( public nombre: string ) {

    }
}


function imprimirConsola( imprimir: boolean ): Function {
    if( imprimir ) {
        return consola;
    }
    return ()=>{};
}