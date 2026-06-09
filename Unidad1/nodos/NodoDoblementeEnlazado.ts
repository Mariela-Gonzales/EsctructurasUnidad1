import { IComparable } from "../interfaces/IComparable";

export class NodoDoblementeEnlazado<T extends IComparable<T>>
    implements IComparable<NodoDoblementeEnlazado<T>> {

    public dato: T;
    public siguiente: NodoDoblementeEnlazado<T> | null;
    public anterior: NodoDoblementeEnlazado<T> | null;

    constructor(dato: T) {
        this.dato = dato;
        this.siguiente = null;
        this.anterior = null;
    }

    comparar(otro: NodoDoblementeEnlazado<T>): number {
        return this.dato.comparar(otro.dato);
    }

    toString(): string {
        return `Nodo(${this.dato})`;
    }
}