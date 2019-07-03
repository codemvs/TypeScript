"use strict";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLGtCQUFrQjtBQUNsQixrQ0FBa0M7QUFDbEMseUJBQXlCO0FBQ3pCLGdDQUFnQztBQUVoQyxxQkFBcUI7QUFDckIsdUNBQXVDO0FBRXZDLFNBQVM7QUFDVCwwQkFBMEI7QUFFMUIsSUFBSTtBQUVKLGlDQUFpQztBQUVqQyw4QkFBOEI7QUFDOUIsbUJBQW1CO0FBQ25CLElBQUk7QUFFSixtQkFBbUI7QUFDbkIsMEJBQTBCO0FBQzFCLHdCQUF3QjtBQUN4QixpQkFBaUI7QUFFakIsOEJBQThCO0FBQzlCLCtCQUErQjtBQUUvQixTQUFTO0FBQ1QsOEJBQThCO0FBRTlCLElBQUk7QUFHSixnQkFBZ0I7QUFFaEIsaUNBQWlDO0FBQ2pDLHdDQUF3QztBQUN4Qyw0Q0FBNEM7QUFFNUMsdUJBQXVCO0FBQ3ZCLDhCQUE4QjtBQUM5Qiw0QkFBNEI7QUFHNUIsWUFBWTtBQUNaLGtDQUFrQztBQUNsQyxjQUFjO0FBQ2QsZ0JBQWdCO0FBRWhCLDRCQUE0QjtBQUM1QixtQ0FBbUM7QUFFbkMsb0JBQW9CO0FBQ3BCLG9DQUFvQztBQUVwQyxtQkFBbUI7QUFDbkIseUJBQXlCO0FBQ3pCLHVCQUF1QjtBQUV2QixjQUFjO0FBRWQsMkNBQTJDO0FBQzNDLHFFQUFxRTtBQUNyRSxzQ0FBc0M7QUFFdEMsZUFBZTtBQUNmLHVFQUF1RTtBQUV2RSxzQkFBc0I7QUFFdEIsaUJBQWlCO0FBQ2pCLGVBQWU7QUFDZixpQkFBaUI7QUFDakIsZUFBZTtBQUNmLElBQUk7QUFFSixxQ0FBcUM7QUFDckMsc0JBQXNCO0FBRXRCLGlCQUFpQjtBQUNqQixpQ0FBaUM7QUFDakMsMENBQTBDO0FBQzFDLElBQUk7QUFFSixpQ0FBaUM7QUFDakMsd0JBQXdCO0FBRXhCLGVBQWU7QUFDZixvQ0FBb0M7QUFDcEMsMkNBQTJDO0FBQzNDLGlDQUFpQztBQUNqQyxJQUFJO0FBQ0osb0RBQW9EO0FBR3BELHFDQUFxQztBQUNyQyw4Q0FBOEM7QUFFOUMsNkRBQTZEO0FBRTdELDRCQUE0QiJ9