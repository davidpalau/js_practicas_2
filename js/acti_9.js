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
    grupos.reduce

    if (nombres.length < 3) {
        grupos[0] = nombres;

        //En caso de ser superior a 3 y menor de 6.
    } else if (nombres.length == 4 || nombres.length == 5) {
        grupos[0] = nombres.slice(0, 2);
        grupos[1] = nombres.slice(2, 5);
    } else if (nombres.length % 3 == 0) {

        let j = 0;
        for (let i = 0; i < nombres.length; i += 3) {
            grupos[j] = nombres.slice(i, i + 3);
            j++;
        }


        //En caso de sobrar 1 personas, se agruparan en otros grupos pasando un grupo de 3 a 4 personas
    } else if (nombres.length % 3 == 1) {

        let j = 0;
        for (let i = 0; i < (nombres.length - 1); i += 3) {
            grupos[j] = nombres.slice(i, i + 3);
            j++;
        }
        grupo_aleatorio = parseInt(Math.random() * grupos.length);
        grupos[grupo_aleatorio][grupos[0].length] = nombres[nombres.length - 1];

    } else if (nombres.length % 3 == 2) {
        //En caso de sobrar 2 personas, se agruparan en otros grupos pasando dos grupos de 3 a 4 personas
        let j = 0;
        for (let i = 0; i < (nombres.length - 2); i += 3) {
            grupos[j] = nombres.slice(i, i + 3);
            j++;
        }
        let grupo_aleatorio_2;
        grupo_aleatorio = parseInt(Math.random() * grupos.length);
        grupos[grupo_aleatorio][grupos[grupo_aleatorio].length] = nombres[nombres.length - 1];
        do {
            //En caso que no se repita el aletrorio, de este modo no habran grupos de 5 personas.
            if (grupo_aleatorio_2 != grupo_aleatorio) {
                grupo_aleatorio_2 = parseInt(Math.random() * grupos.length);
                grupos[grupo_aleatorio_2][grupos[grupo_aleatorio_2].length] = nombres[nombres.length - 2];
            }


        } while (grupo_aleatorio_2 == grupo_aleatorio);

    }
    // muestra en pantalla
    console.log(nombres);
    console.log(grupos);
    //Muestra en el html
    for (let i = 0; i < grupos.length; i++) {
        document.write("<p> Grupo: " + (i + 1) + " => ");
        for (let j = 0; j < grupos[i].length; j++) {
            if (j == grupos[i].length - 1) {
                document.write(" " + grupos[i][j] + ".");
            } else {
                document.write(grupos[i][j] + ", ");
            }


        }
        document.write("</p>");
    }

}