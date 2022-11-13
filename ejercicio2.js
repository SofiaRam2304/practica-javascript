//Ejercicio # 2
//Realizar la suma de un array pasado por parametro. Validar si es un array. 
//Realizar la media de un array pasado por parametro. Validar si es un array. 
//Comprobar, dado un array y un elemento, si existe en el array. Validar si es un array. (crear 4 funciones).

const pruebas = "hola";
const prueba = [];
const numeros = [2, 3, 3, 5, 7, 10];


//VALIDACIÓN SOBRE SI ES UN ARRAY
function validar(arr){

    if(Array.isArray(arr)==true) {
        console.log("Si es un Arreglo");
    }
    else{
        console.log("No es un arreglo");
    }
    
}

//PARA SUMAR LOS NUMEROS
function suma(sumar){
    if((Array.isArray(sumar)==true)){
        let total=0;
        sumar.forEach(function(a){total += a;});
        console.log(total);
    };

    if(Array.isArray(sumar)==false){
        return console.error("Debe ingresar un arreglo numérico");
    };

    if(!sumar.length ==true){
        return console.error("El arreglo está vacio");
    }

}

//SACAR LA MEDIA DE LOS NUMEROS
function media(media){
    if(Array.isArray(media)==true){
        let totalArray = media.length;
        let sumado = 0;
        let mediana = 0;
        media.forEach(function(a){sumado += a;});
        mediana = sumado/totalArray;
        console.log(mediana);
    };

    if(Array.isArray(media)==false){
        return console.error("Debe ingresar un arreglo numérico");
    };
}

//BUSCAR UN ELEMENTO EN EL ARRAY
function busqueda(numeros,buscar){
    let array = numeros;
    if((Array.isArray(array)==true)){

        let index = numeros.indexOf(buscar);
        if(index == -1){
            return console.error("El numero", buscar ,"no existe");
        }
        else
        {
            return console.log("El numero",buscar, "Sí existe en el arreglo");
        }
    }

    if(Array.isArray(buscar)==true){
        return console.error("Ingrese un número valido. No ingrese Arrays");
    }
}

validar(numeros);
validar(prueba);
validar(2);
validar(pruebas);
suma(numeros);
suma(prueba);
media(numeros);
busqueda(numeros,2);
busqueda(numeros,75);

