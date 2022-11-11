

let datos = {
    1: "Óptimo",
        2: "Notable",
     3: "Notable",
    4: "Excelente",
   5: "Improbable",
     6: "Excelente",
    7: "Notable"
}
//Obtenemos las llaves actuales. 
let respuesta = Object.keys(datos)
    .reduce((acumulador, keyAnterior) => {
        //Obtenemos la nueva key deseada. Que es el valor. 
        let nuevaKey = datos[keyAnterior]
      //Si el acumulador no contiene la nueva clave, la creamos y
      // la inicializamos con un arreglo vacio. 
      if (!acumulador.hasOwnProperty(nuevaKey))
        acumulador[nuevaKey] = []
      //Agregamos la key anterior al arreglo. 
      acumulador[nuevaKey].push(keyAnterior)
      //Retornamos los cambios al acumulador para seguir con el
      //ciclo. 
      return acumulador
    //Este segundo parametro {} es para inicializar el acumulador. 
    //En este caso un objeto. 
    }, {})
  
  console.log(respuesta)
