/*
ACTIVITY 4 – Number frequencies 
− We  want  to  make  an  application  that  allows  us  to  check  to  what  extent  the  Math.random 
function is really random. 
− To do this, we will calculate 10,000 times random numbers from 1 to 10. 
− We will show on a web page how often each number has come out. 
− Example of result: 

*/
window.addEventListener("load", inicio, true);

function inicio() {
    let numeros = new Map()
    let num;
    let  i_1 = 0; i_2 = 0, i_3 = 0, i_4 = 0, i_5 = 0,
     i_6 = 0, i_7 = 0, i_8 = 0; i_9 = 0, i_10 = 0;
    //Inicializar el objeto map
        for(let i = 1; i <= 10; i++){
            numeros.set(i, 0);
        }

    for(let i = 0; i < 10000; i++){
        num = parseInt(Math.random() * (11 -1) +1);
    switch (num) {
        case 1:
            i_1++;
            numeros.set(1, i_1);
            break;
        case 2:
            i_2++;
            numeros.set(2, i_2);
            break;
        case 3:
            i_3++;
            numeros.set(3, i_3);
            break;
        case 4:
            i_4++;
            numeros.set(4, i_4);
            break;
        case 5:
            i_5++;
            numeros.set(5, i_5);
            break;
        case 6:
            i_6++;
            numeros.set(6, i_6);
            break;
        case 7:
            i_7++;
            numeros.set(7, i_7);
            break;
        case 8:
            i_8++;
            numeros.set(8, i_8);
            break;
        case 9:
            i_9++;
            numeros.set(9, i_9);
            break;
        case 10:
            i_10++;
            numeros.set(10, i_10);
            break;
    }



}

document.write("<h1>Estadisticas del metodo randon de javaScript. del 1 al 10 </h1>")
console.log(numeros);

for(let i = 1; i <= 10; i++){
    document.write("Número "+ i+ " => "+ numeros.get(i) + " veces. <br>");
}

}
