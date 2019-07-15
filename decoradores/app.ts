// Decoradores de clases

function consola( constructor: Function ) {
    console.log(constructor);    
}

function imprimirConsola( imprimir: boolean ): Function {
    if( imprimir ) {
        return consola;
    }
    return ()=>{};
}



@imprimirConsola(true)
@planVillano
class Villano {

    public poder: string = '';

    constructor( public nombre: string ) {

    }
    @editable(true)
    plan(){
        console.log('El plan de '+this.nombre+' es dominar el mundo');
        
    }
}

function editable ( esEditable: boolean ): Function {
    return function( target: any, nombrePropiedad:string) {
        let descriptor: PropertyDescriptor = {
            writable: esEditable
        }
        return description;
    }
}

function editablePropiedad ( esEditable: boolean ): Function {
    return function( target: any, nombrePropiedad:string, descriptor:PropertyDescriptor) {
        if( !esEditable ) {
            console.log('No puedo cambiar de opinion');
            
        }
        descriptor.writable = esEditable;
    }
}


function planVillano ( constructor: Function ) {
    constructor.prototype.imprimirPlan = function(){
        
        console.log('El plan de '+ this.nombre + 'Es dominar el mundo');
        
    }
}

let lex = new Villano('Lex');

lex.plan = function(){
    console.log('Comer sopa');
    
}

lex.plan();
