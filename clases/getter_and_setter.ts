class Avenger2 {
    private _nombre: string;
    constructor( nombre: string ) {
        this._nombre = nombre;
    }
    get nombre(): string {
        if(this._nombre) {
            return this._nombre;
        }
        return 'No tiene un nombre avenger'
        
    }

    set nombre( nombre: string ){
        console.log('Se llamo set nombre');
        if( nombre.length <= 3) {
            throw new Error('Auxilio!! Esto no debe pasar');
        }
        this._nombre = nombre;
    }
}

let spider: Avenger2 = new Avenger2('Wolverine');

console.log(spider.nombre);

console.log('Set nombre');
spider.nombre = 'Lee22';
console.log(spider.nombre);
