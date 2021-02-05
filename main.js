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
/* const lista = ["Hola", "2", "3", "jota", "joto"];

const requirimiento = Number(prompt("Elige 1 para añadir, Elige 2 para borrar, Elige tres para consultar"))

function añadir(registro){
    if (requirimiento=== 1){
        let decision = String(prompt("al inicio o final"));
        registro = String(prompt("Añade valor"));
        if (decision === "inicio"){
            lista.unshift(registro);
        } else{
           lista.push(registro);
        }
    } else if (requirimiento === 2){
            registro = prompt("Ingrese el valor a eliminar");
            let existe = lista.includes(registro);
            if (existe === true){
               let indice = lista.indexOf(registro);
               lista.splice(indice,1);
            } else{
                console.log("No existe ese valor en la lista");
            }
    } else{
        console.log(lista);
    }
    return console.log(lista);
}

añadir(); */


// creo una clase para persona 
class persona{
    constructor(nombre, apellido){
        this.nombre= nombre;
        this.apellido = apellido;
    }
}
// creo una clase para lista con los metodos que habia mencionado que no agregara en alumno
class lista{
    constructor(){
        this.lista= [];
    }
    agregar(nuevo){
        this.lista.push(nuevo);
    }

    imprimmir (){
        console.log(this.lista);
    }
}

// creo una clase para alumno 
class alumno extends persona{
    constructor(nombre, apellido, grado, grupo){
    super(nombre, apellido);
        this.grado= grado;
        this.grupo= grupo;
    }
}

/* aqui batallé mucho para que funcionara la otro porque existia en el scope del Do
 pero no en el While, por lo tanto cree la variavle global vacia para depsues modificarla dentro del Do */

let otro= "";
let list = new lista ();

do {
    let nm = String(prompt("Nombre"));
    let apll = String(prompt("Apellido"));
    let gdo = Number(prompt("Grado"));
    let gpo = String(prompt("Grupo"));

    let nuevo = new alumno(nm, apll, gdo, gpo);

    list.agregar(nuevo);

    otro = String(prompt("Otro alumno?"));

}while (otro === "Si") {
    list.imprimmir();    
}




















































