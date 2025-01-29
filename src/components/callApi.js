export let array = [];
let productos = "https://expressgen-b5n6.onrender.com/api/bicicletas/";

export default function consulta() {
    fetch(productos)
        .then(resultadoEnBruto => resultadoEnBruto.json())
        .then(resultadoJSON => {
            array.push(resultadoJSON);
        })
        .catch(error => {
            console.log(`Error en la promesa: ${error}`);
        });

        console.log(array);
}
