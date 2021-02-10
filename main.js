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


/* function menor(datos){
    let nuevo= [];
    for (let x of datos){
        if(x.edad > 17){
            nuevo= [...nuevo, x];
        }
    }
    return nuevo;
}
    
console.log(menor(objeto)); */

let numero = [3, 4, 6, 7, 8, 93, 4];

/* const doble = numero.map((x, index)  => {
    if (index % 2){
        return x *2;
    }
}) */

/* const doble = numero.filter((x, i) => {
    if (i % 2 === 0){
        return x*2;
    }
}) */

const doble = numero.reduce((an, act) => {
    return an + act
}, [])

console.log(doble);







/* let otro = objeto.map(x => { 
    let nue = [];
    if (x.edad > 17){
        nue.push(x);
    }
    return nue
});

console.log(otro); */

