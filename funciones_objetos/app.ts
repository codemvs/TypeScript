// parametros obligatorios 
function nombreCompleto( nombre: string, apellido: string ): string {
    return `${nombre} ${apellido}`;
}
let nombre = nombreCompleto("clark", "kent");
console.log(nombre);

/**
 * Parametros opcionales
 * */ 
function nombreCompleto2(nombre: string, app?:string): string{
    if(app){
        return `${nombre} ${app}`;
    }
    return nombre;
}

let nomCompleto = nombreCompleto2('Chava');

/**
 * Parametrso por defecto
 */
function parametroPorDefecto (nom: string, app: string, capitalizado: boolean = false): string{
    if( capitalizado ){
        return `${ capitalizar(nom) } ${ capitalizar(app) }`;    
    }   
    return `${nom} ${app}`;
}

function capitalizar(palabra: string): string {
    return `${ palabra.charAt(0).toUpperCase() }${ palabra.substring(1).toLowerCase() }`;
}
console.log( parametroPorDefecto('clark','kent',true) );

/**
 * PARAMETROS REST
 */
function parametrosRest( nombre:string, ...losDemasParametros: string[] ):string{
    return `${nombre} ${ losDemasParametros.join(' ') }`;
}
let param1: string = parametrosRest('Paramentro1');
let params: string = parametrosRest('Paramentro1', 'Parametro2', 'Parametro 3');
console.log(param1);
console.log(params);

/**
 * TIPO FUNCION */
let miFuncion: () => string;

function salvar():string {
    return 'sa';
}

miFuncion = salvar;
