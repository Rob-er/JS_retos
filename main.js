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

 /* let inicio = Number(prompt("Numero"));
 while(inicio > 0){
     if(inicio % 2 !== 0){
         console.log(inicio);
     }
     inicio--
 }
 */

 /* let numero = [3, 4, 6, 7, 8, 93, 4];
 let numero2= [];

function doble (lista){
    let numero2 = [];
    for (let i =0; i< lista.length; i++){
        numero2.push(numero[i] *2);
    }
    return numero2;
}

console.log(doble(numero)); */


// menor a 17
let objeto = [{name: "erik", edad: "18", hobbies: ["jugar", "nadar"]},
                {name: "juan", edad: "16", hobbies: ["jugar", "nadar"]},
                {name: "maria", edad: "19", hobbies: ["jugar", "nadar"]},
                {name: "eva", edad: "20", hobbies: ["jugar", "nadar"]},
                {name: "junne", edad: "15", hobbies: ["jugar", "nadar"]},
                {name: "cris", edad: "12", hobbies: ["jugar", "nadar"]},
                {name: "tobbie", edad: "13", hobbies: ["jugar", "nadar"]},
                {name: "john", edad: "17", hobbies: ["jugar", "nadar"]},
                {name: "carlos", edad: "19", hobbies: ["jugar", "nadar"]},
                {name: "tomas", edad: "18", hobbies: ["jugar", "nadar"]}];


function menor(datos){
    let nuevo= [];
    for (x of datos){
        if(x.edad > 17){
            nuevo= [...nuevo, x];
        }
    }
    return nuevo;
}
    
console.log(menor(objeto));




