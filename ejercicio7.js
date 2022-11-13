/*Se le proporciona el siguiente array: [“azul”, “amarillo”, “amarillo”, “rojo”, “verde”, “rosa”] 
determinar si un color introducido por el usuario a través de un prompt se encuentra dentro del array o no. */

const array=["azul","amarillo","amarillo","rojo","verde","rosa"];
const color=prompt("Ingresa un color").toLowerCase();

let respuesta= array.filter(element => element == color);

function buscar (Busqueda){
    if(respuesta == Busqueda)
    {
        return console.log("El color",Busqueda,"sí existe en el Array")
    }

    if(respuesta !== Busqueda){
        return console.log("El color",Busqueda,"no existe en el array")
    }
}

buscar(color);