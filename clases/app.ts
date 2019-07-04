class Avenger {
    public nombre: string = "Default"; // acceder a cuaquier lugar
    protected equipo: string = ""; // Solo se puede cambiar el valor dentro de la clase o su herencia
    private nombreReal: string = "";   // Solo pueden ser modifiadas los valores dentro de esta clase
    private puedePelear: boolean = true;
    private peleasGanadas: number= 0;    

    constructor( nombre: string,
        equipo: string,
        nombreReal: string)
    {
        this.nombre = nombre; 
        this.equipo= equipo;
        this.nombreReal = nombreReal;
    }
    
    public bio():void{
        let mensaje = `${ this.nombre } ${ this.nombreReal } ${this.equipo}`;
        console.log( mensaje );        
    }

    
    private cambiarEquipo(nuevoEquipo: string): boolean {
        return nuevoEquipo === this.equipo;        
    }

    public cambiaEquipoPublico( nuevoEquipo: string ) : boolean{
        return this.cambiarEquipo( nuevoEquipo );
    }

    
}

let antman: Avenger = new Avenger('Antman','cap','Scott Lang');

antman.nombre = 'Clark kent';
antman.bio();
console.log(antman.cambiaEquipoPublico("CAP"));

