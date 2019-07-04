/**
 * Validar que exista solo una instancia de la clase
 */
class Apocalipsis {
    static instancia: Apocalipsis;
    // Constructor solo puede llamarse dentro de la clase
    private constructor( public nombre: string){
        
    }
    static llamarApocalipsis() {
        if(!Apocalipsis.instancia){
            Apocalipsis.instancia = new Apocalipsis('Soy apocalipsis unico');
        }
        return Apocalipsis.instancia;
    }
}

let real = Apocalipsis.llamarApocalipsis();

console.log(real);
