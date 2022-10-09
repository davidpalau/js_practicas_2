/*
ACTIVITY 3 – Primitive lottery 
− Create a web application that displays fifty combinations to play the primitive lottery.  
− The combinations are six numbers from 1 to 49, but keep in mind that you cannot repeat the 
numbers.
*/

window.addEventListener("load", inicio, true);

function inicio(){
  
    const array_50_6 = new Array(50);
   
    for(let i = 0; i < 50; i++){
    let j = 0;
    const arrayDe_6 = new Array(6);
    while(isNaN(arrayDe_6[5])){
        let bola = parseInt(Math.random() * (49 +1) -1) ;
        if(arrayDe_6.indexOf(bola)==-1 && bola > 0 && bola < 50){
            arrayDe_6[j] = bola;
            j++;
        }
        

    }
        array_50_6[i] = new Array (arrayDe_6);
    


console.log(array_50_6);
}
    document.write("<h1>Loteria de javaScript:</h1>")
    for(let i = 0; i < array_50_6.length; i++){
        document.write("<h3>Resultados del sorteo " +(i+1)+":</h3><p>" )
        for(let j = 0; j < array_50_6[i].length; j++){
            document.write(array_50_6[i][j]);
        }
       
    }
    document.write("</p>")

}