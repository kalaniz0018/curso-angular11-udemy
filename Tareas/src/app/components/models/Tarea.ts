export class Tarea {
    nombre: string | undefined;
    estado: boolean;


    constructor(nombre: string, estado: boolean) {
        this.nombre = nombre;
        this.estado = estado;
    }

}