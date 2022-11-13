/* 8. Programe una función que dada una fecha valida determine cuantos años han pasado hasta el día de hoy.
Ejemplo:
1981,10,02 devolverá 40 años (en 2021)
Nota: el mes 10 es noviembre el mes 0 es enero.
Validaciones:
• Si no ingresa fecha
• Verificar que sea una fecha valida
• Que muestre dada una fecha futura cuantos a;os faltan
• Mostrar la fecha actual */

let resultado =[];  


function calcularAnio(){
    let fechaActual = new Date();
    let diaActual = fechaActual.getDate();
    let MesActual = fechaActual.getMonth()+1;
    let AnioActual = fechaActual.getFullYear();

    let anio = prompt("Ingrese el año (YYYY)");

    if(anio>AnioActual)
        console.warn(`El año ${anio} es mayor al año ${AnioActual}`);
    
    if(anio.length < 4)
        return console.error(`Ingrese el año de forma correcta (YYYY)`);

    let mes = prompt("Ingrese el mes (MM)");

    if(mes.length < 2)
        return console.error(`Ingrese el mes de forma correcta (MM)`);

    let dia = prompt("Ingrese el día (DD)");

    if(dia.length < 2)
        return console.error(`Ingrese el día de forma correcta (DD)`);

    let prueba = AnioActual - anio;
    let futuro = anio - AnioActual;

    console.log(`Fecha Ingresada: ${dia}/${mes}/${anio}`);
    console.log(`Fecha Actual: ${diaActual}/${MesActual}/${AnioActual}`);

    if(anio < AnioActual)
        return console.log(`Han transcurrido ${prueba} años entre ${AnioActual} - ${anio}`);

    if (AnioActual < anio)
        return console.log(`Faltan ${futuro} años entre ${AnioActual} - ${anio}`);

    //pares.push(result);

    /*resultado.push({
        fechaIngresada: (dia,mes,anio),
        fechaHoy: (diaActual,MesActual,AnioActual)
    })

    console.log(resultado);*/
}

calcularAnio();
