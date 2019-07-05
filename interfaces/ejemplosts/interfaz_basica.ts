interface Xmen {
    nombre: string,
    poder?: string,
    regenerar( nombreReal: string ): void
}

function enviarMision( xmen: Xmen ): void {
    console.log('Enviando mision a '+ xmen.nombre);
    xmen.regenerar('Logan');    
}

function enviarCuartel( xmen: Xmen ): void{
    console.log('Enviando al cuartel '+ xmen.nombre);
    xmen.regenerar('Logan2');    
}

let wolverine: Xmen = {
    nombre: 'Wolverine',    
    regenerar(x:string){
        console.log( 'Se ha regenerado '+ x );        
    }
}

enviarMision(wolverine);
enviarCuartel(wolverine);

// Implements

class ClasePadre implements Xmen {    
    regenerar(nombreReal: string): void {
        console.log(nombreReal);        
    }
    constructor( public nombre: string ) { }
}

let clase = new ClasePadre('nombre');