// OBjetos

type Heroe = {
    nombre:string,
    edad: number,
    poderes: string[],
    getNombre:()=>string 
}

let flash: Heroe = {
    nombre: 'Barry Allen',
    edad:24,
    poderes:['Puede correr myy rapido','Viaja por el tiempo'],
    getNombre(){
        return this.nombre;
    }
}

let superman: Heroe = {
    nombre: 'Clark Kent',
    edad:500,
    poderes:['Puede correr myy rapido','Super velocidad'],
    getNombre(){
        return this.nombre;
    }
}

// Multiples tipos permitidos
type Tipo = {
    nombre: string,
    edad: number
}

let loquesea: string | number | Tipo = 'Salvador';
loquesea = {
    nombre:'',
    edad:2
}

// Revisar tipo de variable
let cosa: any = 123;
if( typeof cosa === "number" ){
    console.log('Is number');
    
}