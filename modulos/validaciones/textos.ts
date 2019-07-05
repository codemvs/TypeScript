let mensajes:string[]=[
    "EL texto es muy corto",
    "El texto es muy largo"
];

function obtenerError(numError: number): string {
 return mensajes[numError];
}