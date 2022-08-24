export class Empleado {
    id: number;
    nombre: string;
    apellido: string;
    area: string;

    constructor(id: number, nombre: string, apellido: string, area: string) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.area = area;
    }
}