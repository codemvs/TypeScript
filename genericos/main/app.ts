

/**
 * Funciones genericas | por convención <T> una funcoin generica se declara por la variable T,
 * @param args 
 */
function regresar<T> ( args:T ) {
    return args;
}

console.log( regresar( 123.12321 ).toFixed(2) );
console.log( regresar( 'Cadena de texto' ).concat('sa') );
console.log( regresar( new Date() ).getTime() );


function funcionGenerica<T>(arg:T):T {
    return arg;
}

type Heroe = {
    nombre: string,
    nombreReal: string
}

type Villano = {
    nombre: string,
    nombreReal:string
}

let deadpool = {
    nombre: 'deadpool',
    nombreReal: 'Wade wi w',
    poder: 'Regreneracion'
}

console.log(
    funcionGenerica <Heroe> ( deadpool ).nombre
);
