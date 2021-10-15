/*

- Realizar un script llamado Ejercicio2.js, que dado el array [1,2,3,4,5,7] realice una copia
del array sumándole 1 a cada uno de los valores

*/

//COPIAR Y SUMAR 1 A CADA ELEMENTO DEL ARRAY
myArray = [1,2,3,4,5,7]

const hSolution2 = document.getElementById("hSolution2")
const pSolution2 = document.getElementById("pSolution2")

addOneToArray = () => {

    newArray = myArray.map((num)=>{
        return num+1
    })
    hSolution2.innerHTML = 'The solution is :'
    pSolution2.innerHTML = `The new array is : ${newArray}`
}




