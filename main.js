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

/* let lista = ["yo", "tu", 3, 5, null, 7];

const pedido = Number(prompt("Indice"));

if (pedido > lista.length){
    console.log("Ese elemento no esta en la lista");
}else{
    console.log("el elemento en el indice " + pedido + " es " + lista[pedido]);
} */
let lista = [];

const requirimiento = Number(prompt("Elige 1 para añadir, Elige 2 para borrar, Elige tres para consultar"))

function añadir(registro){
    if (requirimiento=== 1){
        let decision = String(prompt("al inicio o final"));
        if (decision === "inicio"){
            registro = console.log(prompt("Añade valor"));
            lista.unshift(registro);
        } else{
            lista.push(registro);
        }
    } else if (requirimiento === 2){
            let aborrar = String(prompt("Ingrese el valor a eliminar"));
            let existe = lista.includes(aborrar);
            if (existe === true){
               let indice = lista.indexOf(aborrar);
               lista.splice(indice,1);
            } else{
                console.log("No existe ese valor en la lista");
            }
    } else{
        console.log(lista);
    }
}

añadir();



















