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

    let miArray = new Array; 
    let nombre_1 = window.prompt("Introduce nombre");

    for(let i = 0; i<0; i++){
        for(let j = 0; j < 3; j){
            miArray[i][j]= [nombre_1];
        }
     
    }
}


