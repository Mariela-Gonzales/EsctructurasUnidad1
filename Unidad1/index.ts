import { Contenedor } from "./Contenedor";
import { IComparable } from "./interfaces/IComparable";
import { NodoDoblementeEnlazado } from "./nodos/NodoDoblementeEnlazado";

const contenedor = new Contenedor<number>();

contenedor.agregar(100);
contenedor.agregar(20);
contenedor.agregar(30);

console.log("Contenido:", contenedor.toString());
console.log("Tamaño:", contenedor.tamaño());
console.log("Último:", contenedor.obtener());

contenedor.eliminar();

console.log("Después de eliminar:");
console.log("Contenido:", contenedor.toString());
console.log("Tamaño:", contenedor.tamaño());



class Numero implements IComparable<Numero> {
    constructor(public valor: number) {}

    comparar(otro: Numero): number {
        return this.valor - otro.valor;
    }

    toString(): string {
        return this.valor.toString();
    }
}

const nodo1 = new NodoDoblementeEnlazado(new Numero(100));
const nodo2 = new NodoDoblementeEnlazado(new Numero(20));

console.log("Comparación de nodos:", nodo1.comparar(nodo2));
console.log(nodo1.toString());