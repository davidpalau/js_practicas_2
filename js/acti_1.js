/**
 * ACTIVITY 1 – Caesar style encryption 
− Caesar  encryption  consists  of  taking  each letter  of  a message  and moving  it  in  the  alphabet 
the number that gives a key. For example, if key=2 , the letter A scrolls 2, it will become C. 
− Taking into account that Caesar encryption works with a full alphabet and by displacement (in 
the example above the letter Z is usually converted to B), create a page that asks the user for 
a text and a key and writes the same text but moving the characters in the Unicode table the 
number that indicates the key.
 */



window.addEventListener("load",inicio,true);

function inicio(){

    document.write("<h1>Cifrado César:</h1>");
   let frase = window.prompt("Introduzca texto para encriptar: ");
   //Para estar seguro que todas las letras son minuscula.
    frase = frase.toLowerCase();
    console.log(frase);
    //Posiciones a la derecha
    let numCesar = window.prompt("Introduzca una cifra: ");
    numCesar = numCesar % 27;
    let fraseCesar = "";
    //abecedario español
   let letras = "abcdefghijklmnñopqrstuvwxyz";
    
   for (let i=0; i<frase.length; ++i){
    //Si la letra está en el array de letras (es un símbolo, un espacio...)
    if (letras.indexOf(letras[i])!=-1){
        //movimiento de posición % 27 en caso de dar la vuelta.
        let posicion=((letras.indexOf(frase[i])+numCesar) % 27);// En caso de dar la vuelta.
        fraseCesar+=letras[posicion];

    }else{
        fraseCesar+= frase[i];
    }


   }
   document.write("Resultado "+ fraseCesar);
}