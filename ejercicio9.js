/* 
Programe una función que devuelva el texto recortado según el numero de caracteres de una cadena texto.
Ejemplo:
“Buen día jóvenes”, 4 devolverá “Buen”
Validaciones:
• Que no ingrese una cadena vacia.
• Que no se ingrese la longitud.
*/


function imprimir() {

    let oracion = undefined;
    oracion = prompt("Ingrese una frase u Oración");
    if(oracion.length < 1)
        return console.error("La cadena de texto ingresada está vacia");

    let longitud;
    longitud = prompt("Ingrese una Longitud");

    /*if (longitud == 0)
        return console.error("La longitud No puede ser de cero");

    if(Math.sign(longitud) === -1)
        return console.error("La longitud ingresada no puede ser negativa");

    if (typeof longitud !== "number") 
        return console.error("La longitud ingresada no es un numero.");*/

    console.log(oracion.substring(0, longitud));
}

imprimir();
