let array = [];
let productos = "https://expressgen-b5n6.onrender.com/api/bicicletas";

async function consulta() {
    try {
        const resultadoEnBruto = await fetch(productos);
        const resultadoJSON = await resultadoEnBruto.json();
        array.push(resultadoJSON);

    } catch (error) {
        console.log(`Error en la promesa: ${error}`);
    }
}

window.addEventListener('load', async () => {
    await consulta();
    console.log(array);
});