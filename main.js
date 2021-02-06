 // Ejercicio 2 
class contacto {
    constructor(nombre, apellidos, telefono, domicilio, telcasa, email){
        this.nombre = nombre;
        this.apellidos= apellidos;
        this.domicilio = domicilio;
        this.telefono= telefono;
        this.telcasa = telcasa;
        this.email= email;
    }
    soy (){
        console.log(`Hola soy ${this.nombre} ${this.apellidos} vivo en ${this.domicilio} mi numero es ${this.telefono}`)
    }
}

class agenda {
    constructor(){
        this.lista= [];
    }

    agregar(nuevo){
        this.lista.push(nuevo);
    }

    buscar (contacto, list){
        let buscado = list.filter(function(registro){
            console.log(registro=== contacto);
        })
    }
}


// let menu = String(prompt("Que hacer 1 agregar 2 buscar"));
let registro = new agenda();
let respuesta ="";

/* switch(menu !== ""){
    case (menu == "agregar" || respuesta=== "si"):
    let nm = String(prompt("Nombre"));
    let apll= String(prompt("Apellidos"));
    let dom = String(prompt("Domicilio"));
    let tel= Number(prompt("Telefono"));
    let telca = Number(prompt("Telefono casa"));
    let mail= String(prompt("Email"));

    let nuevo = new contacto(nm, apll, dom, tel, telca, mail);

    registro.agregar(nuevo);
    nuevo.soy()
    respuesta = String(prompt("Desea agregar más registros si o no?"));
    break;
    case (menu === "buscar"):
        let cual = String(prompt("Ingrese nombre buscado"));
        registro.buscar(cual, registro);
        break;
    default:
        console.log("No ingresaste ninguna opcion valida");
        break;
} */

// Metodo bsucar con array

/* buscar (contacto, list){

    if (list.indexOf(contacto) === -1){
        console.log("No existe este contacto");
    } else{ 
        let destino = list.filter(valor => valor === contacto);

        let pregunta = String(prompt("Hay un total de " + destino.length + " seleccione uno"));
        console.log(destino[pregunta-1]);
    }
} */

/* do {
    if (menu === "agregar"){
        let nm = String(prompt("Nombre"));
        let apll= String(prompt("Apellidos"));
        let dom = String(prompt("Domicilio"));
        let tel= Number(prompt("Telefono"));
        let telca = Number(prompt("Telefono casa"));
        let mail= String(prompt("Email"));

        let nuevo = new contacto(nm, apll, dom, tel, telca, mail);

        registro.agregar(nuevo);
        nuevo.soy()
        respuesta = String(prompt("Desea agregar más registros si o no?"));
        }
} while(respuesta=== "si"){
    menu=String(prompt("Que hacer 1 agregar 2 buscar"));
}

 if(menu=== "buscar"){
    let cual = String(prompt("Ingrese nombre buscado"));
    registro.buscar(cual, registro);
} */



let nuevo = new contacto("juan", "j", "55555", "jjj", 6666, "hdhdh@");
let nuevo2 = new contacto("juan", "t", "55555", "jjj", 6666, "hdhdh@");
let nuevo3= new contacto("juan", "k", "55555", "jjj", 6666, "hdhdh@");
let nuevo4 = new contacto("erik", "o", "55555", "jjj", 6666, "hdhdh@");

registro.agregar(nuevo);
registro.agregar(nuevo2);
registro.agregar(nuevo3);
registro.agregar(nuevo4);

console.table(Object.values(registro.lista.filter(x => x.nombre === "erik")));




 

