/*Desarrolle 3 arrays, el primero tendra 5 números y el segundo se llamará pares y el tercero impares, ambos
estarán vacíos.
Después multiplique cada uno de los números del primer array por un número aleatorio entre 1 y 10, si el
resultado es par guarde ese número en el array de pares y si es impar en el array de impares.
Muestre por consola:
• La multiplicación que se produce junto con su resultado con el formato 2 x 3 = 6
• El array de pares e impares.*/


const numeros = [1,2,3,4,5];
let pares = [];
let impares = [];

for (numero of numeros) {
   let aleatorio = Math.round((Math.random() * 10) + 1);
   let result = numero * aleatorio;

   console.log(numero,"x" ,aleatorio, "=",result);
   if (result % 2 == 0) {
      pares.push(result);
   }else {
      impares.push(result);
   }
}

console.log("Pares: ",pares);
console.log("Impares: ", impares);