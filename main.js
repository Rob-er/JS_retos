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

