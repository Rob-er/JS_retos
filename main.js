 // Ejercicio 2 
class Contacto {
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

class Agenda {
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
                console.log("Se ha eliminado el registro exitosamente");
                console.table(prop.pop());
            } else{
                nm = prompt("nombre");
            }
        }
    }

    modificar(registro){
        let nm = prompt("nombre");
        let prop = Object.values(registro.lista.filter(x => x.nombre === nm));
        if (prop.length-1 > 0){
            console.table(prop);
            let cual = Number(prompt(`Cual desea modificar?  hay ${prop.length} registro scpn ese nombre`));   

            let nm = prompt("Nombre");
            let apll = prompt("Apellidos");
            let dom = prompt("Domicilio");
            let tel = Number(prompt("Telefono"));
            let telca = Number(prompt("Telefono casa"));
            let mail = prompt("Email");

            let nuevo = new Contacto(nm, apll, dom, tel, telca, mail);
            
            let aviso = prompt(`Esta seguro que desea modificar el registro ${cual} ?`);
            if (aviso === "si"){
                let mod = prop.splice((cual-1),1, nuevo);
                console.table(prop);
                console.table(mod);
            } else{
                nm = prompt("nombre");
            }
        } else{
            let nm = (prompt("Nombre"));
            let apll = (prompt("Apellidos"));
            let dom = (prompt("Domicilio"));
            let tel = Number(prompt("Telefono"));
            let telca = Number(prompt("Telefono casa"));
            let mail = (prompt("Email"));

            let nuevo = new Contacto(nm, apll, dom, tel, telca, mail);

            let aviso = prompt(`Esta seguro que desea modificar el registro de ${nm} ?`);
            if (aviso === "si"){
                prop.splice(0,1, nuevo);
                console.log("Se ha modificado el registro exitosamente");
                console.table(prop);
            } else{
                nm = prompt("nombre");
            }
        }
    }
}

let menu = prompt("Que desea hacer: agregar(a), buscar(b), eliminar(e) o modificar(m)");
let registro = new Agenda();
let respuesta ="";

do {
    if (menu === "a"){
        let nm = prompt("Nombre");
        let apll= prompt("Apellidos");
        let dom = prompt("Domicilio");
        let tel= Number(prompt("Telefono"));
        let telca = Number(prompt("Telefono casa"));
        let mail= prompt("Email");

        let nuevo = new Contacto(nm, apll, dom, tel, telca, mail);

        registro.agregar(nuevo);
        nuevo.soy()
        respuesta = prompt("Desea agregar más registros si o no?");
        }
} while(respuesta=== "si"){
    menu = prompt("Que desea hacer: agregar(a), buscar(b), eliminar(e) o modificar(m)");
}

 if(menu=== "b"){
   registro.buscar(registro);
} else if (menu === "m"){
    registro.modificar(registro);
} else if (menu === "e"){
    registro.eliminar(registro);
}

 // Prueba For In y para modificar registros
 // instancias de ejemplo
/* let registro= new agenda();

let nuevo = new contacto("juan", "j", "55555", "jjj", 6666, "hdhdh@");
let nuevo2 = new contacto("juan", "t", "55555", "jjj", 6666, "hdhdh@");
let nuevo3= new contacto("juan", "k", "55555", "jjj", 6666, "hdhdh@");
let nuevo4 = new contacto("erik", "o", "55555", "jjj", 6666, "hdhdh@");

registro.agregar(nuevo);
registro.agregar(nuevo2);
registro.agregar(nuevo3);
registro.agregar(nuevo4);

let nm =prompt("nombre");
let prop = Object.values(registro.lista.filter(x => x.nombre === nm));
    console.table(prop.length);
let cual = Number(prompt(`Cual desea modificar?  hay ${prop.length} registro scpn ese nombre`));
let varia= prop[cual-1]; */

/* for(let propiedad in varia){
   let nu_re = prompt("Nuevos datos");
   let {nombre} = varia;
   varia.nombre = nu_re;
   console.log(varia);
}
 */
/* let tama = Object.keys(registro.lista.length);
for(let i = 0; i <= tama; i++){
    console.log(Object.keys(registro.lista[i]));
}
 */