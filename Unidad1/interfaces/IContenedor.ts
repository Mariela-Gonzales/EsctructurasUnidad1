export interface IContenedor<T> {
    agregar(elemento: T): void;
    eliminar(): T | undefined;
    obtener(): T | undefined;
    estaVacia(): boolean;
    tamaño(): number;
}