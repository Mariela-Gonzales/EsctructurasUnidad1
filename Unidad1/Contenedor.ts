import { IContenedor } from "./interfaces/IContenedor";

export class Contenedor<T> implements IContenedor<T> {

    private elementos: T[] = [];

    agregar(elemento: T): void {
        this.elementos.push(elemento);
    }

    eliminar(): T | undefined {
        return this.elementos.pop();
    }

    obtener(): T | undefined {
        return this.elementos[this.elementos.length - 1];
    }

    estaVacia(): boolean {
        return this.elementos.length === 0;
    }

    tamaño(): number {
        return this.elementos.length;
    }

    toString(): string {
        return `[${this.elementos.join(", ")}]`;
    }
}