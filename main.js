/*let edad = 23;
let edad_minima = 21;
let ciudad =  prompt("Ciudad") //"CDMX"

if (edad >= edad_minima && ciudad === "CDMX") {
    console.log("si puede votar");
} else{
    console.log("No puede votar");
}*/

/*let nombre= prompt("nombre autor");
  switch(nombre) {
     case "Sartre":
         console.log("La nausea, La bola de Cebo, El exitencialismo es humanismo");
         break;
     case "Vargas Llosa":
         console.log("La Ciudad y los peros, las 4 esquinas");
         break;
     case "Garcia Marquez":
         console.log("El coronel no tiene quien le escriba, 100 años de soledad");
         break;
     default: 
     console.log("No esta el autor");
     break;
 } */

 /* let inicio = Number(prompt("Numero de inicio"));
 let fin = Number(prompt("Numero de Fin"));
 let residual= Number(prompt("Dividido entre"));

 for(inicio; inicio >= fin; inicio--){
     if(inicio % residual === 0){
         console.log(inicio);
     }
 } */

 /*  let inicio = Number(prompt("Numero"));
 while(inicio > 0){
     if(inicio % 2 !== 0){
         console.log(inicio);
     }
     inicio--
 } */
 
 // Retos Capitulo de Controles de Flujo EloquentJs 2.0
 // Reto 1 
 /* Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
####### */

    /* let valor = "a";
    for(valor; valor.length<=7; valor+="a"){
        console.log(valor);
    } */

// Retos 2
/* Write a program that uses console.log to print all the numbers from 1 to 100, 
    with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number,
     and for numbers divisible by 5 (and not 3), print "Buzz" instead.

    When you have that working, modify your program to print "FizzBuzz"
     for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz"
      for numbers divisible by only one of those).*/

/*  for (let i = 0; i <=100; i++){
   switch(i <= 100){
        case (i % 3 === 0 && i % 5 === 0):
            console.log("FizzBuzz");
            break;
        case (i % 3 === 0):
            console.log("Fizz");
            break;
        case(i % 5 === 0):
            console.log("Buzz");
            break;
       default:
           console.log(i);
           break;
   }
 } */

 /* Write a program that creates a string that represents an 8×8 grid, 
    using newline characters to separate lines. At each position of the grid there 
    is either a space or a "#" character. The characters should form a chessboard.

    Passing this string to console.log should show something like this:

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #     */

/* let size = 8;
let signo = " ";
for(let i = 0; i < size; i++){
    for(let x = 0; x < size; x++){
        if((x + i) % 2 == 0){
            signo += " ";
        } else {
            signo += "#";
        }
    }
    signo += "\n";
}

console.log(signo); */


// Write a function min that takes two arguments and returns their minimum.

// funcion con notacion declarativa
/* function minimo (numero1, numero2){
    console.log(Math.min(numero1, numero2));
}

minimo(12, 13);


// funcion con notacion expresiva (expresion de funcion)
let otra = function(numero1, numero2){
    console.log(Math.min(numero1, numero2));
}

otra(12,13);

// funcion con notacion de flecha

let otra_prueba = (numero1, numero2) => {
    console.log(Math.min(numero1, numero2));
}

otra_prueba(12, 13);


function numero_primo (numero){
    if ( numero % 2 === 0 ){
        console.log( "No lo es");
    } else {
        return numero * 10;
    }
}

 let numeirto = console.log(numero_primo(13));

 */

// sesion 3

function saludar (saludo, name){
    alert(saludo + " " + name);
}
saludar("Hola", "Erik");

function perimetro (figura, lados){
    return(String(figura) + " " + "su perimetro es " + lados * lados * lados);
}

let resultado = console.log(perimetro("cuadrado", 2))


