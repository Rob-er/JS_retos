// Ejercicio 1
/* Desarrolle un algoritmo que permita leer dos valores distintos, determinar cual de los dos valores
 es el mayor y escribirlo */

function mayor (id1, id2){
    const input1 = document.getElementById(id1);
    const input2 = document.getElementById(id2);

    const numero1 = Number(input1.value);
    const numero2 = Number(input2.value);

    console.log(`El valor mas grande es`, Math.max(numero1, numero2));
}

// Ejercicio 2
/* Desarrolle un algoritmo que permita leer tres valores y almacenarlos en las variables A, B y C
respectivamente. El algoritmo debe imprimir cual es el mayor y cual es el menor. 
Recuerde constatar que los tres valores introducidos por el teclado sean valores distintos. 
Presente un mensaje de alerta en caso de que se detecte la introducción de valores iguales */

function mayor_menos(id1, id2, id3){
    const A = Number(document.getElementById(id1).value);
    const B = Number(document.getElementById(id2).value);
    const C = Number(document.getElementById(id3).value);

    const mayor = Math.max(A,B,C);
    const menor = Math.min(A,B,C);

    if(A === B || A === C || B === C){
        alert("Alguno de los valores es repetido");
    } else{
        document.write(`El mayor es ${mayor} y el menor es ${menor}`);
    }

}

// Ejercicio 3

/* Desarrolle un algoritmo que realice la sumatoria de los números enteros comprendidos
entre el 1 y el 10, es decir, 1 + 2 + 3 + …. + 10 */

/* const numeros = [1,2,3,4,5,6,7,8,9,10];

const suma = numeros.reduce((pre, act) => {
    return pre + act
})

console.log(suma); */

/* a) Desarrolle un algoritmo que realice la sumatoria de los números enteros múltiplos de 5,
      comprendidos entre el 1 y el 100, es decir, 5 + 10 + 15 +…. + 100. 
      El programa deberá imprimir los números en cuestión y finalmente su sumatoria  */

/* const lista = [];

function suma (){
    for (let i = 1; i <= 100; i++){
        if (i % 5 === 0) {
            lista.push(i);
        }
}
    console.log(lista);
    return lista.reduce((pre,act) => {
        return pre + act;
    });

}   

console.log(suma()); */

// Ejercicio 4
/* Determinar la hipotenusa de un triángulo rectángulo conocidas las longitudes de sus dos catetos.
Desarrolle el algoritmo correspondiente*/

/* 
function hipotenusa(catetoA, catetoB){
    return Math.sqrt(Math.pow(catetoA,2) + Math.pow(catetoB,2));
}

console.log(`la Hipotenusa es ${hipotenusa(2,4)}`); */

// Ejercicio 6 
/* Desarrolle un algoritmo que permita determinar el área y volumen de un cilindro dado su radio (R) y
altura (H). */

/* function cilindro(radio, altura){
    const pi = Math.PI;
    const area = 2*pi*radio*(radio+altura);
    const volumen = pi*Math.pow(radio,2)*altura;
    return console.log(`El área es ${area} y el volumen es ${volumen}`);
}

cilindro(5,20); */

// Ejercicio 7
/* Desarrolle un algoritmo que permita convertir calificaciones numéricas, según la siguiente tabla:
 A = 19 y 20, B =16, 17 y 18, C = 13, 14 y 15, D = 10, 11 y 12, E = 1 hasta el 9. 
 Se asume que la nota está comprendida entre 1 y 20 */


function calificaciones (nota){
   nota === 19 || 20 ? console.log("A") : nota === 16 || 17 || 18 ?  console.log("B") : nota === 13 || 14 || 15 ? console.log("C"): console.log("D");
}

calificaciones(14);



