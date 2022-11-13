//Programe una función para convertir números de base binaria a decimal y viceversa.

let prueba1 = "esto es un string";
let prueba2 = undefined;
let prueba3 = 89;

function binariodecimal(convertir){

    if (convertir == undefined)
    return console.warn("Debe ingresar un número");

    if (typeof convertir !== "number") 
    return console.error("El valor a convertir NO es un número: ",(convertir));
        
    if(typeof convertir == "number" && convertir !==undefined){
        let binarioEnDecimal = parseInt(convertir, 2);

        if(Number.isNaN(binarioEnDecimal)==true)
        {
            return console.error("El numero ingresado no es Binario")
        }

        return console.log("El numero Binario ", convertir, "en decimal es ", binarioEnDecimal);

    }
}


function decimalBinario(convertir){

    if (convertir == undefined)
    return console.warn("Debe ingresar un número");

    if (typeof convertir !== "number") 
    return console.error("El valor a convertir NO es un número: ",(convertir));

    if(typeof convertir == "number" && convertir !==undefined){
        let decimalEnBinario = convertir.toString(2); 
        console.log("El numero Decimal ", convertir, "en Binario es ", decimalEnBinario);
        }

}

binariodecimal(prueba1);
binariodecimal(prueba2);
binariodecimal(prueba3);
binariodecimal(100100100101);
decimalBinario(prueba1);
decimalBinario(prueba2);
decimalBinario(prueba3);
decimalBinario(32);