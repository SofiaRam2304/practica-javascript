//Ejercicio # 1
//Programe una función que devuelva el monto final después de aplicar un descuento a una cantidad dada.

let monto = undefined;
let descuento = undefined;

function aplicardescuento(monto,descuento) {

    //Para el monto
    if (monto == undefined) return console.warn("Por favor, Ingrese el monto");
    //Para el descuento
    if (descuento == undefined) return console.warn("Por favor, Ingrese el descuento");

    //Validaciones Monto
    if (typeof monto !== "number") 
        return console.error("El monto ingresado no es un numero: ",(monto));

    if (monto === 0) 
        return console.error("El monto no puede ser cero. Usted Ingresó: ", (monto));
    
    if (Math.sign(monto) === -1) 
        return console.error("El monto ingresado no puede ser un numero negativo. Usted Ingresó: ", (monto));
    //Validaciones Descuento
    if(typeof descuento !=="number") 
        return console.error("El descuento que ha ingresado no es un número. Usted Ingresó: ", (descuento));
    
    if(Math.sign(descuento)===-1) 
        return console.error("El descuento no puede ser negativo. Usted ingresó: ", (descuento));

    if (descuento === 0) 
        return console.error("El descuento no puede ser cero. Usted Ingresó: ", (monto));
    //Retorno del valor del monto final
    return console.info((monto)-(monto*descuento)/100);

}

//demostración de validaciones
aplicardescuento(); //No se ha ingresado ningun dato
aplicardescuento("Prueba"); //no se ingresó un número
aplicardescuento(0); //El monto no puede ser cero
aplicardescuento(-10); //el monto es negativo
aplicardescuento(80); // no hay descuento
aplicardescuento(500,"Pruebas"); // el descuento no es un número
aplicardescuento(63,-23); //el descuento es negativo
aplicardescuento(0, 12); // el monto es cero
aplicardescuento(100,0) // el descuento es cero
aplicardescuento(100,20) // Devolverá el valor de 80 tal como el ejercicio lo pidió