class Avenger {
    public nombre: string = "Default"; // acceder a cuaquier logar
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
}

let antman: Avenger = new Avenger('Antman','cap','Scott Lang');

antman.nombre = 'Clark kent';

