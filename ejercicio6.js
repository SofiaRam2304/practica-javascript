/*Crear un programa que solicite al usuario una palabra y mostrar por consola el número de consonantes, vocales
y longitud de la palabra.*/ 


const palabra = prompt("Introduzca una palabra por favor: ").toLowerCase();

let consonantes = 0;
let vocales = 0;

for (letra of palabra){
   if(letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u'){
      vocales++;
   }else {
      consonantes++;
   }
}

console.log("La palabra ",palabra," tiene",vocales,", Vocales",consonantes,",Consonantes y ",palabra.length," letras");