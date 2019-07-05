/**
 * Namespaces: Es una agrupacion de funciones y propiedades que esta de manera global
 */

namespace Validaciones {

    export function validarTexto(texto:string): boolean {
        return texto.length > 3;
    }   

}