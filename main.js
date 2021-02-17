
/* function buton (id){
    const boton = document.getElementById(id);
    const padre = boton.parentNode
    let aleatorio= Math.floor(Math.random() * 12345678);
    let hijo = document.createElement("h1");
    hijo.innerHTML= "Hola padre";
    padre.appendChild(hijo);

    padre.style.backgroundColor = "#" + aleatorio;
} */

// con listener 

function boton (id){
    const buton_2 = document.getElementById(id);
    buton_2.addEventListener("click", () => {
        let padre = buton_2.parentNode;
        let aleatorio= Math.floor(Math.random() * 12345678);
        let hijo = document.createElement("h1");
        hijo.innerHTML= "Hola padre";
        padre.appendChild(hijo);
        padre.style.backgroundColor = "#" + aleatorio;
    } )
}

document.querySelector('#alone').addEventListener("click", () => {
    document.body.innerHTML = "";
})







