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

    buscar (registro){
        let nm =prompt("nombre");
        let prop = Object.values(registro.lista.filter(x => x.nombre === nm));
        
        if (prop.length-1 > 0){
            let cual = Number(prompt("cual desea ver ?" + " hay " + prop.length + " registros con ese nombre"));
            let resp = prop[cual-1];    
            console.table(resp);
        } else{
            console.table(prop);
        }
    }

    eliminar (registro){
        let nm =prompt("nombre");
        let prop = Object.values(registro.lista.filter(x => x.nombre === nm));
        if (prop.length-1 > 0){
            console.table(prop);
            let cual = Number(prompt("cual desea eliminar ?" + " hay " + prop.length + " registros con ese nombre"));
            let aviso = prompt(`Esta seguro que desea eliminar el registro ${cual} ?`);
            if (aviso === "si"){
                let eliminado=  prop.splice((cual-1),1);
               // console.table(prop);
                console.table(eliminado);
            } else{
                nm = prompt("nombre");
            }
        } else{
            let aviso = prompt(`Esta seguro que desea eliminar el registro de ${nm} ?`);
            if (aviso === "si"){
                prop.shift();
                console.log("Se ha eliminado el registro exitosamente");
                console.table(prop);
            } else{
                nm = prompt("nombre");
            }
        }
    }
}

let menu = String(prompt("Que desea hacer: agregar, buscar, eliminar"));
let registro = new agenda();
let respuesta ="";

do {
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
   registro.buscar(registro);
}

if(menu === "eliminar"){
    registro.eliminar(registro);


}

// instancias de ejemplo
/* let nuevo = new contacto("juan", "j", "55555", "jjj", 6666, "hdhdh@");
let nuevo2 = new contacto("juan", "t", "55555", "jjj", 6666, "hdhdh@");
let nuevo3= new contacto("juan", "k", "55555", "jjj", 6666, "hdhdh@");
let nuevo4 = new contacto("erik", "o", "55555", "jjj", 6666, "hdhdh@");

registro.agregar(nuevo);
registro.agregar(nuevo2);
registro.agregar(nuevo3);
registro.agregar(nuevo4); */

// Metodo de busqueda por nombre exitosa
/* let nm =prompt("nombre");
let prop = Object.values(registro.lista.filter(x => x.nombre === nm));

if (prop.length-1 > 0){
    let cual = Number(prompt("cual desea ver ?" + " hay " + prop.length + " registros con ese nombre"));
    let resp = prop[cual-1];    
    console.table(resp);
} else{
    console.table(prop);
} */



// Metodo buscar con array

/* buscar (contacto, list){

    if (list.indexOf(contacto) === -1){
        console.log("No existe este contacto");
    } else{ 
        let destino = list.filter(valor => valor === contacto);

        let pregunta = String(prompt("Hay un total de " + destino.length + " seleccione uno"));
        console.log(destino[pregunta-1]);
    }
} */




