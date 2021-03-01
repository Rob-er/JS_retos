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


/* function calificaciones (nota){
   nota === 19 || nota === 20 ? console.log("A") : nota === 16 || nota === 17 || nota === 18 ?  console.log("B") : nota === 13 || nota === 14 || nota === 15 ? console.log("C"):  nota === 12 || nota === 11 || nota === 10 ? console.log("D") : console.log("E");
}

calificaciones(19); */

// a. Realiza el mismo algoritmo utilizando Mientras (While); también hazlo utilizando En Caso (Case)

/* function cali_while (nota){
    while(nota === 19 || nota === 20){
          nota = "A"
        console.log(nota);
    } while (nota === 18|| nota === 17 || nota === 16){
        nota ="B"
        console.log(nota);
    }
}
cali_while(16) */

/* function cali_case (nota) {
    switch (nota !== null){
        case (nota=== 19 || nota === 20):
            nota = "A"
            console.log(nota);
            break;

        case (nota=== 18 || nota === 17 || nota === 16):
            nota = "B"
            console.log(nota);
            break;    
        
        default:
            console.log("ese es nulo");
            break;
    }
}

cali_case(12); */

//Ejercicio 8
// Desarrolle un algoritmo que permita leer dos números y ordenarlos de menor a mayor, si es el caso.
/* const mayor_menor = function (nu1, nu2){
    nu1 > nu2 ? console.log(`De menor a mayor es: ${nu2}, ${nu1}`) : nu1 < nu2 ? console.log(`De menor a mayor es: ${nu1}, ${nu2}`) : console.log(`${nu1} es igual que ${nu2}`)
}

mayor_menor(2,2); */

// Ejercicio 9 
//  Desarrolle un algoritmo que permita leer un valor entero positivo N y determinar si es primo o no

/* function entero (valor){
    valor > 0 && valor % 1 === 0 ? valor % 2 !== 0  ? alert(`${valor} es primo entero positivo`) : alert(`${valor} no es primo, pero si es entero positivo`) : alert(`${valor} no es un numero entero positivo`)
}
 entero(13) */

// b. Realice un algoritmo que determine los veinte primeros números, ¿Cuáles son múltiplos de 2?.

/* function los20 (inicio = 0){
    let contador = 0
    do{
        inicio % 2 === 0 ? document.write(inicio + "<br>") : "" 
        console.log(inicio++), contador++
    } while (contador <= 20)
}

los20() */

// c. Realice un algoritmo que determine cuantos minutos hay en 5 horas

/* function minutos(hora = 24){
    console.log(`en ${hora} hr(s) hay ${hora *60} minutos`)
}
minutos(40) */

//Ejercicio 10
/* Realice un algoritmo que calcule el monto a pagar por el servicio de estacionamiento, 
teniendo en cuenta que por la primera hora de estadía se tiene una tarifa de 1000 bolívares
y las restantes tienen un costo de 600 bolívares. Se tiene como datos: hora de entrada,
hora de salida (formato militar), iniciada una hora se contabiliza como hora total. */

/* function apagarEstacionamiento(hrsEntrada = 13, hrSalida = 14){
    let total = 0;
    do {

       Math.floor(hrSalida) - Math.floor(hrsEntrada)> 1 ? total += 600 : total += 1000;
       Math.floor(hrsEntrada++);

    } while (Math.floor(hrsEntrada) < Math.floor(hrSalida))
    console.log(`El total a pagar por estacionamiento es ${total}`)
}
apagarEstacionamiento() */

/* Realice un algoritmo que determine el pago a realizar por la entrada a un espectáculo:
a) donde se pueden comprar sólo hasta cuatro entradas, 
b) donde al costo de dos entradas se les descuenta el 10%, al de tres entrada el 15% 
   y a la compra de cuatro tickets se le descuenta el 20 %. */

/* function pagoEntrada(precio = 5, boletos = 1){
    let total = precio * boletos;
    if (boletos <= 4){

        boletos === 1 ? console.log(`El total apagar por ${boletos} es ${total}`) : boletos === 2 ? console.log(`El total apagar por ${boletos} es ${total * (1- .10)}`) :  boletos === 3 ? console.log(`El total a pagar por ${boletos} es ${total * (1 - .15)}`) : console.log(`El total a pagar por ${boletos} es ${total * (1 - .20)}`)
    } else {
        console.log(`${boletos} es una cantidad excesiva, el limite es 4`)
    }
}

pagoEntrada(10, 3) */

// Ejercicio 11
/* Realice un algoritmo que a partir de proporcionarle la velocidad de un automóvil, expresada en
kilómetros por hora, proporcione la velocidad en metros por segundo. */

/* function de_Km_a_mts(velocidad){
    console.log(`La velocidad es de ${(velocidad * 1000) / 3600} metros por segundo`)
}

de_Km_a_mts(9) */

// a. Desarrolle un algoritmo que lea la velocidad en metros por segundo y la convierta a kilómetros por
//    hora. 

/* console.log((2.5 * 3600) / 1000) */

// Ejercicio 12
// Desarrolle un algoritmo que permita calcular Promedio de Notas; finaliza cuando N = 0.

/* function promNotas(...notas){
   let total = notas.reduce((acc, actu) => {
        return acc += actu
    }, 0)
    console.log(`Su promedio es ${total / notas.length}`)
}

promNotas(2) */

// Ejercicio 13
/* Desarrolle un algoritmo para la empresa Constructora Tecnovivir Casas C.A., 
que le permita calcular e imprimir la nómina para su cancelación a un total de 50 obreros
calificados a quienes debe cancelar por horas trabajadas. La hora trabajada se pautó en 30.000 Bolívares. */
 
class Obrero {
    constructor (nombre, hrs_Trabajadas){
        this.nombre = nombre
        this.hrs_Trabajadas = hrs_Trabajadas
    }
    soy(){
        document.write(`Hola soy el ${this.nombre} y trabaje ${this.hrs_Trabajadas} hrs <br>`)
    }
}

class Nomina{
    constructor(lista){
        this.lista = [];
    }

    calculo_nomina(nombre, hrs){
        this.lista.push(`${nombre} debe recibir ${hrs * 30000}`)
    }
}

function nomina (){
    const total = new Nomina;
    let hrs = 0
    let numero = 1
    do {
        let obrero = new Obrero(`${numero} obrero`, hrs += 1)
        obrero.soy()
        total.calculo_nomina(obrero.nombre, obrero.hrs_Trabajadas)
        numero++
    }while(numero <= 50)
    console.table(total.lista)
}

nomina()


