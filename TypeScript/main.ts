//==== BOOLEANS ==
// let esSuperman: boolean = true;
// let esBatman: boolean;
// let esAquaman: boolean =true;

// if( esSuperman ) {
//     console.log('Estamos Salvador');
    
// }else{
//     console.log('Ops');
    
// }

// esSuperman = convertirClark();

// function convertirClark() {
//     return true;
// }

// === ENTEROS === 
// let avengers: number=5;
// let villanos: number;
// let otros = 2;

// if( avengers > villanos ) {
//     console.log('Salvados');
    
// }else{
//     console.log('Muertos');
    
// }


// == STRINGS ==

// let batman: string = "batman";
// let linternaVerde = "linterna verde";
// let volcanNegro: string = 'Volcan Negro';

// console.log(batman);
// console.log(linternaVerde);
// console.log(volcanNegro);


// == ANY ==
// let vengador: any = 'Superman';
// let existe;
// let derrotas;

// vengador = "Dr. Strange";
// console.log(vengador.charAt(0));

// vengador=150.002;
// console.log(vengador.toFixed(2));

// vengador = true;
// console.log(vengador);
// console.log(existe);

//=== Arra ===

// let arreglo: number[] = [1,2,3,4,5,6,6];
// let villanos: string[] = ['Omega roko', 'Duende verde','Dormanu'];
// console.log(villanos[0].charAt(0));

// == TUPLAS ==
// let heroes: [ string, number, boolean ] = ['Dr. Strage', 100, true];

// == ENUMERACIONES ==

// enum Volumen {
//     min = 1,
//     medio = 5,
//     max = 10
// }

// let audio: number = Volumen.medio;
// console.log(audio);

// === VACIOS ===
// function llamar_batman():void{
//     console.log('Show Batman');        
// }

// let mensaje = llamar_batman();
// console.log(mensaje);

// == NEVER == 
/** Accion que nuca puede suceder */
// function error( mensaje: string ):never{
//     throw new Error(mensaje); 
// }
// error("Error critico ... linea 91 alcanzada...");


// == ASERCIONES DE TIPO (CASTING) ==
// let cualquierValor: any = "Cualquier cosa";

// let largoString: number = (<string>cualquierValor).length;

// console.log(largoString);

// === NULL y UNDEFINED ===


