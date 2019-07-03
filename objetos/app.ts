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



// EJERCICIOS

// Objetos
type Auto = {
    carroceria: string,
    modelo: string,
    antibalas: boolean,
    pasajeros:number,
    disparar?:()=>void
  }
  
  let batimovil: Auto = {
    carroceria: "Negra",
    modelo: "6x6",
    antibalas: true,
    pasajeros:4  
  };
  
  let bumblebee: Auto = {
    carroceria: "Amarillo con negro",
    modelo: "4x2",
    antibalas: true,
    pasajeros:4,
    disparar(){ // El metodo disparar es opcional
      console.log("Disparando");
    }
  };
  
  
  // Villanos debe de ser un arreglo de objetos personalizados
  type Villano = {
    nombre:string,
    edad: number | undefined,
    mutante:boolean
  }
  let villanos: Villano[] = [{
    nombre:"Lex Luthor",
    edad: 54,
    mutante:false
  },{
    nombre: "Erik Magnus Lehnsherr",
    edad: 49,
    mutante: true
  },{
    nombre: "James Logan",
    edad: undefined,
    mutante: true
  }];
  
  // Multiples tipos
  // cree dos tipos, uno para charles y otro para apocalipsis
  type TCharles={poder: string, estatura:number};
  type TApocalipsis = { lider: boolean,miembros: string[] };
  
  let charles: TCharles  = {
    poder:"psiquico",
    estatura: 1.78
  };
  
  let apocalipsis: TApocalipsis = {
    lider:true,
    miembros: ["Magneto","Tormenta","Psylocke","Angel"]
  }
  
  // Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
  let mystique: TCharles | TApocalipsis;
  
  mystique = charles;
  mystique = apocalipsis;
  