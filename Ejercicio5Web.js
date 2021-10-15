/*

- Dado los siguientes vectores:
int var1={1,2,4,6,7,8}
int var2={1,2,4,5,6,7,8}
a - Mostrar de manera ordenada la unión de los elementos de ambos vectores.
*/

//UNIR Y ORDENAR ARRAYS


const hSolution5 = document.getElementById("hSolution5")
const pSolution5 = document.getElementById("pSolution5")

let orderedNewArrayFunc = () => {

    let var1 = [1,2,4,6,7,8]
    let var2 = [1,2,4,5,6,7,8]
    
    newArray = [].concat(var1, var2)
    orderedNewArray = newArray.sort((a, b) => a - b)
    console.log(newArray)
    
    hSolution5.innerHTML='The solution is:'
    pSolution5.innerHTML=`The ordered new array is: ${orderedNewArray}`
}

