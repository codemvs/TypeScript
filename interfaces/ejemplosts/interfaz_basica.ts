interface Xmen {
    nombre: string,
    poder: string
}

function enviarMision( xmen: Xmen ): void {
    console.log('Enviando mision a '+ xmen.nombre);
    
}

function enviarCuartel( xmen: Xmen ): void{
    console.log('Enviando al cuartel '+ xmen.nombre);
    
}

let wolverine: Xmen = {
    nombre: 'Wolverine',
    poder:'garras'
}

enviarMision(wolverine);
enviarCuartel(wolverine);