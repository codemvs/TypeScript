const MENSAJES:string[]=[
    "EL texto es muy corto",
    "El texto es muy largo"
];

export function obtenerError(numError: number): string {
    if(numError  > MENSAJES.length){
        return "El numero de error no existe";
    }
 return MENSAJES[numError];
}