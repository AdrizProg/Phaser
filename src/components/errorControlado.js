import { Bugfender } from "@bugfender/sdk";

export default function errorControlado() {
    try {
        if (b === 0) {
            throw new Error("División por cero no permitida");
        }
        return a / b;
    } catch (error) {
        console.error("Ocurrió un error:", error.message);
        Bugfender.error('Error de funcion try con catch: ' , error);
        return null;
    }
}