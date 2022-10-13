/**
 * Create a web application that continuously asks for numbers until the user enters the number 
zero. 
- At the end it will indicate the average of the numbers entered 
- If at any time it is not a number what the user types, it is asked again. 
- If the user cancels any reading box, the program terminates and it is indicated that the user 
has canceled and the average will not be displayed.

Cree una aplicación web que solicite números continuamente hasta que el usuario ingrese el número
cero.
- Al final indicará el promedio de los números ingresados
- Si en algún momento no es un número lo que teclea el usuario, se vuelve a preguntar.
- Si el usuario cancela alguna casilla de lectura, el programa termina y se indica que el usuario
ha cancelado y no se mostrará el promedio.
  */


window.addEventListener("load", inicio, true);
//inicio
function inicio() {
  // para guardar entrada de números.
  const numArray = [];
  // C
  do {
    var numero = window.prompt("Introduce número");
    if (isNaN(numero)) {
      //No es un número.
      console.log("No es un número");
      console.log(numero);
    } else {
      //Cancelación no debe contarse, los demás números sí.
      if (numero != "") {
        console.log("Es un número.");
        numArray.push(numero);
      }

    }

    console.log(numArray);

  } while (numero != "0" && numero != null);
  // Ordenar el array de menor a mayor.
  numArray.sort();
  console.log(numArray);
  // Cuando se repite es al menos 2 veces.
  let veces = 1;
  if (numero === null) {
    document.write("Se ha terminado la secuencia a petición del usuario.");
      //Salto en caso de entrada null por cancelar ventan.
  } else {
    


    for (let i = 0; i < numArray.length; i++) {
      //Se cuenta a partir de una cuicidencia 
      if (numArray[i] == numArray[i + 1]) {
        document.write("El número: " + numArray[i] + " se repite ");
        veces++;
      
      } else {

        if (veces != 1) {
          document.write(veces + " veces de una secuencia de " + numArray.length + " números.</br>");
        } else {
          document.write("El número " + numArray[i] + " a entrado una vez de una secuencia de " + numArray.length + ".<br>");
        }

        veces = 1;
      }
    }
  }
}

