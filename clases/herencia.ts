class Avengers {
    
    constructor(
        public nombre: string,
        private nombreReal: string
    ) {
        console.log('Constructor Avenger llamado');
        
    }

    protected getNombre(): string{
        console.log('get nombre avenger (protegido)');
        
        return this.nombreReal;
    }

}

class Xmen extends Avengers {
    constructor( nombre:string, nombreReal:string ) {
        console.log('Constructor Xmen llamdo');
        
        super(nombre, nombreReal);

    }

    public getNombre(): string{
        console.log('get nombre xmen (publico)');
        
        return super.getNombre();
    }
}

let ciclope: Xmen = new Xmen( 'ciclope', 'codemvs' );
console.log("Nombre: ",ciclope.getNombre());

console.log( ciclope );
