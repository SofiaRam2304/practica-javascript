//Escriba un programa que permita introducir una serie indeterminada de números mientras su suma no supere
//50. Cuando esto ocurra, se debe mostrar el total acumulado y el contador de cuantos numeros se han
//introducido.

let i = 0; //contador
let suma = 0;


while (suma < 50) { 
   suma +=Number(prompt("Agrega un número a la suma: "));
   i++; 
} 
console.log("La suma total es: ",suma,". El numero de números introducidos es de: ",i,".");