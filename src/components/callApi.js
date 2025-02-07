import { Bugfender } from '@bugfender/sdk';
export let array = [];
let productos = "https://expressgen-b5n6.onrender.com/api/bicicletas/";

export default function consulta() {
    fetch(productos)
        .then(resultadoEnBruto => resultadoEnBruto.json())
        .then(resultadoJSON => {
            array.push(resultadoJSON);
            console.log(array);
            console.log('Array de Api cargado: ');
            Bugfender.log(array);
        })
        .catch(error => {
            console.log(`Error en la promesa: ${error}`);
            Bugfender.error('error: ' , error);
        });
}
