/*
ACTIVITY 6 – Display asterisks for an array 
- Generate an array with 20 random numbers from 1 to 50. 
- Run through the array showing as many asterisks as indicated in the number of each element. 
- Example of result (with 9 elements) with the array:
*/
window.addEventListener("load", inicio, true);

function inicio() {


    numeros = new Array(20);
    console.log(numeros);
    for (let i = 0; i < numeros.length; i++) {
        numeros[i] = parseInt(Math.random() * (51 - 1) + 1);
    }
    for (let i = 0; i < numeros.length; i++) {
        document.write("<p>");
        let num = numeros[i];
        for (let j = 0; j < num; j++) {
            document.write("*");
        }
        document.write("</p>");

    }
    console.log(numeros);

}