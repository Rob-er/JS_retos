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


// ejercicio 2

/* const contactos = {nombre:"", apellidos:"", telefono:"", domicilio:"", telcasa:"", email:""};

const menu = Number(prompt("Ingrese 1 para añadir, 2 para buscar, 3 para eliminar contacto y 4 para modificar")); */

/* function agregar (nm, apll, tel, dom, telc, mail){
   let variables = [nm, apll, tel, dom, telc, mail];
   let con = ["nombre","apellidos", "telefono", "domicilio", "telcasa", "email"]
   variables.forEach(element, val => {
       element= String(prompt("indique el " + element))
       contactos.val=element;
   });
}
agregar (); */

/* let persona = function(nombre, apellidos, telefono, domicilio, telcasa, email){
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.telcasa = telefono;
    this.domicilio = domicilio;
    this.telcasa = telcasa;
    this.email = email;
    this.imprimir = () => {};
} 

let parametros = {nombre, apellidos, telefono, domicilio, telcasa, email};

const menu = Number(prompt("Ingrese 1 para añadir, 2 para buscar, 3 para eliminar contacto y 4 para modificar"));

function agregar (Nombre){
    for (let i = 0, i = 5, i++){
        let nombre = String(prompt("nombre"));
        let apellidos = String(prompt("nombre"));
        let telefono = String(prompt("nombre"));
        let domicilio = String(prompt("nombre"));
        let telcasa = String(prompt("nombre"));
        let email = String(prompt("nombre"));

    }
    Nombre = new persona(console.log(""), console.log())
} */



/* let agenda = function(nombre, edad, genero, telefono){
    this.nombre = nombre;
    this.edad =edad;
    this.genero = genero;
    this.telefono = telefono;
    this.imprimir = () => {console.log(this.nombre + this.edad + this.genero + this.genero)};
}

let lista= [];

let consulta = Number(prompt("indice"));

function agregar(){
    let contacto = new agenda("jo", 66, "m", "777777");
    lista.push(contacto);
    console.log(lista);
}
contacto.imprimir() */

class persona{
    constructor(nombre, apellido, genero){
        this.nombre= nombre;
        this.apellido = apellido;
        this.genero = genero;
    }
}

let lista= [];

class alumno extends persona{
    constructor(nombre, apellido, grado, grupo){
    super(nombre, apellido);
        this.grado= grado;
        this.grupo= grupo;
        this.registro = () => {
            lista.push(this.nombre + " " + this.apellido + " " + this.grado + " " + this.grupo)
        }
        this.imprimir= () => {
            console.log(lista);
        }
    }
}

const menu = String(prompt("Desea agregar alumnos?"));

if (menu=== "Si"){
    let nuevo = new alumno (String(prompt("Nombre")), String(prompt("Apellido")), Number(prompt("grado")), String(prompt("grupo")));
    nuevo.registro();
    nuevo.imprimir();
}




















































