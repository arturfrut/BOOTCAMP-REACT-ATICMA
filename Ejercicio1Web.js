/*

- Realizar un script llamado Ejercicio1.js, que contenga una función llamada
CantidadMayusculas que reciba como parámetro un string y devuelva el número de letras
mayúsculas que contiene dicha cadena. El valor devuelto debe ser mostrado en pantalla.

*/

//CONTAR MAYUSCULAS

const inputSolution1 = document.getElementById("solution1")
const hSolution1 = document.getElementById("hSolution1")
const pSolution1 = document.getElementById("pSolution1")

CapitalCaseAmount = () =>{
    let capitalChars= ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','Ñ','O','P','Q','R','S','T','U','V','W','X','Y','Z',]
    let i = 0
    for (char of inputSolution1.value){
        for (capitalChar of capitalChars){
            console.log(char,capitalChar)
            console.log(char === capitalChar)
            if (char === capitalChar ){
                i += 1;
            }
        }
    }
    hSolution1.innerHTML='The solution is:'
    pSolution1.innerHTML=`The amount of Capital chars in the String is: ${i}`

}