/*
ACTIVITY 2 – Polyalphabetic style encryption 
− It is about improving the previous encryption in which each letter always corresponds to the 
same encrypted letter (which facilitates its decryption) 
− That is why we will make a similar web application, but now as a key we will ask for a text to 
encrypt that must contain numbers. The key will be encrypted cyclically
*/
window.addEventListener("load", inicio, true);

function inicio() {

    document.write("<h1>Cifrado César:</h1>");
    let frase = window.prompt("Introduzca texto para encriptar: ");
    //Para estar seguro que todas las letras son minuscula.
    frase = frase.toLowerCase();
    console.log(frase);
    //Posiciones a la derecha
    let numCesar = window.prompt("Introduzca una cifra: ");
    let fraseCesar = "";
    //abecedario español
    let letras = "abcdefghijklmnñopqrstuvwxyz";
    var conteo = 0;
    for (let i = 0; i < frase.length; ++i) {
        numCesar_1 = numCesar.charAt(conteo);
        if (conteo == numCesar.length - 1) {
            conteo = 0;
        } else {
            conteo++;
        }
        //Si la letra está en el array de letras (es un símbolo, un espacio...)
        if (letras.indexOf(frase[i]) != -1) {
            //movimiento de posición % 27 en caso de dar la vuelta.
            let posicion = ((letras.indexOf(frase[i]) + numCesar_1) % 27);// En caso de dar la vuelta.
            fraseCesar += letras[posicion];

        } else {
            fraseCesar += frase[i];
            console.log("Llega al else if");
        }


    }
    // Replace lo utilizo como parche, pero funciona.replace("undefined", " ")
    document.write("Resultado " + fraseCesar);
}