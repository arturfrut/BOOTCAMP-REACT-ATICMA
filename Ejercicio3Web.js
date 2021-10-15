/*

- Realizar un script llamado Ejercicio3.js, que cree un array vacío, y luego generar N
números al azar y guardarlos en un array, N es introducido por el usuario a través de un
prompt.

*/

//CREAR UN ARREGLO CON N CANTIDAD DE NUMEROS ALEATORIOS Y MOSTRAR EN PANTALLA

const hSolution3 = document.getElementById("hSolution3")
const pSolution3 = document.getElementById("pSolution3")



arrayGenerator = () => {

    let emptyArray = []
    elementsAmount = parseInt(prompt('Enter an amount of elements','1'))

    for (let i = 0; i < elementsAmount; i++) {
        emptyArray.push(Math.floor(Math.random() * ((100+1) - 1) + 1))
    }

    hSolution3.innerHTML = 'The solution is:'
    pSolution3.innerHTML = `The new array is : ${emptyArray}`


}