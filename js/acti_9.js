/**
 * ACTIVITY 9 – Group students 
- Create  a  web  application  that  reads  the  names  of  the  so-called  students  (anything  entered 
will be valid) 
- The introduction of students ends when we indicate the word end. 
- Names  cannot  be  repeated,  if  it  is  repeated  it  is  indicated  that  the  name  is  repeated  and 
another one is requested. 
- The application will group users 3 by 3 into random groups. 
- If the number of students is not a multiple of three, the remaining students move one by one 
randomly in the groups that we indicate. 
- Example of result: 
o Grupo 1: David, Toni, Edison 
o Group 2: Sandra, Isabel, Jaume, Carlos 
o Group 3: Ricardo, Vicent, Joan 
o Group 4: Raúl, Manel, Juan, Alejandro 
− There  are  two  groups  of  4  students  as  there  are  more  students,  it  is  important  that  the  2 
students are not placed in the same group forming a group of 5. 

 * 
 */
window.addEventListener("load", inicio, true);
//inicio
function inicio() {
    let condition = true;
    let todosLosNombres_1 = [];
    let todosLosNombres_2 = [];
    let nombre;
    let otro_1 = 0;
    let otro_2 = 0;
    let aleatoria;
    let conteoAleatorio = []


    do {
        //Entrada de palabras hasta introducir fin
        nombre = window.prompt("Introduce nombre");
        if (nombre == "fin") {
            condition = false;
            //No se pueden repetir las palabras
        } else if (todosLosNombres_1.includes(nombre)) {
            // aviso de repetición 
            window.alert("El nombre esta repetido.");
        } else {
            todosLosNombres_1[otro_1] = nombre;
            otro_1++;
        }

    } while (condition);
    // aletorizar los nombres en nuevo array
    while (todosLosNombres_2.length < todosLosNombres_1.length) {
        aleatoria = parseInt(Math.random() * todosLosNombres_1.length);
        //En caso de ya estar incluido pasa a otro número
        if (conteoAleatorio.includes(aleatoria) == false) {
            todosLosNombres_2[otro_2] = todosLosNombres_1[aleatoria];
            conteoAleatorio[otro_2] = aleatoria;
            otro_2++;

        }

    }
    console.log(todosLosNombres_1);
    console.log(todosLosNombres_2);
    grupos(todosLosNombres_2);
}

function grupos(nombres) {

    let grupos = new Array();
    

    if (nombres.length < 3) {
        grupos[0] = nombres;
    } else if (nombres.length == 4 || nombres.length == 5) {
        grupos[0] = nombres.slice(0, 2);
        grupos[1] = nombres.slice(2, 5);
    } else{

        let j = 0;
        for (let i = 0; i <= nombres.length; i += 3) {
            grupos[j] = nombres.slice(i, i + 3);
            j++;
        }
        j--;
            if(grupos[j-1].length > 0 && grupos[j-1].length <3){
               
                grupos[0][ grupos[0].length] = grupos[j][0];
                grupos[0][ grupos[0].length] = grupos[j][1];

            }


    }




    console.log(grupos);
    console.log(nombres);

    for(let i = 0; i < grupos.length; i++){
        document.write("Grupo ");
        for(let j = 0; j < grupos[i].length; j++){
            document.write(+i+1 +" "+ grupos[i][j]);
        }
    }

    }
    

