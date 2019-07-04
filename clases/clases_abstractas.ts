/**
 * No sre puede crear instancias con una clase de tipo abstract,
 * puede ser utilizado para un molde que puede ser usado al heredar de una clase
 */
abstract class Mutantes {
    constructor(public nombre:string, public nombreReal:string) {
        
    }
} 

class XmenAbs extends Mutantes {

}
