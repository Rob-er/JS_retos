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
        this.agenda= [];
    }

    agregar(nuevo){
        this.agenda.push(nuevo);
    }

    buscar (contacto, list){
        
        if (list.indexOf(contacto) === -1){
            console.log("No existe este contacto");
        } else{ 
           let destino = list.filter(valor => valor === contacto);

            let pregunta = String(prompt("Hay un total de " + destino.length + " seleccione uno"));
            console.log(destino[pregunta-1]);
        }
    }
}
/*
let menu = String(prompt("Que hacer 1 agregar 2 buscar"));
let registro = new agenda();
let respuesta ="";

switch(menu !== ""){
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
    case(respuesta=== "no"):
        menu;
        break;
    default:
        console.log("No ingresaste ninguna opcion valida");
        break;
}
 */


let lista =[{nombre: "erik", 
            nombre: "juan",
            nombre: "David",
            nombre: "erik",
            nombre: "erik"}]

/* function buscar (contacto, list){
        
    if (list.indexOf(contacto) === -1){
        console.log("No existe este contacto");
    } else{ 
       let destino = list.filter(valor => valor === contacto);

        let pregunta = String(prompt("Hay un total de " + destino.length + " seleccione uno"));
        console.log(destino[pregunta-1]);
    }
}

buscar("erik", lista) */
let destino = [];

let filstrado = lista.filter((el)=>{
    return el.nombre=== "erik";
});

console.log(filstrado);