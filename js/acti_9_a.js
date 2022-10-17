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
    let todosLosNombres = [];
    let miArray = [];
    let nombre;
    let grupo = [];
    let aleatoria;
    do {
        grupo = [3];
        for (let j = 0; j < 3; j++) {
            nombre = window.prompt("Introduce nombre");
            //


            if (nombre == "f") {
                condition = false;
                j = 4;
            } else {

              
                if (todosLosNombres.includes(nombre)) {
             
                    window.alert("El nombre esta repetido.");
                } else {
                    grupo[j] = nombre;
                    todosLosNombres.push(nombre);
                }


            }
        }
        if (nombre == "fin") {

        } else {
            miArray.push(grupo);

        }


    } while (condition);

    console.log(miArray);
    console.log(grupo);
    if (grupo.length == 1) {
        aleatoria = parseInt(Math.random(miArray.length));
        miArray[0].push(grupo[0]);
    }
    aleatoria = parseInt(Math.random(miArray.length));
    miArray[0].push(grupo[0]);

    console.log(todosLosNombres);


}

