/*

- Realizar un script llamado Ejercicio4.js, que dado un array, ordene sus valores de menor
a mayor y los muestre por pantalla.

*/

//ORDENAR ARRAY

const inputSolution4 = document.getElementById("solution4")
const hSolution4 = document.getElementById("hSolution4")
const pSolution4 = document.getElementById("pSolution4")

orderNumber = () =>{

    let arraySplit = (inputSolution4.value).split(' ')

    orderedArray = arraySplit.sort((a, b) => a - b)

    hSolution4.innerHTML='The solution is:'
    pSolution4.innerHTML=`The ordered array is: ${orderedArray}`
}


