/* 
10. Programe una función que dado un String nos devuelva un array de textos separados por cierto carácter.
Ejemplo:
“La paz como valor”, ‘ ’ devolvera [‘La’, ‘paz’, ‘como’, ‘valor’]
Validaciones:
• Que no ingrese una cadena vacia.
• Que no ingrese el carácter separador.
*/

function separarTexto() {

    let texto = prompt("Ingrese una frase u Oración");
    if (texto == undefined)
        return console.error("Debe ingresar una oración");

    console.log(texto.split(" "));
}

separarTexto();