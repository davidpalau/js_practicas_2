/**
 * 
 * ACTIVITY 7 – Palindromes 
- Create a web application that reads a text and indicates whether it is a palindrome. 
- A palindrome is a text that reads just as well from right to left as it does from left to right. 
- Examples of palindromes: 
o A Santa dog lived as a devil god at NASA 
o No lemon, no melon! 
o UFO tofu 
o Dennis sinned 
− Keep in mind that in order for palindromes to be considered well, punctuation marks (spaces, 
questions, commas, periods, etc.) are also ignored, tildes and umlauts( ̈) are also ignored (the 
character á is considered the same as the character a) and it is not case sensitive.
 * 
 */
window.addEventListener("load", inicio, true);

function inicio() {

    let str_1 = window.prompt("Introduce un palindromo: ");

    str_1 = str_1.toLocaleLowerCase();
    console.log(str_1);
    let str_2 = "";
    let str_3 = "";
    let letras = "abcdefghijklmnñopqrstuvwxyz";
    let palindromo = true;
    console.log(str_1);
    //Quitar acentos de las vocales
    for (let i = 0; i < str_1.length; i++) {
        if ("àá".indexOf(str_1[i]) != -1) {
            str_2 += "a";
        } else if ("éè".indexOf(str_1[i]) != -1) {
            str_2 += "e";
        } else if ("íì".indexOf(str_1[i]) != -1) {
            str_2 += "i";
        } else if (("óò".indexOf(str_1[i]) != -1)) {
            str_2 += "o";
        } else if ("úúü".indexOf(str_1[i]) != -1) {
            str_2 += "u";
        } else if (letras.indexOf(str_1[i]) != -1) {
            str_2 += str_1[i];
        }


    }
    // realiza una copia de string pero a la inversa.
    for (let i = str_2.length - 1; i >= 0; i--) {
        str_3 += str_2[i];
    }
    //Compara copia inversa con original 
    console.log(str_2);
    for (let i = 0; i < str_2.length; i++) {
        if (str_2[i] != str_3[i]) {
            palindromo = false;
        }
    }
    //respuesta 
    if (palindromo) {
        console.log("Sí es un palindromo");
    } else {
        console.log("No es un palindromo");
    }
}